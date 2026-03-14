import {getToken} from "./setup.js"

export async function getAllTracks(searchString){
    const str = searchString.replaceAll(" ","%20") // replacing the spaces with link approprite values
    const token = await getToken();
    if (token == null){
        throw new Error("Issue retrieving token");
    }
    
    const searchParams = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    const q = `${str}&type=track`;
    const url = `https://api.spotify.com/v1/search?q=${q}`

    try{
        const response = await fetch(url,searchParams);
        const data = await response.json();
        return data.tracks.items;
    } catch (error){
        console.error("Error Searching Spotify: ",error);
        return null;
    }
}