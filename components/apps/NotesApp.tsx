"use client";

import { experiences, seminars } from "@/lib/data";
import { useT, ui } from "@/lib/i18n";

export default function NotesApp() {
  const t = useT();
  return (
    <div className="space-y-4 overflow-auto p-6">
      {seminars.map((s) => (
        <div key={s.title} className="rounded-xl border border-black/10 bg-black/5 p-4">
          <p className="font-semibold">{s.title}</p>
          <p className="text-xs opacity-50">{s.organizer} · {s.year}</p>
          <p className="mt-1 text-sm opacity-75">{s.desc}</p>
        </div>
      ))}
      {experiences.map((e) => (
        <div key={e.title} className="rounded-xl border border-black/10 bg-black/5 p-4">
          <p className="font-semibold">{e.title}</p>
          <p className="text-xs opacity-50">{e.org} · {e.period}</p>
          <p className="mt-1 text-sm opacity-75">{e.desc}</p>
          {e.tags && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {e.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#0a84ff]/10 px-2 py-0.5 text-[11px] font-semibold text-[#0a66e8]">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
      <p className="pt-2 text-center text-xs opacity-40">{t(ui.apps.tags)}: {experiences.length + seminars.length}</p>
    </div>
  );
}
