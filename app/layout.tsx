import "./globals.css";
import Navbar from "./Components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`body`}>
        {children}
      </body>
    </html>
  );
}

