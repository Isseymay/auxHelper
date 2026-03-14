import {testing} from "./be_initial"

export default function Home() {
  testing()
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
