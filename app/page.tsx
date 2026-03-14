"use client";
import { useEffect } from "react";
import Navbar from "./Components/navbar";

export default function Home() {
  useEffect(() => {
    const leftHeading = document.getElementById("left-h1");
    
    if (!leftHeading) return;

    leftHeading.style.transition = "color 0.3s ease";

    leftHeading.addEventListener("mouseover", () => {
      leftHeading.style.color = "#D03BBD";
    });

    leftHeading?.addEventListener("mouseout", () => {
      leftHeading.style.color = "";
    });
  }, []);

  return (
    <div className="page">
      <main>
        <Navbar />
        <div className="hero">
          <div className="left-hero">
            <h1 id="left-h1">Request it. Queue it. Vote it. Hear it</h1>
          </div>
        </div>
        <div className="btn-container">
          <button className='action-btn'>
            <a href="/start">Start a party</a>
          </button>
          <button className='action-btn'>
            <a href="/join">Join a party</a>
          </button>
        </div>
      </main>
    </div>
  );
}
