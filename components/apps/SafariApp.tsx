"use client";

import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";

const SAFARI_URL = "https://portofolio-atha-69uxptaxs-asfi-corp.vercel.app";

// browser mini ala Safari: address bar + loading bar + iframe
export default function SafariApp() {
  const t = useT();
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    // ponytail: iframe onload tak selalu terpicu (diblokir X-Frame-Options); kalau >6 dtk gagal, tawarkan buka di tab baru
    const timer = setTimeout(() => setLoading((l) => l || false), 2500);
    const failTimer = setTimeout(() => setBlocked(true), 6000);
    return () => { clearTimeout(timer); clearTimeout(failTimer); };
  }, []);

  return (
    <div className="flex h-full flex-col bg-white/80">
      {/* toolbar */}
      <div className="relative flex items-center gap-2 border-b border-black/10 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-lg bg-black/10 px-3 py-1 text-xs">
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-black/50" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
          <span className="truncate font-medium opacity-60">{SAFARI_URL.replace("https://", "")}</span>
        </div>
        {loading && (
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#0a84ff] to-[#64d2ff]" style={{ animation: "loadbar 2.4s ease-out forwards" }} />
        )}
      </div>
      {/* konten web */}
      <div className="relative flex-1 bg-white">
        <iframe
          src={SAFARI_URL}
          title="Safari"
          className="h-full w-full border-0"
          onLoad={() => setLoading(false)}
        />
        {loading && !blocked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-[#0a84ff]" />
            <p className="text-xs font-medium opacity-50">{t(["Memuat halaman…", "Loading page…"])}</p>
          </div>
        )}
        {blocked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white px-6 text-center">
            <span className="text-3xl">🧭</span>
            <p className="text-sm font-medium">{t(["Situs ini tidak mengizinkan ditampilkan di dalam frame.", "This site doesn't allow embedding in a frame."])}</p>
            <a
              href={SAFARI_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#0a84ff] px-4 py-1.5 text-xs font-semibold text-white shadow hover:brightness-110"
            >
              {t(["Buka di tab baru ↗", "Open in new tab ↗"])}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}