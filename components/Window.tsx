"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useOS, type AppId } from "@/lib/os";
import { useT } from "@/lib/i18n";

export default function Window({
  id,
  title,
  active,
  onFocus,
  children,
}: {
  id: AppId;
  title: readonly [string, string];
  active: boolean;
  onFocus: () => void;
  children: React.ReactNode;
}) {
  const t = useT();
  const { closeApp, minimizeApp } = useOS();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [maximized, setMaximized] = useState(false);
  const [opening, setOpening] = useState(true);
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const resize = useRef<{ x: number; y: number; w: number; h: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => setOpening(false));
  }, []);

  const center = useCallback(() => {
    const el = ref.current;
    if (!el || pos) return;
    const r = el.getBoundingClientRect();
    const offset = (Object.keys(WINDOW_OFFSETS).indexOf(id) % 5) * 26;
    setPos({
      x: (window.innerWidth - r.width) / 2 + offset - 50,
      y: Math.max(40, (window.innerHeight - r.height) / 2 - 30 + offset),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, pos]);

  useEffect(() => {
    center();
  }, [center]);

  const onMouseDown = (e: React.MouseEvent) => {
    onFocus();
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    drag.current = { dx: e.clientX - r.left, dy: e.clientY - r.top };
    const move = (ev: MouseEvent) => {
      if (!drag.current) return;
      setPos({
        x: ev.clientX - drag.current.dx,
        y: Math.max(28, ev.clientY - drag.current.dy),
      });
    };
    const up = () => {
      drag.current = null;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onResizeDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFocus();
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    resize.current = { x: e.clientX, y: e.clientY, w: r.width, h: r.height };
    const move = (ev: MouseEvent) => {
      if (!resize.current) return;
      setSize({
        w: Math.max(360, resize.current.w + ev.clientX - resize.current.x),
        h: Math.max(280, resize.current.h + ev.clientY - resize.current.y),
      });
    };
    const up = () => {
      resize.current = null;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const geo = maximized
    ? { left: 8, top: 32, width: "calc(100vw - 16px)", height: "calc(100vh - 128px)" }
    : size
      ? { width: size.w, height: size.h }
      : {};

  return (
    <div
      ref={ref}
      onMouseDown={onFocus}
      className={`app-surface glass win-shadow absolute z-auto flex flex-col overflow-hidden rounded-xl border transition-[opacity,transform] duration-300 ${
        maximized ? "" : "h-[520px] w-[min(880px,92vw)]"
      }`}
      style={{
        ...geo,
        left: maximized ? 8 : (pos?.x ?? "50%"),
        top: maximized ? 32 : (pos?.y ?? "45%"),
        visibility: pos ? "visible" : "hidden",
        borderColor: active ? "rgba(120,120,128,0.4)" : "rgba(120,120,128,0.2)",
        opacity: opening ? 0 : 1,
        transform: opening ? "scale(0.92)" : "scale(1)",
        zIndex: active ? 50 : 30,
      }}
    >
      {/* title bar */}
      <div
        onMouseDown={onMouseDown}
        className="relative flex h-9 shrink-0 cursor-grab items-center gap-2 border-b border-black/10 px-3 active:cursor-grabbing dark:border-white/10"
      >
        {/* traffic lights */}
        <div className="group flex items-center gap-2">
          <button
            aria-label={t(["Tutup", "Close"])}
            onClick={(e) => { e.stopPropagation(); closeApp(id); }}
            className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10"
          />
          <button
            aria-label={t(["Perkecil", "Minimize"])}
            onClick={(e) => { e.stopPropagation(); minimizeApp(id); }}
            className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10"
          />
          <button
            aria-label={t(["Perbesar", "Maximize"])}
            onClick={(e) => { e.stopPropagation(); setMaximized((m) => !m); }}
            className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/10"
          />
        </div>
        <span
          className={`absolute inset-x-0 text-center text-[13px] font-semibold pointer-events-none ${
            active ? "opacity-70" : "opacity-35"
          }`}
        >
          {t(title)}
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-auto">{children}</div>
      {/* resize handle */}
      {!maximized && (
        <div
          onMouseDown={onResizeDown}
          className="absolute bottom-0 right-0 h-4 w-4 cursor-nwse-resize"
          aria-label={t(["Ubah ukuran", "Resize"])}
        />
      )}
    </div>
  );
}

const WINDOW_OFFSETS: Record<string, number> = {
  about: 0, portfolio: 1, skills: 2, photos: 3, notes: 4,
  mail: 5, terminal: 6, chat: 7, cv: 8, readme: 9, safari: 10,
};
