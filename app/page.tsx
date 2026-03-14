import Navbar from "./Components/navbar";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="page">
      <main>
        <div className="hero">
          <h1>Request it. Queue it. Vote it. Hear it</h1>
          <Link href="/start">Start a party</Link>
          <a href="/join">Join a party</a>
        </div>
      </main>
    </div>
  );
}
