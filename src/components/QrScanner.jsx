import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

export default function QrScanner({ onScan }) {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start({ facingMode: "environment" }, { fps: 10 }, (decodedText) => {
      onScan(decodedText);
      html5QrCode.stop();
    });
  }, []);

  return <div id="reader" className="w-64 h-64" />;
}
