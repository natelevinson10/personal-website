import type { StaticImageData } from 'next/image';

export type ArtistType = {
    name: string;
    url: string;
    coverImage: {
        url: string;
    };
}

export type SongType = {
    title: string;
    url: string;
    artist: string;
    coverImage: {
        url: string;
    };
}

export type ProjectType = {
    name: string;
    iconUrl?: string;
    duration: string;
    description: Array<string>;
    skills: Array<string>;
}