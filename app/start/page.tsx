
import SongEntry from "@/app/Components/song_entry";

import { getAllTracks } from "@/backend/search";
import { reformatIndividual } from "../Components/individual_search_element";

export default async function Home() {



    const data = await getAllTracks("love me")
    try{
        var songs = []
        for (var song of data){
            songs.push(reformatIndividual(song));
            console.log(reformatIndividual(song));
        }
        return (
            <div className="page">
            <main className="start-main">
                <header className="Party-header sticky top-0 bg-black">
                    <span className="text-info">
                        <h1>Party Name</h1>
                        <p>code is:<span className="party_code">...</span></p>
                    </span>
                    

                </header>
                <div className="start-content w-screen h-screen justify-stretch">
                    <div className="queue-container flex w-full justify-center items-top">
                        <div className="queue-content flex flex-col w-3/5">
                            {songs.map((song) => (<SongEntry key={song.id} song={song} source="search" />))}
                        </div>
                    </div>
                </div>
            </main>
            </div>
        );
    } catch (error){
    
        console.error("Error fetching tracks:", error);
        return (
            <div className="page">
            <main className="start-main">
                <header className="Party-header sticky top-0 bg-black">
                    <span className="text-info">
                        <h1>Party Name</h1>
                        <p>code is:<span className="party_code">...</span></p>
                    </span>
                    

                </header>
                <div className="start-content w-screen h-screen justify-stretch">
                    <div className="queue-container flex w-full justify-center items-top">
                        <div className="queue-content flex flex-col w-3/5">
                            badRequest
                        </div>
                    </div>
                </div>
            </main>
            </div>
        );
    }
}
