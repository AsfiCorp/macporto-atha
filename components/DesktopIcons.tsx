"use client";

import { useState } from "react";
import { useT, ui } from "@/lib/i18n";
import { useOS } from "@/lib/os";

/* ---- mockup mini per app (statis, ringan) ---- */

function PreviewFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass relative h-[110px] w-[150px] overflow-hidden rounded-lg border border-white/30 shadow-lg app-surface">
      {/* traffic lights */}
      <div className="absolute left-1.5 top-1.5 z-10 flex gap-1">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      {children}
    </div>
  );
}

function PortfolioPreview() {
  return (
    <PreviewFrame>
      <div className="flex h-full items-end justify-center gap-2 pb-3 pt-6">
        {[
          "linear-gradient(135deg,#3fa9f5,#0a66e8)",
          "linear-gradient(135deg,#30d158,#0a84ff)",
          "linear-gradient(135deg,#ff9f0a,#ff375f)",
          "linear-gradient(135deg,#bf5af2,#5e5ce6)",
        ].map((g, i) => (
          <div
            key={i}
            className="h-12 w-9 rounded-md border border-white/30 shadow"
            style={{ background: g, transform: `rotate(${(i - 1.5) * 8}deg)` }}
          />
        ))}
      </div>
    </PreviewFrame>
  );
}

function AboutPreview() {
  return (
    <PreviewFrame>
      <div className="flex h-full flex-col items-center justify-center gap-1.5">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#3fa9f5] to-[#5e5ce6]" />
        <div className="h-1.5 w-16 rounded-full bg-black/15" />
        <div className="h-1.5 w-10 rounded-full bg-black/10" />
        <span className="mt-0.5 rounded-full bg-[#30d158]/20 px-1.5 py-0.5 text-[7px] font-bold text-[#248a3d]">
          ● OPEN TO WORK
        </span>
      </div>
    </PreviewFrame>
  );
}

function SkillsPreview() {
  return (
    <PreviewFrame>
      <div className="flex h-full flex-col justify-center gap-2 px-4 pt-2">
        {[85, 65, 45].map((w, i) => (
          <div key={i}>
            <div className="mb-0.5 h-1 w-8 rounded-full bg-black/10" />
            <div className="h-2 rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6]"
                style={{ width: `${w}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </PreviewFrame>
  );
}

function CvPreview() {
  return (
    <PreviewFrame>
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <div className="relative h-10 w-8 rounded-sm border border-black/20 bg-white shadow-sm">
          <div className="absolute left-1 top-1.5 h-0.5 w-5 bg-black/20" />
          <div className="absolute left-1 top-3 h-0.5 w-6 bg-black/15" />
          <div className="absolute left-1 top-4.5 h-0.5 w-4 bg-black/15" />
        </div>
        <span className="rounded-md bg-[#30d158] px-2 py-0.5 text-[8px] font-bold text-white">↓ CV</span>
      </div>
    </PreviewFrame>
  );
}

/* ---- kartu desktop ---- */

const CARDS = [
  { key: "portfolio", app: "portfolio" as const, label: ui.desktop.portfolio, Preview: PortfolioPreview },
  { key: "about", app: "about" as const, label: ui.desktop.aboutTxt, Preview: AboutPreview },
  { key: "skills", app: "skills" as const, label: ui.dock.skills, Preview: SkillsPreview },
  { key: "cv", app: "cv" as const, label: ui.desktop.cv, Preview: CvPreview },
];

export default function DesktopIcons() {
  const t = useT();
  const { openApp } = useOS();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      className="absolute right-6 top-12 z-10 grid w-[330px] grid-cols-2 gap-x-3 gap-y-5"
      onMouseDown={() => setSelected(null)}
    >
      {CARDS.map(({ key, app, label, Preview }) => (
        <button
          key={key}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => setSelected(key)}
          onDoubleClick={() => openApp(app)}
          className="group flex flex-col items-center gap-1.5 outline-none"
        >
          <span
            className={`rounded-xl transition-all duration-300 ${
              selected === key
                ? "ring-2 ring-sky-400/80 ring-offset-2 ring-offset-transparent"
                : ""
            } group-hover:scale-[1.05] group-hover:shadow-2xl`}
          >
            <Preview />
          </span>
          <span
            className={`rounded px-1.5 py-0.5 text-[11px] font-medium text-white drop-shadow ${
              selected === key ? "bg-sky-500" : "bg-black/25"
            }`}
          >
            {t(label)}
          </span>
          <span className="text-[9px] text-white/50 opacity-0 transition group-hover:opacity-100">
            {t(ui.desktop.doubleClick)}
          </span>
        </button>
      ))}
    </div>
  );
}
