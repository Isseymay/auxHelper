import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body`}>
        <nav>
          <ul>
            <li><a href="/about">About</a></li> {/* Can just add the info from the pitch also maybe a brief intro into the people in the team*/}
            <li><a href="/start">Start a party</a></li>
            <li><a href="/join">Join a party</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

