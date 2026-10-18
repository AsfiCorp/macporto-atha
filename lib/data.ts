// ============================================================
//  FILE DATA TERPUSAT — edit semua konten website di sini.
//  Foto, link TikTok, dan dokumentasi tinggal diganti di bawah.
// ============================================================

export const profile = {
  name: "Athaillah Sulthan Firasyal Ilmi",
  shortName: "Athaillah",
  alias: "ATHAILLAH.SFI",
  roles: ["Web Developer", "App Developer", "Game Developer", "Project Manager", "Tech Leader"],
  gpa: "3.55+",
  university: "Universitas Pasundan",
  major: "Teknik Informatika",
  email: "athaillahsfi@gmail.com",
  location: "Bandung, Indonesia",
  photo: "/gallery/about.jpg",
  bio: "Mahasiswa Teknik Informatika Universitas Pasundan dengan IPK 3.55+. Berpengalaman membangun aplikasi web, mobile, dan game — sekaligus terbiasa memimpin project dan organisasi. Menggabungkan kemampuan teknis (Laravel, Next.js, Flutter, Unity) dengan insting desain dan manajemen.",
  bioEn: "Informatics Engineering student at Universitas Pasundan with a 3.55+ GPA. Experienced in building web, mobile, and game applications — and used to leading projects and organizations. Combines technical skills (Laravel, Next.js, Flutter, Unity) with design instinct and management.",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/AsfiCorp", icon: "github" },
  { name: "Instagram", url: "https://www.instagram.com/firasyal_ilmi/", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/athaillah-sulthan-firasyal-ilmi-b84109298/", icon: "linkedin" },
  // TODO: ganti dengan link TikTok asli saat sudah tersedia
  { name: "TikTok", url: "#", icon: "tiktok" },
];

export const languages = [
  { name: "PHP", level: 88, note: "Laravel, native" },
  { name: "TypeScript", level: 82, note: "Next.js, React" },
  { name: "Dart", level: 78, note: "Flutter" },
  { name: "Java", level: 75, note: "OOP, Swing" },
  { name: "C#", level: 70, note: "Unity 2D" },
  { name: "Kotlin", level: 62, note: "Android" },
  { name: "SQL", level: 85, note: "MySQL, PostgreSQL" },
  { name: "HTML/CSS", level: 90, note: "Semantic, Tailwind" },
];

export const tools = [
  "VS Code", "Cursor", "Antigravity", "Figma", "Canva", "Procreate",
  "Stitch", "TablePlus", "DBeaver", "DBngin", "Unity", "Git",
];

import type { L } from "./i18n-bridge";

export const services = [
  { title: "Web & App Development", titleEn: "Web & App Development", desc: "Stack modern: Laravel, Next.js, Flutter — dari database design hingga deployment.", descEn: "Modern stacks: Laravel, Next.js, Flutter — from database design to deployment.", tag: "BUILD" },
  { title: "Game Development", titleEn: "Game Development", desc: "Game 2D berbasis Unity & C#: GDD, spritesheet, mekanik permainan, dan UI.", descEn: "2D games with Unity & C#: GDD, spritesheets, game mechanics, and UI.", tag: "PLAY" },
  { title: "System Analysis", titleEn: "System Analysis", desc: "Requirement gathering, workflow mapping, dan dokumentasi fungsional perangkat lunak.", descEn: "Requirement gathering, workflow mapping, and functional software documentation.", tag: "ANALYZE" },
  { title: "Project & Event Management", titleEn: "Project & Event Management", desc: "Memimpin tim developer, mengelola event teknologi, dan mengeksekusi kampanye digital.", descEn: "Leading dev teams, managing tech events, and executing digital campaigns.", tag: "LEAD" },
];

// Fallback repos — di-enrich otomatis dari GitHub API (/api/github) saat live.
export const fallbackRepos = [
  { name: "PPL_A_KEL2_M3", description: "Proyek Perangkat Lunak kelas A 2026 — Kelompok 2", language: "TypeScript", url: "https://github.com/AsfiCorp/PPL_A_KEL2_M3", updated: "2026-10-11" },
  { name: "WebHukum", description: "Sistem informasi web hukum berbasis Laravel (Blade)", language: "Blade", url: "https://github.com/AsfiCorp/233040102_AthaillahSulthanFirasyalIlmi_WebHukum", updated: "2026-09-03" },
  { name: "MachineLearning_A_WellDone", description: "Proyek machine learning berbasis TypeScript", language: "TypeScript", url: "https://github.com/AsfiCorp/MachineLearning_A_WellDone", updated: "2026-07-04" },
  { name: "praktikum_manajemen_proyek", description: "Praktikum manajemen proyek perangkat lunak", language: "TypeScript", url: "https://github.com/AsfiCorp/praktikum_manajemen_proyek", updated: "2026-06-16" },
  { name: "isneg", description: "Aplikasi Android berbasis Kotlin", language: "Kotlin", url: "https://github.com/AsfiCorp/isneg", updated: "2026-06-15" },
  { name: "PraktikumPemrogramanMobile_D", description: "Praktikum pemrograman mobile dengan Dart/Flutter", language: "Dart", url: "https://github.com/AsfiCorp/PraktikumPemrogramanMobile_D_233040102", updated: "2026-06-06" },
  { name: "sistemaplikasi_bergerak_IAL", description: "Sistem aplikasi bergerak — konsep merek pakaian IAL", language: "Dart", url: "https://github.com/AsfiCorp/sistemaplikasi_bergerak_IAL", updated: "2026-06-05" },
  { name: "PP2_2025", description: "Proyek pemrograman 2 — aplikasi desktop Java", language: "Java", url: "https://github.com/AsfiCorp/PP2_2025_233040102_C", updated: "2025-12-22" },
  { name: "prakweb2025_H", description: "Praktikum web 2025 — Laravel/Blade", language: "Blade", url: "https://github.com/AsfiCorp/prakweb2025_H_233040102", updated: "2025-12-08" },
  { name: "pp12025_A", description: "Proyek pemrograman 1 — Java", language: "Java", url: "https://github.com/AsfiCorp/pp12025_A_233040102", updated: "2025-05-28" },
  { name: "PraktikumBasisData", description: "Praktikum basis data — perancangan & implementasi DB", language: "SQL", url: "https://github.com/AsfiCorp/PraktikumBasisData-233040102", updated: "2024-10-30" },
  { name: "pw2024_tubes", description: "Tugas besar Pemrograman Web 2024 — PHP", language: "PHP", url: "https://github.com/AsfiCorp/pw2024_tubes_233040102", updated: "2024-06-11" },
  { name: "pw2024", description: "Repository kuliah Pemrograman Web 2024 — PHP", language: "PHP", url: "https://github.com/AsfiCorp/pw2024_233040102", updated: "2024-03-17" },
  { name: "itw2023_project2", description: "Proyek 2 Informatika & Teknologi Web — HTML", language: "HTML", url: "https://github.com/AsfiCorp/itw2023_project2_233040102", updated: "2024-01-05" },
  { name: "itw2023_project1", description: "Proyek 1 Informatika & Teknologi Web — CSS", language: "CSS", url: "https://github.com/AsfiCorp/itw2023_project1_233040102", updated: "2023-12-26" },
  { name: "athaPorto", description: "Portofolio pribadi versi awal", language: "CSS", url: "https://github.com/AsfiCorp/athaPorto", updated: "2023-12-25" },
  { name: "itw2023", description: "Mata kuliah ITW 2023 — HTML", language: "HTML", url: "https://github.com/AsfiCorp/itw2023_233040102", updated: "2023-12-21" },
  { name: "AsfiCorp.github.io", description: "GitHub Pages — portofolio pertama", language: "HTML", url: "https://github.com/AsfiCorp/AsfiCorp.github.io", updated: "2023-06-21" },
];

// ============================================================
//  PROJECTS — nama & keterangan hasil pembacaan tiap repositori.
//  Saat kartu diklik, detail live diambil dari GitHub API (modal).
//  live = demo/deployment yang bisa dibuka publik (jika ada).
// ============================================================
export const projects = [
  {
    repo: "233040102_AthaillahSulthanFirasyalIlmi_WebHukum",
    title: ["D'Mahesa Law Firm — Web App", "D'Mahesa Law Firm — Web App"] as L,
    desc: [
      "Sistem web kantor hukum: situs publik bergaya glassmorphism, CMS admin untuk data pengacara & berita, login Google, dan chatbot AI Gemini. Laravel 12 + Tailwind CSS v4.",
      "Law firm web system: glassmorphism public site, admin CMS for advocates & news, Google login, and a Gemini AI chatbot. Laravel 12 + Tailwind CSS v4.",
    ] as L,
    language: "Blade",
    url: "https://github.com/AsfiCorp/233040102_AthaillahSulthanFirasyalIlmi_WebHukum",
  },
  {
    repo: "sistemaplikasi_bergerak_IAL",
    title: ["IAL Vintage Planner", "IAL Vintage Planner"] as L,
    desc: [
      "Aplikasi planner multiplatform (Flutter) untuk konsep merek pakaian IAL — terintegrasi API gambar & asisten AI, berjalan di Android/iOS/Web/Desktop.",
      "Multiplatform (Flutter) planner app for the IAL clothing brand concept — integrated with image API & AI assistant, runs on Android/iOS/Web/Desktop.",
    ] as L,
    language: "Dart",
    url: "https://github.com/AsfiCorp/sistemaplikasi_bergerak_IAL",
  },
  {
    repo: "PPL_A_KEL2_M3",
    title: ["Proyek Perangkat Lunak — Kelompok 2", "Software Engineering Project — Team 2"] as L,
    desc: [
      "Proyek kelompok mata kuliah Proyek Perangkat Lunak (PPL) kelas A — perancangan dan pembangunan perangkat lunak secara tim.",
      "Team project for the Software Engineering course (PPL) class A — designing and building software as a team.",
    ] as L,
    language: "TypeScript",
    url: "https://github.com/AsfiCorp/PPL_A_KEL2_M3",
  },
  {
    repo: "MachineLearning_A_WellDone",
    title: ["AI Web App — Gemini", "AI Web App — Gemini"] as L,
    desc: [
      "Aplikasi web AI berbasis Google AI Studio dengan integrasi Gemini API — dibangun dengan Vite + TypeScript.",
      "AI web app built on Google AI Studio with Gemini API integration — built with Vite + TypeScript.",
    ] as L,
    language: "TypeScript",
    url: "https://github.com/AsfiCorp/MachineLearning_A_WellDone",
  },
  {
    repo: "praktikum_manajemen_proyek",
    title: ["Project Management Web App", "Project Management Web App"] as L,
    desc: [
      "Aplikasi web praktikum manajemen proyek perangkat lunak — Google AI Studio + Gemini API (Vite/TypeScript).",
      "Web app for the software project management lab — Google AI Studio + Gemini API (Vite/TypeScript).",
    ] as L,
    language: "TypeScript",
    url: "https://github.com/AsfiCorp/praktikum_manajemen_proyek",
  },
  {
    repo: "isneg",
    title: ["Isneg — Aplikasi Android", "Isneg — Android App"] as L,
    desc: [
      "Aplikasi Android native yang dibangun dengan Kotlin & Android Studio.",
      "Native Android application built with Kotlin & Android Studio.",
    ] as L,
    language: "Kotlin",
    url: "https://github.com/AsfiCorp/isneg",
  },
  {
    repo: "PraktikumPemrogramanMobile_D_233040102",
    title: ["Mobile Programming Lab", "Mobile Programming Lab"] as L,
    desc: [
      "Kumpulan modul praktikum pemrograman mobile: widget, layout, dan profile page dengan Flutter/Dart.",
      "Collection of mobile programming lab modules: widgets, layouts, and profile pages with Flutter/Dart.",
    ] as L,
    language: "Dart",
    url: "https://github.com/AsfiCorp/PraktikumPemrogramanMobile_D_233040102",
  },
  {
    repo: "PP2_2025_233040102_C",
    title: ["Java OOP Lab — CRUD & Modul", "Java OOP Lab — CRUD & Modules"] as L,
    desc: [
      "Praktikum Pemrograman 2: aplikasi CRUD Mahasiswa/Buku/Siswa dan rangkaian modul OOP berbasis Java.",
      "Programming 2 lab: Student/Book CRUD apps and a series of OOP modules in Java.",
    ] as L,
    language: "Java",
    url: "https://github.com/AsfiCorp/PP2_2025_233040102_C",
  },
  {
    repo: "prakweb2025_H_233040102",
    title: ["Laravel Web Lab 2025", "Laravel Web Lab 2025"] as L,
    desc: [
      "Modul praktikum pemrograman web berbasis Laravel: routing, controller, dan Eloquent ORM.",
      "Laravel-based web programming lab modules: routing, controllers, and Eloquent ORM.",
    ] as L,
    language: "Blade",
    url: "https://github.com/AsfiCorp/prakweb2025_H_233040102",
  },
  {
    repo: "pp12025_A_233040102",
    title: ["Java Fundamentals Lab", "Java Fundamentals Lab"] as L,
    desc: [
      "Praktikum Pemrograman 1: dasar Java, struktur data node/linked list, dan latihan OOP.",
      "Programming 1 lab: Java fundamentals, node/linked-list data structures, and OOP exercises.",
    ] as L,
    language: "Java",
    url: "https://github.com/AsfiCorp/pp12025_A_233040102",
  },
  {
    repo: "PraktikumBasisData-233040102",
    title: ["Database Design Lab", "Database Design Lab"] as L,
    desc: [
      "Modul praktikum basis data: perancangan skema, normalisasi, dan implementasi SQL.",
      "Database lab modules: schema design, normalization, and SQL implementation.",
    ] as L,
    language: "SQL",
    url: "https://github.com/AsfiCorp/PraktikumBasisData-233040102",
  },
  {
    repo: "pw2024_tubes_233040102",
    title: ["PHP Blog CMS", "PHP Blog CMS"] as L,
    desc: [
      "Tugas Besar Pemrograman Web 2024: blog CMS lengkap — autentikasi, admin panel, kategori, komentar AJAX, dan cetak laporan PDF.",
      "Web Programming 2024 final project: full blog CMS — authentication, admin panel, categories, AJAX comments, and PDF report printing.",
    ] as L,
    language: "PHP",
    url: "https://github.com/AsfiCorp/pw2024_tubes_233040102",
  },
  {
    repo: "pw2024_233040102",
    title: ["Web Programming Coursework", "Web Programming Coursework"] as L,
    desc: [
      "Materi & tugas kuliah Pemrograman Web 2024 dengan PHP native.",
      "Web Programming 2024 course materials & assignments in plain PHP.",
    ] as L,
    language: "PHP",
    url: "https://github.com/AsfiCorp/pw2024_233040102",
  },
  {
    repo: "itw2023_project2_233040102",
    title: ["Company Profile Website", "Company Profile Website"] as L,
    desc: [
      "Proyek 2 ITW 2023 — website statis responsive dengan HTML/CSS/JavaScript.",
      "ITW 2023 Project 2 — responsive static website with HTML/CSS/JavaScript.",
    ] as L,
    language: "HTML",
    url: "https://github.com/AsfiCorp/itw2023_project2_233040102",
  },
  {
    repo: "itw2023_project1_233040102",
    title: ["Landing Page Project", "Landing Page Project"] as L,
    desc: [
      "Proyek 1 ITW 2023 — landing page berbasis HTML & CSS.",
      "ITW 2023 Project 1 — HTML & CSS landing page.",
    ] as L,
    language: "CSS",
    url: "https://github.com/AsfiCorp/itw2023_project1_233040102",
  },
  {
    repo: "athaPorto",
    title: ["Portfolio v1", "Portfolio v1"] as L,
    desc: ["Versi pertama website portofolio pribadi.", "First version of my personal portfolio website."] as L,
    language: "CSS",
    url: "https://github.com/AsfiCorp/athaPorto",
  },
  {
    repo: "itw2023_233040102",
    title: ["ITW 2023 Coursework", "ITW 2023 Coursework"] as L,
    desc: [
      "Latihan HTML/CSS mata kuliah Informatika & Teknologi Web.",
      "HTML/CSS exercises for the Informatics & Web Technology course.",
    ] as L,
    language: "HTML",
    url: "https://github.com/AsfiCorp/itw2023_233040102",
  },
  {
    repo: "AsfiCorp.github.io",
    title: ["GitHub Pages Site", "GitHub Pages Site"] as L,
    desc: ["Website pertama yang di-hosting di GitHub Pages.", "My first website hosted on GitHub Pages."] as L,
    language: "HTML",
    url: "https://github.com/AsfiCorp/AsfiCorp.github.io",
    live: "https://asficorp.github.io",
  },
];

export const organizations = [
  {
    name: "HMTIF UNPAS",
    role: "Kepala Bidang 1 & Koordinator Bidang Kominfo",
    roleEn: "Head of Division 1 & Coordinator of Communications & Info",
    period: "Himpunan Mahasiswa Teknik Informatika Universitas Pasundan",
    desc: "Memimpin pengelolaan program kerja, merumuskan visi organisasi (konsep motekar & restrukturisasi struktural), serta mengoordinasikan media dan informasi.",
    descEn: "Led work program management, shaped the organization's vision (the 'motekar' concept & structural restructuring), and coordinated media and information.",
    photos: ["/gallery/himpunan1.jpg", "/gallery/himpunan2.jpg", "/gallery/himpunan3.jpg"],
  },
];

export const seminars = [
  {
    title: "Seminar & Workshop Teknologi Kampus",
    titleEn: "Campus Tech Seminars & Workshops",
    organizer: "HMTIF UNPAS & Kampus",
    year: "2023 — sekarang",
    yearEn: "2023 — present",
    desc: "Mengikuti seminar teknologi, workshop pengembangan aplikasi, dan competition briefing di lingkungan Universitas Pasundan.",
    descEn: "Attending tech seminars, app development workshops, and competition briefings at Universitas Pasundan.",
  },
  // TODO: tambahkan seminar lain di sini saat datanya sudah terkumpul
];

export const experiences = [
  {
    title: "Database & Sistem Keuangan Pemerintah",
    titleEn: "Government Finance Database & System",
    org: "BPKD Ciamis",
    period: "Proyek",
    periodEn: "Project",
    desc: "Membangun basis data keuangan untuk departemen pemerintahan lokal — perancangan skema, normalisasi, dan implementasi.",
    descEn: "Built a finance database for a local government department — schema design, normalization, and implementation.",
    tags: ["SQL", "Database Design"],
  },
  {
    title: "System Analyst Intern",
    titleEn: "System Analyst Intern",
    org: "Kodingin",
    period: "Internship",
    periodEn: "Internship",
    desc: "Requirement gathering, pemetaan alur kerja (workflow mapping), dan penyusunan dokumentasi fungsional perangkat lunak.",
    descEn: "Requirement gathering, workflow mapping, and writing functional software documentation.",
    tags: ["System Analysis", "Documentation"],
  },
  {
    title: "Game Developer 2D",
    titleEn: "2D Game Developer",
    org: "Unity + C#",
    period: "Proyek",
    periodEn: "Project",
    desc: "Merancang Game Design Document (GDD), aset spritesheet, antarmuka, dan mekanik permainan.",
    descEn: "Designed the Game Design Document (GDD), spritesheet assets, interfaces, and game mechanics.",
    tags: ["Unity", "C#", "GDD"],
  },
  {
    title: "IoT — Smart Furniture",
    titleEn: "IoT — Smart Furniture",
    org: "Lemari Pintar",
    orgEn: "Smart Wardrobe",
    period: "Proyek",
    periodEn: "Project",
    desc: "Mengonfigurasi mikrokontroler Wemos D1 & ESP8266 dengan platform Blynk untuk arsitektur lemari pintar.",
    descEn: "Configured Wemos D1 & ESP8266 microcontrollers with the Blynk platform for a smart wardrobe architecture.",
    tags: ["IoT", "ESP8266", "Blynk"],
  },
  {
    title: "Internet Marketing Campaign",
    titleEn: "Internet Marketing Campaign",
    org: "Shoe Care Business",
    period: "Komersial",
    periodEn: "Commercial",
    desc: "Mengeksekusi kampanye pemasaran digital via video TikTok dan melakukan pengujian A/B.",
    descEn: "Executed digital marketing campaigns via TikTok videos and ran A/B testing.",
    tags: ["Marketing", "A/B Testing"],
  },
];

export const photoAlbums = [
  {
    id: "org",
    label: ["Organisasi", "Organizations"] as L,
    icon: "📁",
    caption: ["Dokumentasi kegiatan HMTIF UNPAS", "HMTIF UNPAS activity documentation"] as L,
    items: [
      { src: "/gallery/himpunan1.jpg", alt: ["Kegiatan HMTIF UNPAS 1", "HMTIF UNPAS activity 1"] as L, desc: ["Dokumentasi kegiatan bersama pengurus HMTIF UNPAS — masa kepemimpinan dengan visi 'motekar'.", "Documentation of activities with HMTIF UNPAS board — during the 'motekar' vision leadership."] as L },
      { src: "/gallery/himpunan2.jpg", alt: ["Kegiatan HMTIF UNPAS 2", "HMTIF UNPAS activity 2"] as L, desc: ["Kegiatan organisasi Himpunan Mahasiswa Teknik Informatika — kolaborasi, koordinasi acara, dan kerja tim.", "Informatics Engineering student association activities — collaboration, event coordination, and teamwork."] as L },
      { src: "/gallery/himpunan3.jpg", alt: ["Kegiatan HMTIF UNPAS 3", "HMTIF UNPAS activity 3"] as L, desc: ["Momen kebersamaan pengurus HMTIF UNPAS setelah menyelesaikan program kerja bidang.", "A moment of togetherness among HMTIF UNPAS board members after completing a division work program."] as L },
    ],
  },
  {
    id: "me",
    label: ["Tentang Saya", "About Me"] as L,
    icon: "👤",
    caption: ["Foto pribadi", "Personal photos"] as L,
    items: [
      { src: "/gallery/about.jpg", alt: ["Foto Athaillah", "Photo of Athaillah"] as L, desc: ["Athaillah Sulthan Firasyal Ilmi — mahasiswa Teknik Informatika Universitas Pasundan, open to work di bidang web, app, dan game development.", "Athaillah Sulthan Firasyal Ilmi — Informatics Engineering student at Universitas Pasundan, open to work in web, app, and game development."] as L },
      // TODO: tambah foto pribadi lain — drop file ke public/gallery lalu daftarkan di sini
    ],
  },
];

export const stats = [
  { value: "18+", label: ["Repositories", "Repositories"] as L },
  { value: "3.55+", label: ["IPK", "GPA"] as L },
  { value: "5+", label: ["Bidang Keahlian", "Skill Domains"] as L },
  { value: "2", label: ["Posisi Organisasi", "Organization Roles"] as L },
];

// ============================================================
//  KNOWLEDGE BASE — AI Assistant rule-based
// ============================================================

export const chatKB: { keywords: string[]; answer: L }[] = [
  { keywords: ["halo", "hai", "hello", "hi", "hei"], answer: ["Halo! Saya ATHA-BOT 🤖 Asisten AI portofolio. Tanya apa saja seputar Athaillah — keahlian, project, organisasi, atau cara menghubunginya.", "Hi! I'm ATHA-BOT 🤖 the portfolio AI assistant. Ask me anything about Athaillah — skills, projects, organizations, or how to reach him."] },
  { keywords: ["nama", "siapa", "perkenalkan", "kenalan"], answer: ["Namanya Athaillah Sulthan Firasyal Ilmi — mahasiswa Teknik Informatika Universitas Pasundan, IPK 3.55+. Ahli di bidang web, app, game, dan project management. Biasa disapa Athaillah.", "His name is Athaillah Sulthan Firasyal Ilmi — an Informatics Engineering student at Universitas Pasundan with a 3.55+ GPA. Skilled in web, app, game development, and project management. He goes by Athaillah."] },
  { keywords: ["ipk", "nilai", "gpa", "kumulatif"], answer: ["IPK Athaillah 3.55+ di Program Studi Teknik Informatika Universitas Pasundan. Solid kan? 💪", "Athaillah holds a 3.55+ GPA in Informatics Engineering at Universitas Pasundan. Solid, right? 💪"] },
  { keywords: ["skill", "keahlian", "kemampuan", "bahasa", "stack"], answer: ["Keahlian utama: PHP (Laravel), TypeScript (Next.js), Dart (Flutter), Java, C# (Unity), Kotlin, dan SQL. Lengkap dengan tools: VS Code, Cursor, Figma, Unity, TablePlus, dan lainnya. Scroll ke section SKILLS untuk detailnya!", "Core skills: PHP (Laravel), TypeScript (Next.js), Dart (Flutter), Java, C# (Unity), Kotlin, and SQL. Plus tools: VS Code, Cursor, Figma, Unity, TablePlus, and more. Scroll to the SKILLS section for details!"] },
  { keywords: ["project", "proyek", "portofolio", "repo", "repository", "github"], answer: ["Athaillah punya 18+ repositori di GitHub (AsfiCorp) — mulai dari sistem informasi Laravel, aplikasi Flutter, game Unity 2D, proyek ML, hingga database keuangan untuk BPKD Ciamis. Cek section PROJECTS ya, datanya live dari GitHub!", "Athaillah has 18+ repositories on GitHub (AsfiCorp) — from Laravel information systems, Flutter apps, and 2D Unity games, to ML projects and a finance database for BPKD Ciamis. Check the PROJECTS section — the data is live from GitHub!"] },
  { keywords: ["organisasi", "hmtif", "gdg", "kepengurusan", "pengurus"], answer: ["Athaillah aktif di HMTIF UNPAS — mantan Kepala Bidang 1 & Koordinator Bidang Kominfo (visi motekar & restrukturisasi). Dokumentasi fotonya ada di section ORGANISASI.", "Athaillah was active in HMTIF UNPAS — former Head of Division 1 & Coordinator of Communications and Info (the 'motekar' vision & restructuring). Photo documentation is in the ORGANIZATIONS section."] },
  { keywords: ["seminar", "workshop", "pelatihan"], answer: ["Athaillah aktif mengikuti seminar & workshop teknologi — cloud, AI, mobile development — dan acara kampus. Daftarnya ada di section SEMINAR.", "Athaillah actively attends tech seminars & workshops — cloud, AI, mobile development — and campus events. The list is in the SEMINARS section."] },
  { keywords: ["pengalaman", "magang", "intern", "kerja", "karier", "riwayat"], answer: ["Pengalaman: System Analyst Intern di Kodingin (requirement gathering & workflow mapping), database keuangan BPKD Ciamis, game 2D Unity, IoT lemari pintar (ESP8266/Blynk), dan kampanye marketing shoe care dengan A/B testing.", "Experience: System Analyst Intern at Kodingin (requirement gathering & workflow mapping), BPKD Ciamis finance database, 2D Unity game, smart wardrobe IoT (ESP8266/Blynk), and a shoe care marketing campaign with A/B testing."] },
  { keywords: ["kontak", "email", "hubungi", "hire", "rekrut", "kerjasama", "freelance"], answer: ["Mau hire atau kerja sama? Kirim email ke athaillahsfi@gmail.com atau langsung isi form di section CONTACT — semuanya tersambung ke emailnya. Athaillah open to work! 🚀", "Want to hire or collaborate? Email athaillahsfi@gmail.com or fill the form in the CONTACT section — everything goes straight to his email. Athaillah is open to work! 🚀"] },
  { keywords: ["cv", "resume", "download"], answer: ["CV bisa diunduh lewat tombol DOWNLOAD CV di section CV. Semoga lancar rekrutmenya! 📄", "The CV can be downloaded via the DOWNLOAD CV button in the CV section. Good luck with the recruitment! 📄"] },
  { keywords: ["instagram", "ig", "linkedin", "tiktok", "sosmed", "sosial", "social"], answer: ["Sosmed Athaillah: GitHub (github.com/AsfiCorp), Instagram (@firasyal_ilmi), dan LinkedIn (Athaillah Sulthan Firasyal Ilmi). Ikonnya ada di footer — tinggal klik!", "Athaillah's socials: GitHub (github.com/AsfiCorp), Instagram (@firasyal_ilmi), and LinkedIn (Athaillah Sulthan Firasyal Ilmi). The icons are in the footer — just click!"] },
  { keywords: ["game", "unity", "gdd"], answer: ["Athaillah merancang game 2D berbasis Unity + C#: dari Game Design Document (GDD), aset spritesheet, antarmuka, sampai mekanik permainan. Desain visualnya dibuat dengan Procreate & Figma.", "Athaillah designs 2D games with Unity + C#: from the Game Design Document (GDD), spritesheet assets, interfaces, to game mechanics. Visuals are made with Procreate & Figma."] },
  { keywords: ["iot", "esp8266", "wemos", "blynk", "lemari"], answer: ["Proyek IoT-nya: arsitektur lemari pintar menggunakan Wemos D1 & ESP8266 yang terhubung ke platform Blynk — mikrokontroler dikonfigurasi dari nol.", "His IoT project: a smart wardrobe architecture using Wemos D1 & ESP8266 connected to the Blynk platform — microcontrollers configured from scratch."] },
  { keywords: ["desain", "design", "figma", "ui", "ux"], answer: ["Di ranah desain, Athaillah merancang purwarupa antarmuka, aset visual, dan materi promosi menggunakan Figma, Canva, Procreate, Stitch, dan tools AI — termasuk konsep merek pakaian (IAL).", "On the design side, Athaillah prototypes interfaces, visual assets, and promo materials with Figma, Canva, Procreate, Stitch, and AI tools — including a clothing brand concept (IAL)."] },
  { keywords: ["pemimpin", "leader", "kepemimpinan", "manajemen", "manager"], answer: ["Kepemimpinan adalah kekuatan utama Athaillah: Kepala Bidang 1 HMTIF UNPAS dan pemimpin di berbagai project tim. Terbiasa mengelola program kerja dari perencanaan sampai eksekusi.", "Leadership is Athaillah's core strength: Head of Division 1 at HMTIF UNPAS and leader across multiple team projects. Used to managing work programs from planning to execution."] },
  { keywords: ["kuliah", "kampus", "universitas", "pasundan", "unpas", "informatika"], answer: ["Athaillah kuliah di Teknik Informatika Universitas Pasundan (UNPAS), IPK 3.55+, dan aktif di HMTIF.", "Athaillah studies Informatics Engineering at Universitas Pasundan (UNPAS) with a 3.55+ GPA, and was active in HMTIF."] },
  { keywords: ["tools", "software", "ide", "editor"], answer: ["Daily drivers: VS Code, Cursor, dan Antigravity untuk coding; TablePlus, DBeaver, DBngin untuk database; Figma, Canva, Procreate untuk desain; Unity untuk game dev.", "Daily drivers: VS Code, Cursor, and Antigravity for coding; TablePlus, DBeaver, DBngin for databases; Figma, Canva, Procreate for design; Unity for game dev."] },
  { keywords: ["terima kasih", "makasih", "thanks", "thank"], answer: ["Sama-sama! Kalau butuh apa-apa lagi seputar Athaillah, tanya aja lagi. 👋", "You're welcome! If you need anything else about Athaillah, just ask again. 👋"] },
];

export const chatDefault: L = [
  "Hmm, itu di luar knowledge base saya 🤔 Coba tanya tentang: keahlian, project, organisasi, seminar, pengalaman, CV, atau cara menghubungi Athaillah.",
  "Hmm, that's outside my knowledge base 🤔 Try asking about: skills, projects, organizations, seminars, experience, CV, or how to contact Athaillah.",
];

export const chatGreeting: L = [
  "Sistem online ⚡ Saya ATHA-BOT, asisten AI yang fokus menjawab pertanyaan seputar Athaillah. Mau tahu apa?",
  "System online ⚡ I'm ATHA-BOT, an AI assistant focused on answering questions about Athaillah. What would you like to know?",
];