"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type AppId =
  | "about" | "portfolio" | "skills" | "photos"
  | "notes" | "mail" | "terminal" | "chat" | "cv" | "readme" | "safari";

interface WindowState {
  id: AppId;
  z: number;
  minimized: boolean;
}

interface OS {
  open: AppId[];
  active: AppId | null;
  openApp: (id: AppId) => void;
  closeApp: (id: AppId) => void;
  minimizeApp: (id: AppId) => void;
  focusApp: (id: AppId) => void;
  toggleApp: (id: AppId) => void;
}

const OSContext = createContext<OS>({
  open: [],
  active: null,
  openApp: () => {},
  closeApp: () => {},
  minimizeApp: () => {},
  focusApp: () => {},
  toggleApp: () => {},
});

let zCounter = 10;

export function OSProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([]);

  const openApp = useCallback((id: AppId) => {
    setWindows((ws) => {
      const existing = ws.find((w) => w.id === id);
      if (existing) {
        zCounter += 1;
        return ws.map((w) =>
          w.id === id ? { ...w, z: zCounter, minimized: false } : w
        );
      }
      zCounter += 1;
      return [...ws, { id, z: zCounter, minimized: false }];
    });
  }, []);

  const closeApp = useCallback((id: AppId) => {
    setWindows((ws) => ws.filter((w) => w.id !== id));
  }, []);

  const minimizeApp = useCallback((id: AppId) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  }, []);

  const focusApp = useCallback((id: AppId) => {
    zCounter += 1;
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, z: zCounter, minimized: false } : w))
    );
  }, []);

  const toggleApp = useCallback((id: AppId) => {
    setWindows((ws) => {
      const existing = ws.find((w) => w.id === id);
      if (existing && !existing.minimized) return ws.filter((w) => w.id !== id);
      zCounter += 1;
      return existing
        ? ws.map((w) => (w.id === id ? { ...w, z: zCounter, minimized: false } : w))
        : [...ws, { id, z: zCounter, minimized: false }];
    });
  }, []);

  const value = useMemo(() => {
    const sorted = [...windows].sort((a, b) => a.z - b.z);
    const active = sorted.length && !sorted[sorted.length - 1].minimized
      ? sorted[sorted.length - 1].id
      : null;
    return {
      open: windows.map((w) => w.id),
      active,
      openApp,
      closeApp,
      minimizeApp,
      focusApp,
      toggleApp,
    };
  }, [windows, openApp, closeApp, minimizeApp, focusApp, toggleApp]);

  return <OSContext.Provider value={value}>{children}</OSContext.Provider>;
}

export const useOS = () => useContext(OSContext);
