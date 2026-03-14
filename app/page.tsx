import Navbar from "./Components/navbar";

export default function Home() {
  return (
    <div className="page">
      <main>
        <div className="hero">
          <h1>Request it. Queue it. Vote it. Hear it</h1>
          <a href="/start">Start a party</a>
          <a href="/join">Join a party</a>
        </div>
      </main>
    </div>
  );
}
