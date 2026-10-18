"use client";

import { useEffect, useRef, useState } from "react";
import { useOS } from "@/lib/os";

/**
 * Robot interaktif di wallpaper: kepala & mata mengikuti kursor (3D via CSS
 * transforms), klik pada robot memicu animasi siklus (wave → spin → excited).
 * Skipped: three.js/GLTF — SVG+CSS cukup & ringan; upgrade path bila butuh model 3D asli.
 */
type Mood = "idle" | "wave" | "spin" | "excited";

export default function WallpaperRobot() {
  const root = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const [mood, setMood] = useState<Mood>("idle");
  const { openApp } = useOS();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1; // -1..1
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const tick = () => {
      const c = cur.current, t = target.current;
      c.x += (t.x - c.x) * 0.08;
      c.y += (t.y - c.y) * 0.08;
      const el = root.current;
      if (el) {
        el.style.setProperty("--ry", `${c.x * 18}deg`);
        el.style.setProperty("--rx", `${-c.y * 12}deg`);
        el.style.setProperty("--px", `${c.x * 10}px`);
        el.style.setProperty("--py", `${c.y * 7}px`);
      }
      raf.current = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    if (mood === "idle") return;
    const id = setTimeout(() => setMood("idle"), 1800);
    return () => clearTimeout(id);
  }, [mood]);

  const nextMood = () =>
    setMood((m) => (m === "idle" ? "wave" : m === "wave" ? "spin" : m === "spin" ? "excited" : "idle"));

  return (
    <div ref={root} className="robot-scene pointer-events-none absolute bottom-16 left-6 z-[5] sm:left-12">
      {/* bayangan lantai */}
      <div className={`robot-shadow ${mood === "excited" ? "robot-shadow-jump" : ""}`} />
      <div
        className={`robot-float ${mood === "spin" ? "robot-spin" : ""}`}
        role="button"
        aria-label="Chat"
        onClick={() => {
          nextMood();
          openApp("chat");
        }}
      >
        <div className={`robot-head ${mood === "excited" ? "robot-glow" : ""}`} role="button" tabIndex={-1}>
          {/* antena */}
          <div className="robot-antenna">
            <div className="robot-antenna-bulb" />
          </div>
          {/* kepala */}
          <div className="robot-face">
            <div className="robot-eye robot-eye-l">
              <div className="robot-pupil" />
            </div>
            <div className="robot-eye robot-eye-r">
              <div className="robot-pupil" />
            </div>
            <div className={mood === "wave" || mood === "excited" ? "robot-mouth-happy" : "robot-mouth"} />
            {/* telinga speaker */}
            <div className="robot-ear robot-ear-l" />
            <div className="robot-ear robot-ear-r" />
          </div>
          {/* badan */}
          <div className="robot-body">
            <div className="robot-chest" />
            <div className={`robot-arm robot-arm-l ${mood === "wave" ? "robot-arm-wave" : ""}`} />
            <div className="robot-arm robot-arm-r" />
          </div>
        </div>
        {/* partikel berkilau */}
        <span className="robot-spark robot-spark-1" />
        <span className="robot-spark robot-spark-2" />
        <span className="robot-spark robot-spark-3" />
      </div>
    </div>
  );
}
