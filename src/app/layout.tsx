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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: "Miller's Five Drive-In",
  telephone: "(555) 348-3483",
  address: {
    "@type": "PostalAddress",
    streetAddress: "505 Route 66 Parkway",
    addressLocality: "Lincoln",
    addressRegion: "IL",
    postalCode: "62656",
    addressCountry: "US",
  },
  servesCuisine: ["American", "Burgers", "Drive-In Diner", "Ice Cream", "Shakes"],
  priceRange: "$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "20:30",
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
