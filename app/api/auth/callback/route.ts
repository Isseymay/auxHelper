import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  var code = searchParams.get('code') || null;
  var state = searchParams.get('state') || null;

  if (!state) {
    return NextResponse.redirect('/#' +
      new URLSearchParams({
        error: 'state_mismatch'
      }));
  } else {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
    },
    body: new URLSearchParams({
      code: code!,
      redirect_uri,
      grant_type: 'authorization_code'
    })
  });
  }

  const responseData = await tokenResponse.json();

  if (responseData.error) {
    return NextResponse.redirect('/#' +
      new URLSearchParams({
        error: 'invalid_token'
      }));
  }

  return NextResponse.json(responseData);

};
