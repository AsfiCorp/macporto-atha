"use client";

import { useState } from "react";
import { photoAlbums } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { ImageLightbox, type FolderProject } from "./Folder3D";

export default function PhotosApp() {
  const t = useT();
  const [activeId, setActiveId] = useState(photoAlbums[0]?.id ?? "org");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

  const album = photoAlbums.find((a) => a.id === activeId) ?? photoAlbums[0];
  const items = album?.items ?? [];

  // adaptasi item album ke bentuk lightbox (reuse komponen Portfolio)
  const lbProjects: FolderProject[] = items.map((it, i) => ({
    id: `${album.id}-${i}`,
    image: it.src,
    title: t(it.alt),
    description: it.desc ? t(it.desc) : undefined,
  }));

  const openLightbox = (i: number, el: HTMLImageElement | null) => {
    if (el) setSourceRect(el.getBoundingClientRect());
    setLightboxIdx(i);
  };

  return (
    <div className="flex h-full">
      {/* sidebar kategori ala Photos.app */}
      <aside className="w-44 shrink-0 space-y-1 overflow-auto border-r border-black/10 p-3">
        <p className="px-2 pb-2 text-[11px] font-bold uppercase tracking-wide opacity-40">
          {t(["Album", "Albums"])}
        </p>
        {photoAlbums.map((a) => (
          <button
            key={a.id}
            onClick={() => { setActiveId(a.id); setLightboxIdx(null); }}
            className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-sm transition ${
              a.id === activeId
                ? "bg-[#0a84ff] text-white shadow-sm"
                : "hover:bg-black/10"
            }`}
          >
            <span>{a.icon}</span>
            <span className="flex-1 truncate font-medium">{t(a.label)}</span>
            <span className={`text-xs ${a.id === activeId ? "text-white/70" : "opacity-40"}`}>
              {a.items.length}
            </span>
          </button>
        ))}
      </aside>

      {/* grid album */}
      <div className="flex-1 overflow-auto p-5">
        {album && (
          <>
            <div className="mb-4">
              <h3 className="text-lg font-bold">{album.icon} {t(album.label)}</h3>
              <p className="text-xs opacity-50">{t(album.caption)} · {items.length} {t(["foto", "photos"])}</p>
            </div>
            {items.length === 0 ? (
              <p className="mt-10 text-center text-sm opacity-40">{t(["Belum ada foto.", "No photos yet."])}</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((it, i) => (
                  <figure
                    key={it.src}
                    className="group cursor-zoom-in overflow-hidden rounded-xl border border-black/10 bg-white/60 shadow transition hover:scale-[1.02] hover:shadow-lg"
                    onClick={(e) => openLightbox(i, e.currentTarget.querySelector("img"))}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={it.src}
                      alt={t(it.alt)}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="space-y-1 p-3">
                      <p className="text-sm font-bold">{t(it.alt)}</p>
                      {it.desc && <p className="text-xs leading-relaxed opacity-60">{t(it.desc)}</p>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {lightboxIdx !== null && (
        <ImageLightbox
          projects={lbProjects}
          currentIndex={lightboxIdx}
          isOpen
          onClose={() => { setLightboxIdx(null); setSourceRect(null); }}
          sourceRect={sourceRect}
          onNavigate={setLightboxIdx}
        />
      )}
    </div>
  );
}
