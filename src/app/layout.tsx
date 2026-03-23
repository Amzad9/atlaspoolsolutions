import type { Metadata } from "next";
import "./globals.css";

import LoadingSplash from "../components/LoadingSplash";

export const metadata: Metadata = {
  title: "Atlas Pool Solutions",
  description:
    "Commercial rooftop pool and spa renovations, water features, decks, and equipment modernization by Atlas Pool Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingSplash
          src="/new/Run%20Like%20a%20Girl%2004.gif"
          alt="Run Like a Girl loading"
          durationMs={2000}
        />
        {children}
      </body>
    </html>
  );
}
