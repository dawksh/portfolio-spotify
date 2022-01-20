import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "lib/spotify";
import { StringProps } from "lib/types";

interface trackProps {
  artists: Array<string>;
  external_urls: StringProps;
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.map((track: trackProps) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json(tracks);
}
