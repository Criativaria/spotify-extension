"use client";
import { GetCurrentPlaying } from "./lib/spotify/get-current-playing";

export default function Home() {
  GetCurrentPlaying().then(console.log);
}
