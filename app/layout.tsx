import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <nav className="nav-bar">
        <ul>
          <li><a></a></li>
          <li><a>About</a></li>
          <li><a>Join</a></li>
          <li><a>Start</a></li>
        </ul>
      </nav>
      <body
        className={`body`}
      >
        {children}
      </body>
    </html>
  );
}
