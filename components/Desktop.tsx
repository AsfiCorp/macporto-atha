"use client";

import { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import Dock from "./Dock";
import DesktopIcons from "./DesktopIcons";
import Window from "./Window";
import { useOS, type AppId } from "@/lib/os";
import BootScreen from "./BootScreen";
import WallpaperRobot from "./WallpaperRobot";
import { ui } from "@/lib/i18n";

import AboutApp from "./apps/AboutApp";
import PortfolioApp from "./apps/PortfolioApp";
import SkillsApp from "./apps/SkillsApp";
import PhotosApp from "./apps/PhotosApp";
import NotesApp from "./apps/NotesApp";
import MailApp from "./apps/MailApp";
import TerminalApp from "./apps/TerminalApp";
import ChatApp from "./apps/ChatApp";
import CvApp from "./apps/CvApp";
import ReadmeApp from "./apps/ReadmeApp";
import SafariApp from "./apps/SafariApp";

const TITLES: Record<AppId, readonly [string, string]> = {
  about: ui.window.about,
  portfolio: ui.window.portfolio,
  skills: ui.window.skills,
  photos: ui.window.photos,
  notes: ui.window.notes,
  mail: ui.window.mail,
  terminal: ui.window.terminal,
  chat: ui.window.chat,
  cv: ui.window.cv,
  readme: ui.window.readme,
  safari: ui.window.safari,
};

export default function Desktop({ children }: { children: React.ReactNode }) {
  const { open, active, focusApp } = useOS();
  const [booted, setBooted] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("os-theme");
    if (saved === "light") setDark(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("os-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      className={`${dark ? "os-dark" : "os-light"} relative h-screen w-screen overflow-hidden`}
    >
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <div className="wallpaper" />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
        autoPlay loop muted playsInline
      />
      <div className="wallpaper-overlay absolute inset-0" />
      <WallpaperRobot />
      <MenuBar dark={dark} setDark={setDark} />
      <DesktopIcons />
      {open.map((id) => (
        <Window
          key={id}
          id={id}
          title={TITLES[id]}
          active={active === id}
          onFocus={() => focusApp(id)}
        >
          {id === "about" && <AboutApp />}
          {id === "portfolio" && <PortfolioApp />}
          {id === "skills" && <SkillsApp />}
          {id === "photos" && <PhotosApp />}
          {id === "notes" && <NotesApp />}
          {id === "mail" && <MailApp />}
          {id === "terminal" && <TerminalApp />}
          {id === "chat" && <ChatApp />}
          {id === "cv" && <CvApp />}
          {id === "readme" && <ReadmeApp />}
          {id === "safari" && <SafariApp />}
        </Window>
      ))}
      <Dock />
      {/* konten statis untuk SEO/SSR — disembunyikan */}
      <div className="hidden">{children}</div>
    </div>
  );
}
