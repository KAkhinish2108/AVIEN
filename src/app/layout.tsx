import { Geist, Instrument_Serif } from "next/font/google";
import type { Metadata } from "next";
import { ChatWidget } from "@/components/chat-widget";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "AVIEN — Find the API behind your idea",
  description:
    "AVIEN is API intelligence for builders. Describe what you are shipping. Receive the APIs that actually fit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${instrument.variable} antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
