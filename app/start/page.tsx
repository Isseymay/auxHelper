'use client'

import { useState } from "react";
import SongEntry from "@/app/Components/song_entry";

import { getAllTracks } from "@/backend/search";
import { reformatIndividual } from "../Components/individual_search_element";

export async  function Home() {
    
    const [songList, setSongList] = useState([] as number[])

    function handleClick(){
        setSongList((prev) => [...prev, Date.now()]);
    }

    const data = await getAllTracks("replay")
    try{
        var songs = []
        for (var song of data){
            songs.push(reformatIndividual(song));
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
                            {songs.map((song) => (SongEntry(song)))}
                        </div>
                    </div>

                    <button className="rounded-full w-10 h-10 fixed bottom-15 right-10 bg-white text-black hover:bg-gray-400 transition-colors" onClick={handleClick}>
                    +
                    </button>
                </div>
            </main>
            </div>
        );
    } catch (error){
    

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

                    <button className="rounded-full w-10 h-10 fixed bottom-15 right-10 bg-white text-black hover:bg-gray-400 transition-colors" onClick={handleClick}>
                    +
                    </button>
                </div>
            </main>
            </div>
        );
    }
}
