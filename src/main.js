import { ref, push, onValue, get, set, child } from "firebase/database";
import { database } from "./firebase.js";

import QRCode from "qrcode";

let localConnection;
let dataChannel;
let roomIdInput = document.getElementById("room-id");
let fileInput = document.getElementById("file-input");

const sendProgressContainer = document.getElementById(
  "send-progress-container"
);
const sendProgressBar = document.getElementById("send-progress-bar");
const sendProgressText = document.getElementById("send-progress-text");

const receiveProgressContainer = document.getElementById(
  "receive-progress-container"
);
const receiveProgressText = document.getElementById("receive-progress-text");

let isSending = true;
let currentFileReader = null;

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

document.getElementById("msg-btn").onclick = () => {
  const msg = document.getElementById("msg-text").value;
  appendText(msg, "Upload");
  dataChannel.send(
    JSON.stringify({
      type: "file-message",
      content: msg,
    })
  );
};

document.getElementById("create-btn").onclick = async () => {
  document.getElementById("entrada").style.display = "none";

  const chave = gerarChave();
  const roomId = chave;

  QRCode.toDataURL(chave, { width: 300 }, function (err, url) {
    if (err) {
      console.error(err);
      return;
    }

    const img = document.createElement("img");
    img.src = url;

    const p = document.createElement("p");
    p.textContent = chave;
    p.classList.add("qrcode-key");

    document.getElementById("qrcode").appendChild(p);
    document.getElementById("qrcode").appendChild(img);
    document.getElementById("qrcode").style.display = "flex";
  });

  roomIdInput.value = chave;
  roomIdInput.disabled = true;
  const roomRef = ref(database, "rooms/" + roomId);
  localConnection = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  });
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

  document.getElementById("create-btn").disabled = true;
};

document.getElementById("join-btn").onclick = () => entrarNoP2P();

async function entrarNoP2P() {
  const roomId = roomIdInput.value;
  const roomRef = ref(database, "rooms/" + roomId);

  localConnection = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  });

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
  isSending = true;

  const file = fileInput.files[0];
  if (!file) return;

  const receivedFileName = file.name;
  const url = URL.createObjectURL(file);

  const chunkSize = 16 * 1024;
  let offset = 0;

  dataChannel.send(
    JSON.stringify({
      type: "file-info",
      name: receivedFileName,
      size: file.size,
    })
  );

  const reader = new FileReader();

  reader.onload = (event) => {
    if (!isSending) {
      sendProgressText.textContent = "Envio cancelado.";
      sendProgressContainer.style.display = "none";
      currentFileReader.remove();
      return;
    }

    sendProgressContainer.style.display = "block";
    dataChannel.send(event.target.result);
    offset += chunkSize;

    const percent = Math.min((offset / file.size) * 100, 100);
    sendProgressBar.value = percent;
    sendProgressText.textContent = `Enviando: ${percent.toFixed(0)}%`;

    if (offset < file.size) {
      readSlice(offset);
    } else {
      dataChannel.send(JSON.stringify({ type: "file-end" }));
      sendProgressText.textContent = "Envio concluído!";
      setTimeout(() => (sendProgressContainer.style.display = "none"), 2000);
      currentFileReader.remove();
      appendFile(receivedFileName, "Upload", url);
      currentFileReader = null;
    }
  };

  function readSlice(o) {
    const slice = file.slice(o, o + chunkSize);
    reader.readAsArrayBuffer(slice);
  }

  readSlice(0);

  appendFile(receivedFileName, "Upload", url, false);
};

function setupDataChannel(channel) {
  let receivedChunks = [];
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
          receivedChunks = [];
          receiveProgressContainer.style.display = "flex";
          return;
        } else {
          receivedChunks.push(event.data);
        }

        if (data.type === "file-end") {
          const blob = new Blob(receivedChunks);
          const url = URL.createObjectURL(blob);
          appendFile(receivedFileName, "Download", url);
          receivedChunks = [];

          receiveProgressText.textContent = "Recebimento concluído!";
          setTimeout(
            () => (receiveProgressContainer.style.display = "none"),
            2000
          );
          return;
        }

        if (data.type === "file-message") {
          const text = data.content;
          appendText(text, "Download");

          receiveProgressText.textContent =
            "Recebimento da mensagem concluído!";
          setTimeout(() => {
            receiveProgressContainer.style.display = "none";
          }, 2000);

          receivedChunks = [];

          return;
        }

        if (data.type === "file-cancel") {
          receiveProgressText.textContent =
            "Envio foi cancelado pelo remetente.";
          receiveProgressContainer.style.display = "none";
          receivedChunks = [];
          return;
        }
      } catch (err) {
        console.error("Erro ao interpretar string recebida:", err);
      }
    } else {
      receivedChunks.push(event.data);
    }
  };
}

function appendFile(nome, usuario, link, enviado = true) {
  console.log(nome);
  const arq = document.createElement("div");
  arq.classList.add("arq");
  currentFileReader = arq;

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

  if (enviado) {
    const a = document.createElement("a");
    a.classList.add("download-file");
    usuario == "Download" ? a.classList.add("down") : a.classList.add("up");
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
  } else {
    const btn = document.createElement("button");
    btn.classList.add("cancel-btn");
    btn.id = "cancel-send-btn";

    btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" 
     viewBox="0 0 24 24" fill="none" stroke="currentColor" 
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  `;

    btn.onclick = () => {
      isSending = false;
      dataChannel.send(JSON.stringify({ type: "file-cancel" }));
      sendProgressText.textContent = "Envio cancelado.";
      currentFileReader.remove();
      sendProgressContainer.style.display = "none";
    };
    section.appendChild(btn);
  }

  arq.appendChild(section);

  document.getElementById("arqs").appendChild(arq);
}

function appendText(text, usuario) {
  const arq = document.createElement("div");
  arq.classList.add("arq");
  currentFileReader = arq;

  const textP = document.createElement("p");
  textP.classList.add("name-file");
  textP.textContent = text;
  arq.appendChild(textP);

  const section = document.createElement("section");
  section.classList.add("arq-col");

  const userP = document.createElement("p");
  userP.classList.add("user-file");
  userP.textContent = usuario;
  usuario == "Download"
    ? userP.classList.add("down")
    : userP.classList.add("up");
  section.appendChild(userP);

  const a = document.createElement("a");
  a.classList.add("download-file");
  usuario == "Download" ? a.classList.add("down") : a.classList.add("up");
  a.addEventListener("click", () => {
    copyText(text);
  });

  a.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z" fill="currentColor"></path>
        <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" fill="currentColor"></path>
      </g>
    </svg>
  `;
  section.appendChild(a);

  arq.appendChild(section);

  document.getElementById("arqs").appendChild(arq);
}

function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      alert("Erro ao copiar o texto: " + err);
    });
}
