import { NextResponse } from "next/server";
import { URLSearchParams } from 'url';

export async function GET(request) {

    const state = Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

    const scope = 'user-read-private user-read-email';

    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;


    const spotifyurlparams = new URLSearchParams({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    });


    return NextResponse.redirect('https://accounts.spotify.com/authorize?' + spotifyurlparams.toString());

}