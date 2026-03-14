'use client'

import { useState } from "react";
import SongEntry from "@/app/components/song_entry";

export default function Home() {
    const [songList, setSongList] = useState([] as number[])

    function handleClick(){
        setSongList((prev) => [...prev, Date.now()]);
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
                    {songList.map((id) => (<SongEntry key={id}/>))}
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
