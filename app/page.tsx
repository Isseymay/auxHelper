"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {

  useEffect(() => {
    const leftHeading = document.getElementById("left-h1");
    
    if (!leftHeading) return;

    leftHeading.style.transition = "color 0.3s ease, transform 0.5s ease";

    leftHeading.addEventListener("mouseover", () => {
      leftHeading.style.color = "#D03BBD";
      leftHeading.style.transform = "translateY(-10px)";
    });

    leftHeading?.addEventListener("mouseout", () => {
      leftHeading.style.color = "";
      leftHeading.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <div className="page">
      <main>
        <div className="hero">
          <div className="left-hero">
            <h1 id="left-h1">Request it. Queue it. Vote it. Hear it!</h1>
            <div className="btn-container">
              <button className='action-btn' id='start-btn'>
                <a href="/start">Start a party</a>
              </button>
              <button className='action-btn' id='join-btn'>
                <a href="/join">Join a party</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
