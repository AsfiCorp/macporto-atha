"use client";

import { forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useT, ui } from "@/lib/i18n";

export interface FolderProject {
  id: string;
  image: string;
  title: string;
  description?: string;
  url?: string;
}

/* ---------------- ProjectCard (kipas kartu) ---------------- */

interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, totalCount, onClick, isSelected }, ref) => {
    const middleIndex = (totalCount - 1) / 2;
    const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0;
    const rotation = factor * 25;
    const translationX = factor * 85;
    const translationY = Math.abs(factor) * 12;

    return (
      <div
        ref={ref}
        className={cn("absolute h-28 w-20 cursor-pointer group/card", isSelected && "opacity-0")}
        style={{
          transform: isVisible
            ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.4)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          zIndex: 10 + index,
          left: "-40px",
          top: "-56px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div
          className={cn(
            "relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-xl",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "group-hover/card:-translate-y-6 group-hover/card:scale-125 group-hover/card:shadow-2xl"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <p className="absolute bottom-1.5 left-1.5 right-1.5 truncate text-[9px] font-black uppercase tracking-tighter text-white drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";
export { ProjectCard };

/* ---------------- ImageLightbox (zoom + slider) ---------------- */

interface ImageLightboxProps {
  projects: FolderProject[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  projects, currentIndex, isOpen, onClose, sourceRect, onCloseComplete, onNavigate,
}: ImageLightboxProps) {
  const t = useT();
  const [phase, setPhase] = useState<"initial" | "animating" | "complete">("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [isSliding, setIsSliding] = useState(false);

  const total = projects.length;
  const current = projects[internalIndex];
  const hasNext = internalIndex < total - 1;
  const hasPrev = internalIndex > 0;

  useEffect(() => {
    if (!isOpen) return;
    setInternalIndex(currentIndex);
    setIsSliding(false);
  }, [isOpen, currentIndex]);

  const navigate = useCallback(
    (idx: number) => {
      if (isSliding || idx === internalIndex || idx < 0 || idx > total - 1) return;
      setIsSliding(true);
      onNavigate(idx);
      setTimeout(() => { setInternalIndex(idx); setIsSliding(false); }, 400);
    },
    [isSliding, internalIndex, total, onNavigate]
  );

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setPhase("initial");
      onCloseComplete?.();
    }, 500);
  }, [onClose, onCloseComplete]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigate(internalIndex + 1);
      if (e.key === "ArrowLeft") navigate(internalIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose, navigate, internalIndex]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    setShouldRender(true);
    setPhase("initial");
    setIsClosing(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setPhase("animating")));
    const timer = setTimeout(() => setPhase("complete"), 700);
    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!shouldRender || !current) return null;

  const initialStyles = (): React.CSSProperties => {
    if (!sourceRect) return { opacity: 0 };
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tw = Math.min(800, vw - 64);
    const th = Math.min(vh * 0.7, 500);
    const tx = (vw - tw) / 2;
    const ty = Math.max(50, (vh - th) / 2 - 20);
    const scale = Math.max(sourceRect.width / tw, sourceRect.height / th);
    const dx = sourceRect.left + sourceRect.width / 2 - (tx + tw / 2);
    const dy = sourceRect.top + sourceRect.height / 2 - (ty + th / 2);
    return { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0.5, borderRadius: "12px" };
  };

  const finalStyles: React.CSSProperties = {
    transform: isClosing ? "scale(0.92)" : "translate(0,0) scale(1)",
    opacity: 1,
    borderRadius: "24px",
  };
  const styles = phase === "initial" && !isClosing ? initialStyles() : finalStyles;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto overscroll-contain p-4"
      onClick={handleClose}
      style={{ opacity: isClosing ? 0 : 1, transition: "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-2xl"
        style={{
          opacity: phase === "initial" && !isClosing ? 0 : 1,
          transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <button
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        className="glass absolute right-6 top-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl transition hover:bg-white/20"
        style={{
          opacity: phase === "complete" && !isClosing ? 1 : 0,
          transform: phase === "complete" && !isClosing ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 400ms ease-out 400ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 400ms",
        }}
        aria-label={t(ui.folder.close)}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); navigate(internalIndex - 1); }}
        disabled={!hasPrev || isSliding}
        className="glass absolute left-4 top-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl transition hover:scale-110 disabled:pointer-events-none disabled:opacity-0"
        style={{
          opacity: phase === "complete" && !isClosing && hasPrev ? 1 : 0,
          transform: phase === "complete" && !isClosing ? "translateY(-50%)" : "translate(-40px,-50%)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 600ms",
        }}
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); navigate(internalIndex + 1); }}
        disabled={!hasNext || isSliding}
        className="glass absolute right-4 top-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl transition hover:scale-110 disabled:pointer-events-none disabled:opacity-0"
        style={{
          opacity: phase === "complete" && !isClosing && hasNext ? 1 : 0,
          transform: phase === "complete" && !isClosing ? "translateY(-50%)" : "translate(40px,-50%)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 600ms",
        }}
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
      </button>

      <div
        className="relative z-10 my-auto w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...styles,
          transition:
            phase === "initial" && !isClosing
              ? "none"
              : "transform 700ms cubic-bezier(0.16,1,0.3,1), opacity 600ms ease-out, border-radius 700ms ease",
          transformOrigin: "center center",
        }}
      >
        <div className="overflow-hidden rounded-[inherit] border border-white/10 bg-neutral-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
          {/* area gambar: max-h + scroll vertikal agar foto utuh bisa dilihat sampai bawah */}
          <div className="relative max-h-[62vh] overflow-y-auto overscroll-contain">
            <div
              className="flex w-full items-start"
              style={{
                transform: `translateX(-${internalIndex * 100}%)`,
                transition: isSliding ? "transform 500ms cubic-bezier(0.16,1,0.3,1)" : "none",
              }}
            >
              {projects.map((p) => (
                <div key={p.id} className="relative min-w-full bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} className="max-h-[62vh] w-full select-none object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div
            className="border-t border-white/10 bg-neutral-900 px-7 py-5"
            style={{
              opacity: phase === "complete" && !isClosing ? 1 : 0,
              transform: phase === "complete" && !isClosing ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 500ms ease-out 500ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 500ms",
            }}
          >
            <div className="flex items-center justify-between gap-6">
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-xl font-bold tracking-tight text-white">{current.title}</h3>
                {current.description && (
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{current.description}</p>
                )}
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => navigate(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-all duration-500",
                          idx === internalIndex ? "scale-150 bg-white" : "bg-white/30 hover:bg-white/60"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                    {internalIndex + 1} / {total}
                  </p>
                </div>
              </div>
              {current.url && (
                <a
                  href={current.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-[#0a84ff] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-500/25 transition hover:scale-105 hover:brightness-110 active:scale-95"
                >
                  <span>{t(ui.folder.view)}</span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

