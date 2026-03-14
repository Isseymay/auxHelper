import { URLSearchParams } from "node:url";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;


// getting token data 
// curl -X POST "https://accounts.spotify.com/api/token" \
//      -H "Content-Type: application/x-www-form-urlencoded" \
//      -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"

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
    } catch (error){
        console.error("Error obtining token: ",error);
        return null;
    }
}



export async function testing(){
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
    // console.log(searchParams.headers)

    const q = "Slow%20Down&type=track";
    const url = `https://api.spotify.com/v1/search?q=${q}`

    

    try{
        const response = await fetch(url,searchParams);
        const data = await response.json();
        console.log("Results...\n")
        // for (item of data.tracks.items){
        //     console.log(item)
        // }
        console.log(data.tracks.items);
    } catch (error){
        console.error("Error Searching Spotify: ",error);
    }


    // const params = new URLSearchParams
    // params.append("grant_type",'client_credentials&client_id='+client_id+'&client_secret='+client_secret)
    
    // try{
    //     const response = await fetch("https://accounts.spotify.com/api/token", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: params
    //     });
    //     if (!response.ok){
    //         throw new Error('HTTP status with getting token'+response.status);
    //     }

    //     const data = await response.json();
    //     console.log("access_toke found "+data.access_token);
    // } catch (error){
    //     console.error('An error occured: ',error);
    // }

    

    // const token = data.access_token;

    // const response2 = await fetch("https://api.spotify.com/v1/search?q=Slow%20Down&type=track",{
    //     method: 'GET',
    //     headers: {
    //         "Authorisation": 'Bearer '+token
    //     }
    // });

    // if (!response2.ok){
    //     throw new Error('HTTP status with searching'+response.status);
    // }

    // const searchData = await response2.json();
    // console.log(searchData);
    return;
}