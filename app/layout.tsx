import type { Metadata } from "next";
import { bebasNeue, sora } from "./fonts";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taxi & Mietwagen Gatz – Ihr Taxi in Overath seit 2002",
  description:
    "Taxi, Mietwagen, Krankentransport in Overath und Umgebung. 24h Service. Jetzt anrufen: 0 22 04 – 74 44 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bebasNeue.variable} ${sora.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
