import { NextResponse } from "next/server";
import { fallbackRepos } from "@/lib/data";

export const revalidate = 3600;

// Proxy GitHub API — cache 1 jam di server, klien pakai fallback statis bila gagal.
// ?repo=NAME → detail satu repo (dipakai modal project untuk data live saat diklik).
export async function GET(req: Request) {
  const repo = new URL(req.url).searchParams.get("repo");
  try {
    if (repo) {
      const res = await fetch(`https://api.github.com/repos/AsfiCorp/${encodeURIComponent(repo)}`, {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      });
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const r = await res.json();
      return NextResponse.json({
        name: r.name,
        stars: r.stargazers_count,
        forks: r.forks_count,
        watchers: r.watchers_count,
        openIssues: r.open_issues_count,
        language: r.language,
        pushedAt: r.pushed_at,
        url: r.html_url,
        description: r.description,
      });
    }

    const res = await fetch(
      "https://api.github.com/users/AsfiCorp/repos?per_page=100&sort=updated",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const repos = (await res.json()) as Array<Record<string, unknown>>;
    // enrich: API GitHub sering return language null — isi dari data lokal
    const langByUrl = new Map(fallbackRepos.map((r) => [r.url.toLowerCase(), r.language]));
    const data = repos
      .filter((r) => !r.fork)
      .map((r) => {
        const url = (r.html_url as string) ?? "";
        return {
          name: r.name as string,
          description: (r.description as string) ?? null,
          language: (r.language as string) ?? langByUrl.get(url.toLowerCase()) ?? null,
          url,
          updated: (r.pushed_at as string) ?? "",
          stars: r.stargazers_count as number,
        };
      });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}