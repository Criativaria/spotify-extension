import { Client } from "spotify-api.js";

export async function AutoRefreshingToken() {
  const client = await Client.create({
    refreshToken: true,
    token: {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      refreshToken: process.env.REFRESH_TOKEN!,
    },
  });

  return client;
}
