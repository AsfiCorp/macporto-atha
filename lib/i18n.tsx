"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "id" | "en";
export type L = readonly [string, string];

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "id",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "id") setLang(saved);
  }, []);

  const set = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  return <LangContext.Provider value={{ lang, setLang: set }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

// hook terjemahan: t(tuple) -> string sesuai bahasa aktif
export function useT() {
  const { lang } = useLang();
  return (v: L) => (lang === "en" ? v[1] : v[0]);
}

// ---------- kamus UI macOS ----------
export const ui = {
  appleMenu: {
    about: ["Tentang Portofolio Ini", "About This Portfolio"],
    restart: ["Mulai Ulang…", "Restart…"],
    sleep: ["Tidur", "Sleep"],
  },
  menubar: {
    file: ["Berkas", "File"],
    edit: ["Edit", "Edit"],
    view: ["Tampilan", "View"],
    window: ["Jendela", "Window"],
    help: ["Bantuan", "Help"],
  },
  desktop: {
    portfolio: ["Portofolio", "Portfolio"],
    aboutTxt: ["Tentang Saya.txt", "About Me.txt"],
    readme: ["BACA-SAYA.txt", "README.txt"],
    cv: ["CV.pdf", "CV.pdf"],
    doubleClick: ["klik dua kali untuk membuka", "double-click to open"],
  },
  dock: {
    finder: ["Finder", "Finder"],
    about: ["Tentang Saya", "About Me"],
    portfolio: ["Portofolio", "Portfolio"],
    skills: ["Keahlian", "Skills"],
    photos: ["Foto", "Photos"],
    notes: ["Catatan", "Notes"],
    mail: ["Mail", "Mail"],
    terminal: ["Terminal", "Terminal"],
    chat: ["ATHA-BOT", "ATHA-BOT"],
    cv: ["CV", "CV"],
    safari: ["Safari", "Safari"],
  },
  window: {
    portfolio: ["Portofolio — Proyek", "Portfolio — Projects"],
    about: ["Tentang Saya", "About Me"],
    skills: ["Keahlian & Tools", "Skills & Tools"],
    photos: ["Foto Organisasi", "Organization Photos"],
    notes: ["Catatan — Pengalaman", "Notes — Experience"],
    mail: ["Mail — Kontak", "Mail — Contact"],
    terminal: ["Terminal", "Terminal"],
    chat: ["ATHA-BOT", "ATHA-BOT"],
    cv: ["Preview — CV", "Preview — CV"],
    readme: ["BACA-SAYA", "README"],
    safari: ["Safari", "Safari"],
  },
  apps: {
    // about
    openToWork: ["Terbuka untuk peluang kerja", "Open to work"],
    student: ["Mahasiswa Teknik Informatika", "Informatics Engineering Student"],
    gpa: ["IPK Kumulatif", "Cumulative GPA"],
    university: ["Universitas", "University"],
    major: ["Jurusan", "Major"],
    location: ["Lokasi", "Location"],
    role: ["Peran", "Roles"],
    services: ["Layanan", "Services"],
    // skills
    languages: ["Bahasa Pemrograman", "Programming Languages"],
    tools: ["Tools & Software", "Tools & Software"],
    // photos
    photosEmpty: ["Belum ada foto.", "No photos yet."],
    // notes
    period: ["Periode", "Period"],
    tags: ["Tag", "Tags"],
    // mail
    name: ["Nama", "Name"],
    email: ["Email kamu", "Your email"],
    hire: ["Permintaan Hire / Kerja sama", "Job Offer / Collaboration"],
    general: ["Pesan Umum", "General Message"],
    message: ["Tulis pesan, tawaran proyek, atau detail pekerjaan di sini…", "Write your message, project offer, or job details here…"],
    submit: ["Kirim", "Send"],
    copied: ["✓ Email tersalin!", "✓ Email copied!"],
    copyEmail: ["Salin email", "Copy email"],
    download: ["Unduh CV", "Download CV"],
    // cv
    cvTitle: ["Curriculum Vitae", "Curriculum Vitae"],
    cvDesc: [
      "Unduh CV untuk rekap lengkap pendidikan, keahlian, organisasi, dan pengalaman proyek.",
      "Download my CV for a complete recap of education, skills, organizations, and project experience.",
    ],
    // terminal
    terminalHint: ["ketik 'help' untuk daftar perintah", "type 'help' for command list"],
    // chat
    typing: ["ATHA-BOT mengetik…", "ATHA-BOT is typing…"],
    placeholder: ["Tanya apa saja tentang Athaillah…", "Ask anything about Athaillah…"],
    quick: [
      ["Keahlian?", "Skills?"],
      ["Project apa saja?", "What projects?"],
      ["Organisasi?", "Organizations?"],
      ["Cara hire?", "How to hire?"],
    ] as L[],
  },
  folder: {
    heading: ["Pilih kategori untuk melihat proyek", "Pick a category to explore projects"],
    projects: ["proyek", "projects"],
    project: ["proyek", "project"],
    view: ["Lihat Proyek", "View Project"],
    openRepo: ["Buka Repository", "Open Repository"],
    close: ["Tutup", "Close"],
    // kategori
    web: ["Web Development", "Web Development"],
    mobile: ["Mobile & App", "Mobile & App"],
    game: ["Game & IoT", "Game & IoT"],
    design: ["Design & Utility", "Design & Utility"],
  },
  boot: {
    skip: ["Lewati", "Skip"],
  },
} as const;
