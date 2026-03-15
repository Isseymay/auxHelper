
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");


  if (!state || !code) {
    return NextResponse.redirect(
      "/#" +
        new URLSearchParams({
          error: !code ? "missing_code" : "state_mismatch",
        })
    );
  }


  const redirect_uri = "https://amparo-omnificent-pedro.ngrok-free.dev/api/auth/callback";
  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;


  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
    },
    body: new URLSearchParams({
      code: code,
      redirect_uri,
      grant_type: "authorization_code",
    }),
  });

  const responseData = await tokenResponse.json();


  if (responseData.error) {
    return NextResponse.redirect(
      "/#" +
        new URLSearchParams({
          error: "invalid_token",
        })
    );
  }


  return NextResponse.json(responseData);
}