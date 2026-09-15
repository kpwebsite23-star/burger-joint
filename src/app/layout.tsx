import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miller's Five Drive-In | Classic Smashed Burgers & Hand-Spun Shakes",
  description:
    "Historic Route 66 drive-in serving fresh smashed Angus burgers with lace-crispy edges, golden crinkle-cut fries, and thick hand-spun malts. 16 car-hop stalls and call-ahead carryout.",
  keywords: [
    "Miller's Five Drive-In",
    "Drive-in diner",
    "Smashed burgers",
    "Crinkle cut fries",
    "Hand-spun shakes",
    "Route 66 diner",
    "Car-hop service",
    "Lincoln Illinois burger",
  ],
  authors: [{ name: "KP Websites" }],
  openGraph: {
    title: "Miller's Five Drive-In | Smashed Burgers & Shakes",
    description:
      "100% fresh Midwest beef smashed thin on our screaming-hot flat-top grill, crinkle fries, and thick malt shakes.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#DC2626",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900 antialiased selection:bg-[#DC2626] selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
