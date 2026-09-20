import { Geist, Cormorant_Garamond } from "next/font/google";
import type { Metadata } from "next";
import { ChatWidget } from "@/components/chat-widget";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
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
      <body className={`${geist.variable} ${cormorant.variable} antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
