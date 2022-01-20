import React from "react";

export interface NowPlayingSongProps {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  artistUrl: string;
  title: string;
}

export interface TopTracksProps {
  artist: string;
  songUrl: string;
  title: string;
}

export interface PostsProps {
  artist: string;
  description: string;
  pubDate: Date;
  title: string;
}

export interface ProjectsProps {
  htmlUrl: string;
  name: string;
  stars: string;
  description: string;
}

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface StringProps {
  [name: string]: string | React.ReactNode;
}

export interface artistItemProps {
  [name: string]: string | React.ReactNode;
  external_urls: StringProps;
}
export interface WrapperProps {
  children?: React.ReactNode;
  darkTheme?: boolean;
}

export interface ChildrenStringProps {
  children?: React.ReactNode;
  title?: string;
}
export interface Data {
  [key: string]: any;
}
