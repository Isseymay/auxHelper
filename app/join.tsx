import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <main>
        <div className="Party-header">
          <h1>You're in a party</h1>
          <p>name is:<span className="party_name">...</span></p>
        </div>
      </main>
    </div>
  );
}
