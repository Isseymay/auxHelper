import Navbar from "./Components/navbar";
import { allSearchResults } from "./Components/search";
import Link from 'next/link';

export default function Home() {
  const search = "Love me";
  return (
    <div className="page">
      <main>
        <div className="hero">
          <h1>Request it. Queue it. Vote it. Hear it</h1>
          <Link href="/start">Start a party</Link>
          <a href="/join">Join a party</a>
        </div>
        {allSearchResults("Love me")}
      </main>
    </div>
  );
}
