import Image from "next/image";
import "./globals.css"

// this is the container for the page
export default function Home() {
  return (
    <div className="flex home-page">
      <main>
        <h1>Auxily</h1>
        <p>with a paragraph</p>
      </main>
    </div>
  );
}  