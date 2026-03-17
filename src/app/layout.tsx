import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steward — The Right Card, at the Right Time",
  description:
    "Steward monitors your location and instantly recommends the best credit card to maximize your rewards at every merchant.",
  openGraph: {
    title: "Steward — Maximize Your Credit Card Rewards",
    description:
      "Arrive at a store, get a notification telling you exactly which card to use and why. Never leave rewards on the table.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
