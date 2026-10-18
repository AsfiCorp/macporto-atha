"use client";

import { useState } from "react";
import { useT, ui } from "@/lib/i18n";
import { useOS, type AppId } from "@/lib/os";

// ikon dock: gradient rounded-square + emoji/SVG glyph ala Big Sur
function DockIcon({
  id,
  label,
  gradient,
  glyph,
  onClick,
  running,
}: {
  id: AppId;
  label: string;
  gradient: string;
  glyph: React.ReactNode;
  onClick: () => void;
  running: boolean;
}) {
  const [hover, setHover] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  const scale = hover ? 1.35 : 1;
  const lift = hover ? -14 : 0;

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div className="glass pointer-events-none absolute -top-9 z-20 whitespace-nowrap rounded-md border border-white/20 bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
          {label}
        </div>
      )}
      <button
        aria-label={label}
        onClick={() => {
          onClick();
          setBouncing(true);
          setTimeout(() => setBouncing(false), 900);
        }}
        className={`flex h-12 w-12 items-center justify-center rounded-[14px] text-2xl shadow-lg ring-1 ring-white/20 transition-transform duration-200 ${
          bouncing ? "dock-bounce" : ""
        }`}
        style={{ background: gradient, transform: `translateY(${lift}px) scale(${scale})` }}
      >
        {glyph}
      </button>
      <span
        className={`mt-1 h-1 w-1 rounded-full transition-opacity ${
          running ? "bg-white/80 opacity-100" : "opacity-0"
        }`}
        data-app={id}
      />
    </div>
  );
}

export default function Dock() {
  const t = useT();
  const { open, active, toggleApp } = useOS();

  const items: {
    id: AppId; label: readonly [string, string]; gradient: string; glyph: React.ReactNode;
  }[] = [
    { id: "portfolio", label: ui.dock.finder, gradient: "linear-gradient(135deg,#3fa9f5,#0a66e8)", glyph: <span>📁</span> },
    { id: "about", label: ui.dock.about, gradient: "linear-gradient(135deg,#8e8e93,#48484a)", glyph: <span>👤</span> },
    { id: "skills", label: ui.dock.skills, gradient: "linear-gradient(135deg,#5ac8fa,#007aff)", glyph: <span>📊</span> },
    { id: "photos", label: ui.dock.photos, gradient: "linear-gradient(135deg,#ff9500,#ff375f)", glyph: <span>🖼️</span> },
    { id: "notes", label: ui.dock.notes, gradient: "linear-gradient(135deg,#ffd60a,#ff9f0a)", glyph: <span>📝</span> },
    { id: "mail", label: ui.dock.mail, gradient: "linear-gradient(135deg,#64d2ff,#0a84ff)", glyph: <span>✉️</span> },
    { id: "cv", label: ui.dock.cv, gradient: "linear-gradient(135deg,#30d158,#248a3d)", glyph: <span>📄</span> },
    { id: "terminal", label: ui.dock.terminal, gradient: "linear-gradient(135deg,#1c1c1e,#3a3a3c)", glyph: <span>⌨️</span> },
    { id: "chat", label: ui.dock.chat, gradient: "linear-gradient(135deg,#30d158,#0a84ff)", glyph: <span>🤖</span> },
    { id: "safari", label: ui.dock.safari, gradient: "linear-gradient(135deg,#e8f4ff,#bfe1ff 45%,#7cc0f4)", glyph: (
      // kompas Safari
      <svg viewBox="0 0 64 64" className="h-9 w-9 drop-shadow">
        <circle cx="32" cy="32" r="26" fill="url(#compass)" />
        <defs>
          <linearGradient id="compass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a8cff" /><stop offset="1" stopColor="#0055d4" />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="32" y1="8" x2="32" y2={i % 3 === 0 ? 13 : 11} stroke="white" strokeWidth={i % 3 === 0 ? 2 : 1.2} strokeLinecap="round" opacity="0.9" transform={`rotate(${i * 30} 32 32)`} />
        ))}
        <path d="M32 32 43 21 36.5 35.5 21 43 Z" fill="#ff4d3f" stroke="white" strokeWidth="1" />
        <path d="M32 32 21 43 27.5 28.5 Z" fill="#f2f5f7" />
      </svg>
    ) },
  ];

  return (
    <div className="fixed inset-x-0 bottom-1.5 z-[90] flex justify-center">
      <div className="glass flex items-end gap-2 rounded-2xl border border-white/25 bg-white/15 px-3 py-2 shadow-2xl">
        {items.map((it) => (
          <DockIcon
            key={it.id}
            id={it.id}
            label={t(it.label)}
            gradient={it.gradient}
            glyph={it.glyph}
            running={open.includes(it.id) && active === it.id ? true : open.includes(it.id)}
            onClick={() => toggleApp(it.id)}
          />
        ))}
      </div>
    </div>
  );
}
