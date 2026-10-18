"use client";

import { useState } from "react";
import { chatDefault, chatGreeting, chatKB } from "@/lib/data";
import { useLang, useT, ui } from "@/lib/i18n";

interface Msg {
  from: "bot" | "me";
  text: string;
}

export default function ChatApp() {
  const t = useT();
  const { lang } = useLang();
  const idx = lang === "en" ? 1 : 0;
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: chatGreeting[idx] }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const answer = (q: string) => {
    const s = q.toLowerCase();
    const hit = chatKB.find((k) => k.keywords.some((kw) => s.includes(kw)));
    return hit ? hit.answer[idx] : chatDefault[idx];
  };

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMsgs((m) => [...m, { from: "me", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: answer(text) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-3 overflow-auto p-5">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
            <p
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === "me"
                  ? "rounded-br-md bg-[#0a84ff] text-white"
                  : "rounded-bl-md bg-black/8"
              }`}
            >
              {m.text}
            </p>
          </div>
        ))}
        {typing && (
          <p className="text-xs opacity-50">{t(ui.apps.typing)}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 border-t border-black/10 px-4 pt-2">
        {ui.apps.quick.map((q, i) => (
          <button
            key={i}
            onClick={() => send(q[idx])}
            className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs transition hover:bg-black/10"
          >
            {q[idx]}
          </button>
        ))}
      </div>
      <form
        className="flex gap-2 p-4"
        onSubmit={(e) => { e.preventDefault(); send(input); }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t(ui.apps.placeholder)}
          className="flex-1 rounded-full border border-black/15 bg-white/60 px-4 py-2 text-sm outline-none focus:border-[#0a84ff] focus:ring-2 focus:ring-[#0a84ff]/30"
        />
        <button
          type="submit"
          className="rounded-full bg-[#30d158] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 active:scale-95"
          aria-label={t(ui.apps.submit)}
        >
          ➤
        </button>
      </form>
    </div>
  );
}
