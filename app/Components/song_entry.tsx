"use client"

import { useState } from "react"
import { CheckIcon } from "../icons/check-circle";
import XIcon from "../icons/x-circle";

export default function SongEntry({song_name="All Star", song_artist="Smash Mouth"}){
    const [upvoteCount, setUpvoteCount] = useState(0);
    const [downvoteCount, setDownvoteCount] = useState(0);

    return(
        <div className="song-container flex w-full h-20 m-6">
            <div className="song-bg flex rounded-md w-full h-full justify-between bg-cyan-900 p-5">
                <div className="song-stuff flex items-center gap-3">
                    <div className="img-placeholder h-15 aspect-square align-left bg-green-700 content-center text-center">
                        buh
                    </div>
                    <div className="song-details flex flex-col">
                        <div className="song-name">
                            {song_name}
                        </div>
                        <div className="artist-name italic">
                            {song_artist}
                        </div>

                    </div>
                </div>
                <div className="vote-buttons flex items-center gap-3">
                    <span className="upvote-text">
                        {upvoteCount}
                    </span>

                    <button className="upvote-button cursor-pointer" onClick={() => setUpvoteCount(upvoteCount + 1)}>
                        <CheckIcon />
                    </button>

                    <span className="downvote-text">
                        {downvoteCount}
                    </span>

                    <button className="downvote-button cursor-pointer" onClick={() => setDownvoteCount(downvoteCount + 1)}>
                        <XIcon />
                    </button>

                </div>
            </div>
        </div>
    )

}