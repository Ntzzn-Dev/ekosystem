import { useState } from "react";
import { generateKeyRoom } from "./utils/generateKeyRoom";
import QrGenerator from "./components/QrGenerator";
import QrScanner from "./components/QrScanner";
import ChatBox from "./components/ChatBox";
import { ref, child, push, set, onValue, get } from "firebase/database";
import { database } from "./firebase";

export default function App() {
  const [roomId, setRoomId] = useState("");
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [scan, setScanning] = useState(false);

  const [localConnection, setLocalConnection] = useState(null);
  const [dataChannel, setDataChannel] = useState(null);
  const [pendingCandidates, setPendingCandidates] = useState([]);

  async function enterRoom() {
    if (document.getElementById("room").value) {
      setRoomId(document.getElementById("room").value);
      setScanning(false);
      await initCallee(document.getElementById("room").value);
    } else {
      setScanning(true);
    }
  }

  async function createRoom() {
    const id = generateKeyRoom();
    setRoomId(id);
    await initCaller(id);
  }

  function handleSend(msg) {
    setMessages([...messages, { text: msg, sender: "me" }]);
    if (dataChannel && dataChannel.readyState === "open") {
      dataChannel.send(JSON.stringify({ type: "msg", content: msg }));
    }
  }

  async function handleScan(decodedText) {
    setRoomId(decodedText);
    setScanning(false);
    await initCallee(decodedText);
  }

  function setupDataChannel(channel) {
    console.log("tentado");
    channel.onopen = () => {
      console.log("DataChannel aberto!");
      setConnected(true);
    };
    channel.onclose = () => setConnected(false);

    channel.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "msg") {
          setMessages((prev) => [...prev, { text: data.content, sender: "peer" }]);
        }
      } catch (err) {
        console.error("Erro ao ler mensagem:", err);
      }
    };
  }

  async function initCaller(roomId) { //createP2P
    const roomRef = ref(database, "rooms/" + roomId);
    const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
    setLocalConnection(pc);

    const dc = pc.createDataChannel("chat");
    setDataChannel(dc);
    setupDataChannel(dc);

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === "connected") setConnected(true);
      else if (pc.connectionState === "disconnected" || pc.connectionState === "failed") setConnected(false);
    };

    pc.onicecandidate = (event) => {
      if (event.candidate) push(child(roomRef, "callerCandidates"), JSON.stringify(event.candidate));
    };

    onValue(child(roomRef, "calleeCandidates"), (snapshot) => {
      snapshot.forEach((childSnap) => {
        const candidate = new RTCIceCandidate(JSON.parse(childSnap.val()));
        if (pc.currentRemoteDescription) {
          pc.addIceCandidate(candidate).catch(console.error);
        } else {
          setPendingCandidates(prev => [...prev, candidate]);
        }
      });
    });

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    await set(child(roomRef, "offer"), JSON.stringify(offer));

    onValue(child(roomRef, "answer"), async (snapshot) => {
      const data = snapshot.val();
      if (data && !pc.currentRemoteDescription) {
        const answer = new RTCSessionDescription(JSON.parse(data));
        await pc.setRemoteDescription(answer);
        await processPendingCandidates();
      }
    });
    console.log("criado");
  }

  async function initCallee(roomId) { //entrarNoP2P()
    try {
      const roomRef = ref(database, "rooms/" + roomId);

      const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
      setLocalConnection(pc);

      pc.ondatachannel = (event) => {
        setDataChannel(event.channel);
        setupDataChannel(event.channel);
      };

      pc.onicecandidate = (event) => {
        if (event.candidate) push(child(roomRef, "calleeCandidates"), JSON.stringify(event.candidate));
      };

      onValue(child(roomRef, "callerCandidates"), (snapshot) => {
        snapshot.forEach((childSnap) => {
          const candidate = new RTCIceCandidate(JSON.parse(childSnap.val()));
          if (pc.currentRemoteDescription) {
            pc.addIceCandidate(candidate).catch(console.error);
          } else {
            setPendingCandidates(prev => [...prev, candidate]);
          }
        });
      });

      const offerSnap = await get(child(roomRef, "offer"));
      if (!offerSnap.exists()) return;

      const offer = new RTCSessionDescription(JSON.parse(offerSnap.val()));
      await pc.setRemoteDescription(offer);

      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      await set(child(roomRef, "answer"), JSON.stringify(answer));

      await processPendingCandidates();
    } catch (err) {
      console.error("Erro em entrarNoP2P:", err);
    }

    console.log("entrado");
  }

  async function processPendingCandidates() {
    const candidates = [...pendingCandidates];
    for (const candidate of candidates) {
      try {
        await localConnection.addIceCandidate(candidate);
      } catch (err) {
        console.error("Erro ao adicionar ICE candidate pendente:", err);
      }
    }
    setPendingCandidates([]);
  }

  return (
    <div className="p-6 text-center">
      {!connected ? (
        <>
          <button onClick={createRoom} className="bg-green-500 text-white px-4 py-2 rounded">Criar Sala</button>
          {roomId && <QrGenerator roomId={roomId} />}
          <input type="text" id="room"></input>
          <button onClick={enterRoom} className="bg-green-500 text-white px-4 py-2 rounded">Entrar Sala</button>
          {scan && <QrScanner onScan={handleScan} />}
        </>
      ) : (
        <ChatBox onSend={handleSend} messages={messages} />
      )}
    </div>
  );
}
