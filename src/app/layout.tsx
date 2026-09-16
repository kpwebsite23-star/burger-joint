import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrayProvider } from "@/context/TrayContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miller's Drive In | Classic Smashed Burgers & Hand-Spun Shakes | Augusta, KS",
  description:
    "Historic Augusta, Kansas drive-in serving fresh flat-top smashed Angus burgers with lace-crispy edges, golden crinkle-cut fries, and thick hand-spun malts since 1956. Call-ahead carryout and picnic dining.",
  keywords: [
    "Miller's Drive In",
    "Augusta KS burger",
    "Drive-in diner",
    "Smashed burgers",
    "Crinkle cut fries",
    "Hand-spun shakes",
    "Butler County restaurant",
    "State Street Augusta",
    "Kansas drive-in",
  ],
  authors: [{ name: "KP Websites" }],
  openGraph: {
    title: "Miller's Drive In | Smashed Burgers & Shakes | Augusta, KS",
    description:
      "100% fresh Midwest beef smashed thin on our seasoned flat-top grill, crinkle fries, and thick malt shakes in Augusta, KS.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: "Miller's Drive In",
  telephone: "(316) 775-9989",
  address: {
    "@type": "PostalAddress",
    streetAddress: "330 State Street",
    addressLocality: "Augusta",
    addressRegion: "KS",
    postalCode: "67010",
    addressCountry: "US",
  },
  servesCuisine: ["American", "Burgers", "Drive-In Diner", "Ice Cream", "Shakes"],
  priceRange: "$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:30",
      closes: "19:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900 antialiased selection:bg-[#DC2626] selection:text-white">
        <TrayProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </TrayProvider>
      </body>
    </html>
  );
}
