import { NextResponse } from "next/server";

const GITHUB_API_URL = "https://api.github.com";
const DEFAULT_USERNAME = "KAMALESH-MENON";

const toTitle = (value) => {
  if (!value) {
    return "Repository";
  }

  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export async function GET() {
  const username = process.env.GITHUB_USERNAME || DEFAULT_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: 1800 },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { projects: [], error: "Unable to fetch repositories" },
        { status: response.status }
      );
    }

    const repos = await response.json();

    const projects = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .map((repo) => {
        const primaryTag = repo.language || "Other";

        return {
          id: repo.id,
          title: toTitle(repo.name),
          techStack: repo.language || "Not specified",
          description:
            repo.description ||
            "GitHub repository synced automatically for this portfolio.",
          image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
          tag: ["All", primaryTag],
          gitUrl: repo.html_url,
          previewUrl: repo.homepage || "",
          stars: repo.stargazers_count || 0,
          updatedAt: repo.updated_at || "",
        };
      });

    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json(
      { projects: [], error: "Failed to fetch GitHub repositories" },
      { status: 500 }
    );
  }
}
