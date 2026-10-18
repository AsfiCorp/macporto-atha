"use client";

import { profile, services, stats, socials } from "@/lib/data";
import { useT, ui } from "@/lib/i18n";

export default function AboutApp() {
  const t = useT();
  return (
    <div className="flex h-full flex-col gap-6 overflow-auto p-8">
      <div className="flex items-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-24 w-24 rounded-full border-2 border-white/40 object-cover shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="opacity-60">{t(ui.apps.student)}</p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#30d158]/15 px-2.5 py-0.5 text-xs font-semibold text-[#248a3d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" /> {t(ui.apps.openToWork)}
          </span>
        </div>
      </div>

      <p className="leading-relaxed opacity-80">{profile.bio}</p>
      <p className="-mt-3 leading-relaxed opacity-80">{profile.bioEn}</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value} className="rounded-xl border border-black/10 bg-black/5 p-3 text-center">
            <p className="text-xl font-bold">{s.value}</p>
            <p className="text-xs opacity-60">{t(s.label)}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-2 text-sm sm:grid-cols-2">
        <p><b>{t(ui.apps.gpa)}:</b> {profile.gpa}</p>
        <p><b>{t(ui.apps.university)}:</b> {profile.university}</p>
        <p><b>{t(ui.apps.major)}:</b> {profile.major}</p>
        <p><b>{t(ui.apps.location)}:</b> {profile.location}</p>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wide opacity-50">{t(ui.apps.services)}</h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.tag} className="rounded-xl border border-black/10 bg-black/5 p-3">
              <p className="text-sm font-semibold">{s.title}</p>
              <p className="mt-1 text-xs opacity-60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-[#0a84ff] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:brightness-110"
          >
            {s.name}
          </a>
        ))}
      </div>
    </div>
  );
}
