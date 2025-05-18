import { ref, push, onValue, get, set, child } from "firebase/database";
import { database } from "./firebase.js";

import QRCode from "qrcode";

let localConnection;
let dataChannel;
let roomIdInput = document.getElementById("room-id");
let fileInput = document.getElementById("file-input");

let valorDaChave;

function gerarChave(tamanho = 8) {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);

  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));

  return btoa(binary);
}

document.getElementById("scan-btn").onclick = () => {
  const readerDiv = document.getElementById("reader");
  readerDiv.style.display = "block";

  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode
    .start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      (decodedText, decodedResult) => {
        valorDaChave = decodedText;
        roomIdInput.value = valorDaChave;
        entrarNoP2P();
        html5QrCode.stop();
        readerDiv.style.display = "none";
      },
      (errorMessage) => {}
    )
    .catch((err) => {
      console.error("Erro ao acessar câmera: ", err);
    });
};

document.getElementById("create-btn").onclick = async () => {
  document.getElementById("entrada").style.display = "none";

  const chave = gerarChave();
  const roomId = chave;

  QRCode.toDataURL(chave, function (err, url) {
    if (err) {
      console.error(err);
      return;
    }

    const img = document.createElement("img");
    img.src = url;
    document.getElementById("qrcode").appendChild(img);
    document.getElementById("qrcode").style.display = "flex";
  });

  roomIdInput.value = chave;
  roomIdInput.disabled = true;
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
};

document.getElementById("join-btn").onclick = entrarNoP2P();

async function entrarNoP2P() {
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
}

fileInput.onchange = () => {
  const file = fileInput.files[0];
  if (!file) return;

  const receivedFileName = file.name;
  const url = URL.createObjectURL(file);

  dataChannel.send(
    JSON.stringify({ type: "file-info", name: receivedFileName })
  );

  const reader = new FileReader();
  reader.onload = () => {
    dataChannel.send(reader.result);
  };
  reader.readAsArrayBuffer(file);

  appendFile(receivedFileName, "Interno", url);
};

function setupDataChannel(channel) {
  let receivedFileName = "arquivo_recebido";

  channel.onopen = () => {
    console.log("Canal aberto.");

    document.getElementById("actions").style.display = "none";
    document.getElementById("chat").style.display = "flex";
  };

  channel.onmessage = (event) => {
    if (typeof event.data === "string") {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "file-info" && data.name) {
          receivedFileName = data.name;
          return;
        }
      } catch {}
    } else {
      const blob = new Blob([event.data]);
      const url = URL.createObjectURL(blob);

      appendFile(receivedFileName, "Externo", url);
      const link = document.createElement("a");
    }
  };
}

function appendFile(nome, usuario, link) {
  const arq = document.createElement("div");
  arq.classList.add("arq");

  const nomeP = document.createElement("p");
  nomeP.classList.add("name-file");
  nomeP.textContent = nome;
  arq.appendChild(nomeP);

  const section = document.createElement("section");
  section.classList.add("arq-col");

  const userP = document.createElement("p");
  userP.classList.add("user-file");
  userP.textContent = usuario;
  section.appendChild(userP);

  const a = document.createElement("a");
  a.classList.add("download-file");
  a.href = link;
  a.download = nome;

  a.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"
         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"/>
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M7 10l5 5m0 0l5-5m-5 5V4"/>
    </svg>
  `;

  section.appendChild(a);
  arq.appendChild(section);

  document.getElementById("arqs").appendChild(arq);
}
