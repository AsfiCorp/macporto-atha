"use client";

import { useEffect, useRef, useState } from "react";
import { useLang, useT, ui, type Lang } from "@/lib/i18n";
import { useOS } from "@/lib/os";
import { profile } from "@/lib/data";

export default function MenuBar({ dark, setDark }: { dark: boolean; setDark: (d: boolean) => void }) {
  const t = useT();
  const { lang, setLang } = useLang();
  const { openApp } = useOS();
  const [time, setTime] = useState("");
  const [appleOpen, setAppleOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleString(lang === "id" ? "id-ID" : "en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    tick();
    const iv = setInterval(tick, 10000);
    return () => clearInterval(iv);
  }, [lang]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setAppleOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const item = "flex w-full items-center gap-2 px-3 py-1.5 text-[13px] rounded-md hover:bg-[var(--accent)] hover:text-white";

  return (
    <div
      ref={ref}
      className="glass fixed inset-x-0 top-0 z-[90] flex h-7 items-center justify-between bg-black/25 px-3 text-[13px] font-medium text-white"
    >
      <div className="flex items-center gap-4">
        {/* Apple menu */}
        <div className="relative">
          <button
            aria-label="Apple menu"
            onClick={() => setAppleOpen((v) => !v)}
            className="rounded px-1 hover:bg-white/15"
          >
            <svg viewBox="0 0 384 512" className="h-3.5 w-3.5 fill-white" aria-hidden>
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
          </button>
          {appleOpen && (
            <div className="glass absolute left-0 top-7 w-60 rounded-xl border border-white/15 bg-black/50 p-1.5 shadow-2xl">
              <button className={item} onClick={() => { setAppleOpen(false); openApp("readme"); }}>
                {t(ui.appleMenu.about)}
              </button>
              <div className="my-1 h-px bg-white/15" />
              <button className={item} onClick={() => { setAppleOpen(false); setDark(!dark); }}>
                {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          )}
        </div>
        <span className="font-semibold">{profile.alias}</span>
        <span className="opacity-80">{t(ui.menubar.file)}</span>
        <span className="opacity-80">{t(ui.menubar.window)}</span>
        <span className="opacity-80">{t(ui.menubar.help)}</span>
      </div>

      <div className="flex items-center gap-4">
        {/* toggle bahasa */}
        <div className="flex items-center overflow-hidden rounded-full border border-white/25 text-[11px] font-semibold">
          {(["id", "en"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2.5 py-0.5 transition-colors ${
                lang === l ? "bg-white text-black" : "text-white/80 hover:bg-white/10"
              }`}
            >
              {l === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}
            </button>
          ))}
        </div>
        <span suppressHydrationWarning>{time}</span>
      </div>
    </div>
  );
}
