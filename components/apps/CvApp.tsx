"use client";

import { useT, ui } from "@/lib/i18n";

export default function CvApp() {
  const t = useT();
  return (
    <div className="h-full overflow-auto p-6">
      <div className="m-auto flex min-h-full flex-col items-center justify-center gap-4 text-center">
      <div className="text-6xl">📄</div>
      <h3 className="text-xl font-bold">{t(ui.apps.cvTitle)}</h3>
      <p className="max-w-md text-sm opacity-60">{t(ui.apps.cvDesc)}</p>
      <a
        href="/cv.pdf"
        download
        className="rounded-xl bg-[#30d158] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-green-500/25 transition hover:scale-105 hover:brightness-110 active:scale-95"
      >
        ↓ {t(ui.apps.download)}
      </a>
      </div>
    </div>
  );
}
