import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function QrGenerator({ roomId }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (roomId) QRCode.toDataURL(roomId, { width: 200 }).then(setUrl);
  }, [roomId]);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-mono">{roomId}</p>
      {url && <img src={url} alt="QR Code" />}
    </div>
  );
}
