export type NormalizedCommit = {
  sha: string;
  shortSha: string;
  date: string;
  subject: string;
  message: string;
  hasTrailer: boolean;
  url: string;
};

export type GitHubApiCommit = {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: { date: string; name: string };
  };
};

export function hasCoAuthorTrailer(fullMessage: string): boolean {
  return /^Co-Authored-By:\s*Claude/im.test(fullMessage);
}
