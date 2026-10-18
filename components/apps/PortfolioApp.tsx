"use client";

import { useMemo } from "react";
import AnimatedFolder from "./AnimatedFolder";
import { projects as rawProjects } from "@/lib/data";
import { useT, ui } from "@/lib/i18n";
import type { FolderProject } from "./Folder3D";

// og-image GitHub per repo sebagai thumbnail
const og = (repo: string) => `https://opengraph.githubassets.com/1/AsfiCorp/${repo}`;

const GRADIENTS = {
  web: "linear-gradient(135deg, #3fa9f5, #0a66e8)",
  mobile: "linear-gradient(135deg, #30d158, #0a84ff)",
  game: "linear-gradient(135deg, #ff9f0a, #ff375f)",
  design: "linear-gradient(135deg, #bf5af2, #5e5ce6)",
};

type CatKey = keyof typeof GRADIENTS;

function categorize(lang: string): CatKey {
  const l = lang.toLowerCase();
  if (["dart", "kotlin", "swift"].includes(l)) return "mobile";
  if (["c#", "c++", "glsl"].includes(l)) return "game";
  if (["php", "blade", "html", "css", "typescript", "javascript", "sql"].includes(l)) return "web";
  return "design";
}

export default function PortfolioApp() {
  const t = useT();

  const cats = useMemo(() => {
    const map: Record<CatKey, FolderProject[]> = { web: [], mobile: [], game: [], design: [] };
    rawProjects.forEach((p, i) => {
      map[categorize(p.language)].push({
        id: `${p.repo}-${i}`,
        image: og(p.repo),
        title: p.title[0],
        url: p.url,
      });
    });
    return map;
  }, []);

  const labels: Record<CatKey, readonly [string, string]> = {
    web: ui.folder.web,
    mobile: ui.folder.mobile,
    game: ui.folder.game,
    design: ui.folder.design,
  };

  return (
    <div className="p-6">
      <p className="mb-5 text-sm opacity-60">{t(ui.folder.heading)}</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {(Object.keys(cats) as CatKey[]).map((k) => (
          <AnimatedFolder
            key={k}
            title={t(labels[k])}
            projects={cats[k]}
            gradient={GRADIENTS[k]}
          />
        ))}
      </div>
    </div>
  );
}
