"use client";

import { useRef, useState } from "react";
import { languages, profile, projects } from "@/lib/data";
import { useT, ui } from "@/lib/i18n";

export default function TerminalApp() {
  const t = useT();
  const [lines, setLines] = useState<string[]>([
    "macOS Portfolio Terminal — v1.0",
    "",
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const scrollDown = () =>
    requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" }));

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const out: string[] = [`$ ${raw}`];
    if (!cmd) {
      // no-op
    } else if (cmd === "help") {
      out.push(
        t([
          "Perintah: help, whoami, skills, projects, contact, clear",
          "Commands: help, whoami, skills, projects, contact, clear",
        ])
      );
    } else if (cmd === "whoami") {
      out.push(`${profile.name} — ${profile.roles.join(", ")}`, `${profile.university} · IPK ${profile.gpa}`);
    } else if (cmd === "skills") {
      out.push(languages.map((l) => `${l.name} (${l.level}%)`).join(" · "));
    } else if (cmd === "projects") {
      out.push(...projects.slice(0, 6).map((p) => `▸ ${p.title[0]} — ${p.language}`), t([`+${projects.length - 6} lainnya (buka folder Portofolio)`, `+${projects.length - 6} more (open the Portfolio folder)`]));
    } else if (cmd === "contact") {
      out.push(`${profile.email} — ${profile.location}`);
    } else if (cmd === "clear") {
      setLines([]);
      setInput("");
      scrollDown();
      return;
    } else {
      out.push(t([`command not found: ${cmd}`, `command not found: ${cmd}`]));
    }
    out.push("");
    setLines((ls) => [...ls, ...out]);
    setInput("");
    scrollDown();
  };

  return (
    <div
      className="h-full overflow-auto bg-[#1a1a1e]/95 p-4 font-mono text-[13px] leading-relaxed text-[#e8e8ed]"
      onClick={(e) => (e.currentTarget.querySelector("input") as HTMLInputElement)?.focus()}
    >
      {lines.map((l, i) => (
        <p key={i} className={l.startsWith("$") ? "text-[#30d158]" : ""}>
          {l}
        </p>
      ))}
      <div className="flex items-center gap-2">
        <span className="text-[#30d158]">➜</span>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && run(input)}
          className="flex-1 bg-transparent text-[#e8e8ed] outline-none"
          placeholder={t(ui.apps.terminalHint)}
          aria-label="terminal input"
        />
      </div>
      <div ref={endRef} />
    </div>
  );
}
