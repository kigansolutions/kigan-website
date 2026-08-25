"use client";

import { useEffect, useState } from "react";
import { fetchCommits } from "@/lib/fetch-build-log";
import { FALLBACK_COMMITS } from "@/lib/build-log-fallback";

// Keeps the hero headline's commit count in sync with the live GitHub total
// instead of a hardcoded number that goes stale every time a commit lands.
export function BuildLogCount() {
  const [count, setCount] = useState(FALLBACK_COMMITS.length);

  useEffect(() => {
    let cancelled = false;
    fetchCommits().then((live) => {
      if (live && live.length && !cancelled) setCount(live.length);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return <>{count}</>;
}
