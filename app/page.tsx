"use client";
import { useSpotifyTrack } from "./hooks/use-spotify-track";
import ColorThief from "colorthief";
import Image from "next/image";
import { useState } from "react";
import ScrollVelocity from "./components/ScrollVelocity";
import "./globals.css";
import colorStats, { SpheresColorType } from "./components/colorStats";

export default function Home() {
  const colorThief = new ColorThief();
  const [color, setColor] = useState<ColorThief.RGBColor>();
  const spotifyMusic = useSpotifyTrack();

  function updateColor(image: HTMLImageElement) {
    setColor(colorThief.getColor(image));
  }

  const colorSettings: {
    background: string;
    spheresColors: SpheresColorType;
  } = color
    ? colorStats(color)
    : {
        background: "#000000",
        spheresColors: {
          sphere1Color: [254, 52, 186],
          sphere2Color: [139, 11, 96],
          sphere3Color: [223, 28, 158],
          blur: [60, 58, 90],
        },
      };

  const backgroundSettings = colorSettings
    ? colorSettings.background
    : "#00000";

  const sphereColorSettings: SpheresColorType = colorSettings
    ? {
        sphere1Color: colorSettings.spheresColors.sphere1Color,
        sphere2Color: colorSettings.spheresColors.sphere2Color,
        sphere3Color: colorSettings.spheresColors.sphere3Color,
        blur: colorSettings.spheresColors.blur,
      }
    : {
        sphere1Color: [254, 52, 186],
        sphere2Color: [139, 11, 96],
        sphere3Color: [223, 28, 158],
        blur: [60, 58, 90],
      };

  const textColor = () => {
    if (backgroundSettings == "#000000") {
      return "#F9F9F9";
    }
    if (backgroundSettings == "#8f8f8f") {
      return "#1C1C1C";
    }
    if (backgroundSettings == "#F9F9F9") {
      return "#000000";
    } else {
      return "#F9F9F9";
    }
  };

  return (
    spotifyMusic && (
      <div
        style={{ backgroundColor: backgroundSettings, color: textColor() }}
        className="w-[605px] h-[150px] flex items-center justify-start gap-5 p-2 rounded-[15px] relative overflow-hidden"
      >
        <div
          style={{
            backgroundColor: `rgb(${sphereColorSettings.sphere1Color})`,
          }}
          className={`path-element1 absolute z-0 blur-[60px]`}
        />
        <div
          style={{
            backgroundColor: `rgb(${sphereColorSettings.sphere2Color})`,
          }}
          className="path-element2 absolute z-0 blur-[58px]"
        />
        <div
          style={{
            backgroundColor: `rgb(${sphereColorSettings.sphere3Color})`,
          }}
          className="path-element3 absolute z-0 blur-[90px]"
        />

        <Image
          style={{ borderRadius: "10px" }}
          className="rounded-[10px] z-100"
          crossOrigin="anonymous"
          width={115}
          height={115}
          onLoad={(event) => updateColor(event.currentTarget)}
          src={spotifyMusic?.cover}
          alt=""
        />

        <div className="flex flex-col w-full gap-1.5">
          <ScrollVelocity
            texts={[spotifyMusic.name]}
            velocity={-20}
            className="text-[20px] overflow-hidden"
            minWidth={454}
            numCopies={2}
          />
          <div className="flex flex-row w-full gap-2.5">
            {spotifyMusic.artist.map((artist, index) => (
              <ScrollVelocity
                key={index}
                texts={[artist]}
                velocity={-20}
                className="text-[20px] overflow-hidden not-last:after:content-[',']"
                minWidth={454}
                numCopies={2}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
}
//arrumar a animação das esferas
//mudar a fonte
