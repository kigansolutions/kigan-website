"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { PixelField } from "./PixelField";
import { fetchCommits } from "@/lib/fetch-build-log";
import { FALLBACK_COMMITS, FALLBACK_SNAPSHOT_DATE } from "@/lib/build-log-fallback";
import { MILESTONES } from "@/lib/build-log-milestones";
import { NormalizedCommit } from "@/lib/build-log-types";

function TrailerPill({ present }: { present: boolean }) {
  return (
    <span className={`trailer-pill ${present ? "is-present" : "is-absent"}`}>
      <span className="dot" />
      {present ? "Trailer present" : "No trailer"}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BuildLog() {
  const [commits, setCommits] = useState<NormalizedCommit[]>(FALLBACK_COMMITS);
  const [source, setSource] = useState<"live" | "cached">("cached");

  useEffect(() => {
    let cancelled = false;
    fetchCommits().then((live) => {
      if (live && live.length && !cancelled) {
        setCommits(live);
        setSource("live");
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    for (const m of MILESTONES) {
      const shas = [m.sha, ...(m.relatedShas ?? [])];
      const missing = shas.filter((sha) => !commits.some((c) => c.sha === sha));
      if (missing.length) {
        console.warn(`[build-log] milestone "${m.title}" references unknown commit sha(s):`, missing);
      }
    }
  }, [commits]);

  const stats = useMemo(() => {
    const total = commits.length;
    const withTrailer = commits.filter((c) => c.hasTrailer).length;
    const pct = total ? Math.round((withTrailer / total) * 100) : 0;
    // Measured against the fallback snapshot date rather than Date.now() so
    // this stays a pure render computation (safe for static export/SSR).
    const firstDate = commits[0] ? new Date(commits[0].date) : null;
    const asOf = new Date(`${FALLBACK_SNAPSHOT_DATE}T00:00:00Z`);
    const ageDays = firstDate
      ? Math.max(1, Math.round((asOf.getTime() - firstDate.getTime()) / 86_400_000))
      : 0;
    return { total, withTrailer, pct, ageDays, milestoneCount: MILESTONES.length };
  }, [commits]);

  const foldedShas = useMemo(
    () => new Set(MILESTONES.flatMap((m) => m.relatedShas ?? [])),
    []
  );
  const milestoneBySha = useMemo(
    () => new Map(MILESTONES.map((m) => [m.sha, m])),
    []
  );

  return (
    <section className="relative bg-ink text-paper py-20 md:py-28 overflow-hidden">
      {/* Visually hidden: the page's h1 is in app/build-log/page.tsx, and milestone
          entries below are h3 — this closes the gap so screen-reader heading
          navigation doesn't skip a level. */}
      <h2 className="sr-only">Commit history</h2>
      <PixelField className="opacity-[0.06]" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <span className={`trailer-pill ${source === "live" ? "is-live" : "is-cached"} mb-6`}>
            <span className="dot" />
            {source === "live" ? "Live from GitHub" : `Cached snapshot · ${FALLBACK_SNAPSHOT_DATE}`}
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4 mb-10">
            <div>
              <p className="font-display font-semibold text-2xl md:text-3xl">{stats.total}</p>
              <p className="mono-label text-[10px] text-paper/50 mt-1">Commits</p>
            </div>
            <div>
              <p className="font-display font-semibold text-2xl md:text-3xl">
                {stats.withTrailer} of {stats.total}
              </p>
              <p className="mono-label text-[10px] text-paper/50 mt-1">With co-authorship trailer ({stats.pct}%)</p>
            </div>
            <div>
              <p className="font-display font-semibold text-2xl md:text-3xl">{stats.ageDays}</p>
              <p className="mono-label text-[10px] text-paper/50 mt-1">Days since first commit</p>
            </div>
            <div>
              <p className="font-display font-semibold text-2xl md:text-3xl">{stats.milestoneCount}</p>
              <p className="mono-label text-[10px] text-paper/50 mt-1">Milestones documented</p>
            </div>
          </div>

          <p className="text-paper/70 leading-[1.7] font-light text-sm md:text-base mb-16 max-w-2xl">
            {stats.withTrailer} of these {stats.total} commits carry a <code className="text-sage">Co-Authored-By: Claude</code> trailer in the commit body — left there deliberately, as an honest record of which changes an agent did the typing on. The other {stats.total - stats.withTrailer} don&rsquo;t carry that trailer. That&rsquo;s not the same as &ldquo;a human wrote every line&rdquo; — it just means the trailer wasn&rsquo;t added, often because the change was small enough to apply directly, or came from a manual edit pass. What&rsquo;s consistent across all {stats.total}: every commit was scoped, reviewed, and shipped by one person before it went live.
          </p>
        </Reveal>

        <div className="timeline-rail flex flex-col gap-6">
          {commits.map((c) => {
            if (foldedShas.has(c.sha)) return null;
            const milestone = milestoneBySha.get(c.sha);

            if (milestone) {
              const related = commits.filter((rc) => milestone.relatedShas?.includes(rc.sha));
              return (
                <Reveal key={c.sha} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full bg-sage" />
                  <div className="bg-paper/[0.06] border border-paper/10 rounded-2xl p-6 md:p-8">
                    <p className="mono-label text-[10px] text-paper/60 mb-3">{formatDate(c.date)}</p>
                    <h3 className="font-display font-semibold text-xl md:text-2xl mb-3">{milestone.title}</h3>
                    <p className="text-paper/75 leading-[1.7] font-light mb-5">{milestone.body}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <TrailerPill present={c.hasTrailer} />
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 py-2 -my-2 mono-label text-[11px] text-paper/60 hover:text-paper transition-colors"
                      >
                        {c.shortSha}
                        <ExternalLink size={11} />
                      </a>
                      {related.map((rc) => (
                        <a
                          key={rc.sha}
                          href={rc.url}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1 py-2 -my-2 mono-label text-[11px] text-paper/60 hover:text-paper/70 transition-colors"
                        >
                          + {rc.shortSha}
                          <ExternalLink size={11} />
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={c.sha} className="relative pl-10">
                <div className="absolute left-[3px] top-2 w-3 h-3 rounded-full bg-paper/30" />
                <div className="flex flex-wrap items-center gap-3 py-1">
                  <p className="mono-label text-[10px] text-paper/60 w-24 shrink-0">{formatDate(c.date)}</p>
                  <p className="text-paper/70 text-sm font-light flex-1 min-w-[12rem]">{c.subject}</p>
                  <TrailerPill present={c.hasTrailer} />
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 py-2 -my-2 mono-label text-[11px] text-paper/60 hover:text-paper transition-colors"
                  >
                    {c.shortSha}
                    <ExternalLink size={11} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
