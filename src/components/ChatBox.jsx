import { useState } from "react";

export default function ChatBox({ onSend, messages }) {
  const [msg, setMsg] = useState("");

  return (
    <div className="p-4">
      <div className="h-64 overflow-y-auto border p-2">
        {messages.map((m, i) => (
          <p key={i} className={m.sender === "me" ? "text-right" : ""}>
            {m.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Mensagem..."
        />
        <button onClick={() => { onSend(msg); setMsg(""); }} className="bg-blue-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </div>
    </div>
  );
}
