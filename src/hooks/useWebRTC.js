import { useState } from "react";

export function useWebRTC() {
  const [connection, setConnection] = useState(null);
  const [channel, setChannel] = useState(null);
  const [pendingCandidates, setPendingCandidates] = useState([]);

  function createConnection(onMessage) {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });
    const dc = pc.createDataChannel("chat");

    dc.onmessage = onMessage;
    setConnection(pc);
    setChannel(dc);
    return { pc, dc };
  }

  return { connection, channel, createConnection, pendingCandidates, setPendingCandidates };
}
