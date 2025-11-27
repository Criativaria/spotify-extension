"use client";
import { useSpotifyTrack } from "./hooks/use-spotify-track";
import ColorThief from "colorthief";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState<ColorThief.RGBColor>();
  const spotifyMusic = useSpotifyTrack();
  const colorThief = new ColorThief();

  function updateColor(image: HTMLImageElement) {
    setColor(colorThief.getColor(image, 3));
  }

  const RGBColor = color?.join(",");
  console.log(RGBColor);

  return (
    spotifyMusic && (
      <div className={`bg-[rgb(${RGBColor})]`}>
        <Image
          crossOrigin="anonymous"
          width={200}
          height={200}
          onLoad={(event) => updateColor(event.currentTarget)}
          src={spotifyMusic?.cover}
          alt=""
        />{" "}
      </div>
    )
  );
}
