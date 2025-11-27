"use client";
import { useEffect, useState } from "react";
import { GetCurrentPlaying } from "../lib/spotify/get-current-playing";

export type playingType = {
  name: string;
  artist: string[];
  cover: string;
  id: string;
};

export function useSpotifyTrack() {
  const [currentPlaying, setCurrentPlaying] = useState<playingType>();

  useEffect(() => {
    async function getCurrentlyPlaying() {
      const playing = await GetCurrentPlaying();
      if (playing?.id != currentPlaying?.id) {
        setCurrentPlaying(playing);
      }
    }
    const timer = setInterval(() => {
      getCurrentlyPlaying();
    }, 2500);

    return () => {
      //roda quando o componente for tirado da tela
      clearInterval(timer);
    };
  }, [currentPlaying?.id]);

  return currentPlaying;
}
