import { Client } from "spotify-api.js";

export async function AutoRefreshingToken() {
  const client = await Client.create({
    refreshToken: true,
    token: {
      clientID: process.env.NEXT_PUBLIC_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN!,
    },
  });

  return client;
}
