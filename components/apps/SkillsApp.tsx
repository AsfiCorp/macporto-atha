"use client";

import { languages, tools } from "@/lib/data";
import { useT, ui } from "@/lib/i18n";

export default function SkillsApp() {
  const t = useT();
  return (
    <div className="grid h-full gap-8 overflow-auto p-8 md:grid-cols-2">
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide opacity-50">{t(ui.apps.languages)}</h3>
        <div className="space-y-3">
          {languages.map((l) => (
            <div key={l.name}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium">{l.name}</span>
                <span className="opacity-50">{l.note} · {l.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-black/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6]"
                  style={{ width: `${l.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide opacity-50">{t(ui.apps.tools)}</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-black/10 bg-black/5 px-3.5 py-1.5 text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
