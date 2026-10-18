"use client";

import { useEffect } from "react";
import { useT, ui } from "@/lib/i18n";

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const t = useT();

  useEffect(() => {
    const timer = setTimeout(onDone, 2400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
      onClick={onDone}
    >
      {/* Desktop-only warning */}
      <div className="animate-pulse mb-8 rounded-xl border border-yellow-400/60 bg-yellow-400/10 px-5 py-3 text-center">
        <p className="text-sm font-bold tracking-wide text-yellow-300">
          Warning !!! For Desktop Only
        </p>
        <p className="mt-1 text-xs text-yellow-200/70">
          Gunakan desktop untuk tampilan maksimal · Use desktop for the best experience
        </p>
      </div>
      {/* Apple logo */}
      <svg viewBox="0 0 384 512" className="mb-10 h-20 w-20 fill-white" aria-hidden>
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      {/* progress bar */}
      <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-white"
          style={{ animation: "boot-progress 2.1s ease-in-out forwards" }}
        />
      </div>
      <style>{`@keyframes boot-progress { from { width: 0% } to { width: 100% } }`}</style>
      <button className="mt-8 text-xs text-white/40 hover:text-white/70">
        {t(ui.boot.skip)}
      </button>
    </div>
  );
}
