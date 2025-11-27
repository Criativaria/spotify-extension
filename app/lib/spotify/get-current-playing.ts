"use server";
import { Player, Track } from "spotify-api.js";
import { AutoRefreshingToken } from "./auto-refreshing-token";

export async function GetCurrentPlaying() {
  // nome da musica, nome do artista, capa do album, id da musica atual
  const client = await AutoRefreshingToken();

  const player = new Player(client);

  const CurrentPlaying = await player.getCurrentlyPlaying("track")!;

  if (CurrentPlaying != null && CurrentPlaying.item != null) {
    return {
      name: CurrentPlaying.item.name,
      artist: (CurrentPlaying.item as Track).artists.map(
        (artist) => artist.name
      ),
      cover: (CurrentPlaying.item as Track).album?.images[1].url as string,
      id: CurrentPlaying.item.id,
    };
  }
}
