import Navbar from "./Components/navbar";

function hoverEffect() {
  const leftHeading = document.getElementById("left-h1");

  leftHeading?.addEventListener("mouseover", () => {
    leftHeading.style.animation = "ease-in-out 0.5s linear";
    leftHeading.style.color = "#D03BBD";
  });
}

export default function Home() {
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
          <a href="/start">Start a party</a>
          <a href="/join">Join a party</a>
        </div>
      </main>
    </div>
  );
}
