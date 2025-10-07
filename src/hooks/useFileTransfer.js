import { useState } from "react";

export function useFileTransfer(channel) {
  const [progress, setProgress] = useState(0);

  function sendFile(file) {
    const chunkSize = 16 * 1024;
    let offset = 0;
    const reader = new FileReader();

    reader.onload = e => {
      channel.send(e.target.result);
      offset += chunkSize;
      setProgress(Math.min((offset / file.size) * 100, 100));
      if (offset < file.size) readSlice(offset);
    };

    function readSlice(o) {
      const slice = file.slice(o, o + chunkSize);
      reader.readAsArrayBuffer(slice);
    }
    readSlice(0);
  }

  return { progress, sendFile };
}
