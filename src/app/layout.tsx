import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navegation from "./nav";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memex app",
  description: "app web para genera memes con inteligencia artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          <Navegation />
          <div className="p-2 bg-black">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
