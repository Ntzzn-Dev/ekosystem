import { ref, push, onValue, get, set, child } from "firebase/database";
import { database } from "./firebase.js";

let localConnection;
let dataChannel;
let roomIdInput = document.getElementById("room-id");
let messages = document.getElementById("messages");
let messageInput = document.getElementById("message");
let fileInput = document.getElementById("file-input");

document.getElementById("create-btn").onclick = async () => {
  const roomId = roomIdInput.value;
  const roomRef = ref(database, "rooms/" + roomId);
  localConnection = new RTCPeerConnection();
  dataChannel = localConnection.createDataChannel("chat");

  setupDataChannel(dataChannel);

  localConnection.onicecandidate = (event) => {
    if (event.candidate) {
      push(child(roomRef, "callerCandidates"), JSON.stringify(event.candidate));
    }
  };

  const offer = await localConnection.createOffer();
  await localConnection.setLocalDescription(offer);
  await set(child(roomRef, "offer"), JSON.stringify(offer));

  onValue(child(roomRef, "answer"), async (snapshot) => {
    const data = snapshot.val();
    if (data && !localConnection.currentRemoteDescription) {
      const answer = new RTCSessionDescription(JSON.parse(data));
      await localConnection.setRemoteDescription(answer);
    }
  });

  onValue(child(roomRef, "calleeCandidates"), (snapshot) => {
    snapshot.forEach((childSnap) => {
      const candidate = new RTCIceCandidate(JSON.parse(childSnap.val()));
      localConnection.addIceCandidate(candidate);
    });
  });

  document.getElementById("chat").style.display = "block";
};

document.getElementById("join-btn").onclick = async () => {
  const roomId = roomIdInput.value;
  const roomRef = ref(database, "rooms/" + roomId);

  localConnection = new RTCPeerConnection();

  localConnection.ondatachannel = (event) => {
    dataChannel = event.channel;
    setupDataChannel(dataChannel);
  };

  localConnection.onicecandidate = (event) => {
    if (event.candidate) {
      push(child(roomRef, "calleeCandidates"), JSON.stringify(event.candidate));
    }
  };

  const offerSnap = await get(child(roomRef, "offer"));
  if (offerSnap.exists()) {
    const offer = new RTCSessionDescription(JSON.parse(offerSnap.val()));
    await localConnection.setRemoteDescription(offer);

    const answer = await localConnection.createAnswer();
    await localConnection.setLocalDescription(answer);
    await set(child(roomRef, "answer"), JSON.stringify(answer));
  }

  onValue(child(roomRef, "callerCandidates"), (snapshot) => {
    snapshot.forEach((childSnap) => {
      const candidate = new RTCIceCandidate(JSON.parse(childSnap.val()));
      localConnection.addIceCandidate(candidate);
    });
  });

  document.getElementById("chat").style.display = "block";
};

document.getElementById("send-btn").onclick = () => {
  const message = messageInput.value;
  dataChannel.send(message);
  appendMessage("Você: " + message);
  messageInput.value = "";
};

fileInput.onchange = () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    dataChannel.send(reader.result);
    appendMessage("Você enviou um arquivo.");
  };
  reader.readAsArrayBuffer(file);
};

function setupDataChannel(channel) {
  channel.onmessage = (event) => {
    if (typeof event.data === "string") {
      appendMessage("Outro: " + event.data);
    } else {
      appendMessage("Arquivo recebido.");
      const blob = new Blob([event.data]);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "arquivo_recebido.pptx";
      link.click();
    }
  };
}

function appendMessage(msg) {
  messages.value += msg + "\n";
}
