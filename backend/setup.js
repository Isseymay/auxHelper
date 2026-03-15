// getting client id and secret from .env
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

export async function getToken(){
    const authUrl = "https://accounts.spotify.com/api/token";
    const credentials = btoa(`${client_id}:${client_secret}`);

    try{
        const response = await fetch(authUrl, {
            method:'POST',
            headers:{
                'Authorization':`Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });

        if (!response.ok){
            throw new Error('Failed to fetch token');
        }

        const data = await response.json();
        console.log("Here");
        return  data.access_token;
        // store access_token and when it'll expire in session.
        // in a hackathon just calling the function is ok
    } catch (error){
        console.error("Error obtining token: ",error);
        return null;
    }
}

