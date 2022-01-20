import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "lib/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const userReposResponse = await fetch(
        "https://api.github.com/users/dakwsh/repos?per_page=10"
      );

      const repositories = await userReposResponse.json();

      const mine = repositories.filter((repo: Data) => !repo.fork);

      const popular = mine
        .filter((count: Data) => count.stargazers_count > 30)
        .map((repo: Data) => ({
          htmlUrl: repo.html_url,
          name: repo.name.substring(0, 65),
          stars: repo.stargazers_count,
          description: repo.description,
        }));

      res.setHeader(
        "Cache-Control",
        "public, s-maxage=1200, stale-while-revalidate=600"
      );

      return res.status(200).json({
        popular,
      });
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}
