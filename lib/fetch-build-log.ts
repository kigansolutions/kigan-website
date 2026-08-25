import { GitHubApiCommit, NormalizedCommit, hasCoAuthorTrailer } from "./build-log-types";

const REPO = "kigansolutions/kigan-website";
const TIMEOUT_MS = 8000;

export async function fetchCommits(): Promise<NormalizedCommit[] | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/commits?per_page=100`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;

    const data: GitHubApiCommit[] = await res.json();
    return data
      .map((c) => ({
        sha: c.sha,
        shortSha: c.sha.slice(0, 7),
        date: c.commit.author.date,
        subject: c.commit.message.split("\n")[0],
        message: c.commit.message,
        hasTrailer: hasCoAuthorTrailer(c.commit.message),
        url: c.html_url,
      }))
      .reverse();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
