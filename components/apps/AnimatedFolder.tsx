"use client";

import { useRef, useState } from "react";
import { ProjectCard, ImageLightbox, type FolderProject } from "./Folder3D";
import { useT, ui } from "@/lib/i18n";

interface AnimatedFolderProps {
  title: string;
  projects: FolderProject[];
  gradient: string;
}

export default function AnimatedFolder({ title, projects, gradient }: AnimatedFolderProps) {
  const t = useT();
  const [hovered, setHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenId, setHiddenId] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const preview = projects.slice(0, 5);

  const handleCardClick = (index: number) => {
    const el = cardRefs.current[index];
    if (el) setSourceRect(el.getBoundingClientRect());
    setSelectedIndex(index);
    setHiddenId(projects[index]?.id ?? null);
  };

  // warna folder dari gradient hex terakhir
  const hexes = gradient.match(/#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}/g) ?? ["#5ac8fa"];
  const base = hexes[hexes.length - 1];
  const backBg = `linear-gradient(135deg, ${hexes[0]} 0%, ${base}cc 100%)`;
  const frontBg = `linear-gradient(135deg, ${base} 0%, ${base}bb 100%)`;

  return (
    <>
      <div
        className="group relative flex min-h-[280px] min-w-[240px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/30 hover:shadow-2xl"
        style={{ perspective: "1200px", transform: hovered ? "scale(1.04) rotate(-1deg)" : "scale(1)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-700"
          style={{ background: `radial-gradient(circle at 50% 70%, ${base} 0%, transparent 70%)`, opacity: hovered ? 0.15 : 0 }}
        />
        <div className="relative mb-3 flex items-center justify-center" style={{ height: "160px", width: "200px" }}>
          {/* belakang folder */}
          <div
            className="absolute h-24 w-32 rounded-lg border border-white/20 shadow-md"
            style={{ background: backBg, transformOrigin: "bottom center", transform: hovered ? "rotateX(-20deg) scaleY(1.05)" : "none", transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)", zIndex: 10 }}
          />
          {/* tab */}
          <div
            className="absolute h-4 w-12 rounded-t-md border-x border-t border-white/20"
            style={{ background: backBg, top: "calc(50% - 60px)", left: "calc(50% - 48px)", transformOrigin: "bottom center", transform: hovered ? "rotateX(-30deg) translateY(-3px)" : "none", transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)", zIndex: 10 }}
          />
          {/* kartu proyek */}
          <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 20 }}>
            {preview.map((p, i) => (
              <ProjectCard
                key={p.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                image={p.image}
                title={p.title}
                delay={i * 50}
                isVisible={hovered}
                index={i}
                totalCount={preview.length}
                onClick={() => handleCardClick(i)}
                isSelected={hiddenId === p.id}
              />
            ))}
          </div>
          {/* depan folder */}
          <div
            className="absolute h-24 w-32 rounded-lg border border-white/25 shadow-lg"
            style={{ background: frontBg, top: "calc(50% - 44px)", transformOrigin: "bottom center", transform: hovered ? "rotateX(35deg) translateY(12px)" : "none", transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)", zIndex: 30 }}
          />
          <div
            className="pointer-events-none absolute h-24 w-32 overflow-hidden rounded-lg"
            style={{ top: "calc(50% - 44px)", background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)", transformOrigin: "bottom center", transform: hovered ? "rotateX(35deg) translateY(12px)" : "none", transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)", zIndex: 31 }}
          />
        </div>
        <div className="text-center">
          <h3 className="mt-2 text-base font-bold text-white drop-shadow transition-all duration-500">{title}</h3>
          <p className="text-sm text-white/70">
            {projects.length} {projects.length === 1 ? t(ui.folder.project) : t(ui.folder.projects)}
          </p>
        </div>
      </div>
      <ImageLightbox
        projects={projects}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={() => { setSelectedIndex(null); setSourceRect(null); }}
        sourceRect={sourceRect}
        onCloseComplete={() => setHiddenId(null)}
        onNavigate={(i) => { setSelectedIndex(i); setHiddenId(projects[i]?.id ?? null); }}
      />
    </>
  );
}
