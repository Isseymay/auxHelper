import "./globals.css";
import Navbar from "./Components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

