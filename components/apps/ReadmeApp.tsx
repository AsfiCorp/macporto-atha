"use client";

import { profile } from "@/lib/data";
import { useT, ui } from "@/lib/i18n";

export default function ReadmeApp() {
  const t = useT();
  return (
    <div className="h-full overflow-auto p-8 font-mono text-sm leading-relaxed">
      <p className="font-bold">$ cat BACA-SAYA.txt</p>
      <br />
      <p>{profile.alias} — {profile.name}</p>
      <p className="opacity-60">{profile.roles.join(" · ")}</p>
      <br />
      <p>📱 Desktop: {t(["klik ikon di desktop atau dock", "click icons on the desktop or dock"])}</p>
      <p>📁 Folder &quot;{t(ui.desktop.portfolio)}&quot;: {t(["hover untuk membuka folder 3D, klik kartu proyek untuk lightbox", "hover to open the 3D folder, click a project card for the lightbox"])}</p>
      <p>⌨️ Terminal: {t(["coba ketik help", "try typing help"])}</p>
      <p>🤖 ATHA-BOT: {t(["tanya apa saja tentang Athaillah", "ask anything about Athaillah"])}</p>
      <p>🇮🇩/🇬🇧: {t(["ganti bahasa di menu bar (kanan atas)", "switch language in the menu bar (top right)"])}</p>
      <br />
      <p className="opacity-40">{profile.email} — {profile.location}</p>
    </div>
  );
}
