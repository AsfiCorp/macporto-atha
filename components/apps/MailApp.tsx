"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { useT, ui } from "@/lib/i18n";

export default function MailApp() {
  const t = useT();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard tidak tersedia */ }
  };

  const inputCls =
    "w-full rounded-lg border border-black/15 bg-white/60 px-3 py-2 text-sm outline-none focus:border-[#0a84ff] focus:ring-2 focus:ring-[#0a84ff]/30";

  return (
    <div className="grid h-full gap-8 overflow-auto p-8 md:grid-cols-2">
      <div className="flex flex-col justify-center gap-4">
        <div className="text-5xl">✉️</div>
        <h3 className="text-xl font-bold">{profile.email}</h3>
        <button
          onClick={copy}
          className="w-fit rounded-lg border border-black/10 bg-black/5 px-3 py-1.5 text-xs font-semibold transition hover:bg-black/10"
        >
          {copied ? t(ui.apps.copied) : t(ui.apps.copyEmail)}
        </button>
        <a
          href={`mailto:${profile.email}`}
          className="w-fit rounded-lg bg-[#0a84ff] px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
        >
          {t(ui.apps.submit)} →
        </a>
      </div>
      <form
        className="space-y-3"
        action={`mailto:${profile.email}`}
        method="post"
        encType="text/plain"
      >
        <input required name="name" placeholder={t(ui.apps.name)} className={inputCls} />
        <input required type="email" name="email" placeholder={t(ui.apps.email)} className={inputCls} />
        <select name="type" className={inputCls} defaultValue="hire">
          <option value="hire">{t(ui.apps.hire)}</option>
          <option value="general">{t(ui.apps.general)}</option>
        </select>
        <textarea required name="message" rows={5} placeholder={t(ui.apps.message)} className={inputCls} />
        <button
          type="submit"
          className="w-full rounded-lg bg-[#0a84ff] py-2.5 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
        >
          {t(ui.apps.submit)} →
        </button>
      </form>
    </div>
  );
}
