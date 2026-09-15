"use client";

import { useState } from "react";
import { Phone, Navigation, Menu as MenuIcon, X, UtensilsCrossed, Sparkles } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "About Us", href: "#about" },
    { label: "Hours & Location", href: "#location" },
    { label: "VIP Club", href: "#vip" },
  ];

  return (
    <header className="sticky top-[49px] sm:top-[45px] z-40 bg-[#FAFAF9]/95 backdrop-blur-md border-b-2 border-stone-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark & Retro Badge */}
          <a
            href="#"
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="bg-[#DC2626] text-white p-1.5 rounded-lg shadow-sm group-hover:rotate-6 transition-transform">
                <UtensilsCrossed className="w-5 h-5" />
              </span>
              <span className="font-black text-2xl sm:text-3xl tracking-tight text-[#1C1917] font-serif uppercase">
                Miller&apos;s <span className="text-[#DC2626]">Five</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black tracking-wider uppercase text-stone-500 group-hover:text-stone-900 transition-colors">
                Drive-In
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#F59E0B]/20 text-[#B45309] border border-[#F59E0B]/40">
                <Sparkles className="w-2.5 h-2.5" />
                {DINER_INFO.badge}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="tap-target px-3.5 py-2 rounded-lg text-sm font-bold text-stone-700 hover:text-[#DC2626] hover:bg-stone-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={DINER_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target px-4 py-2.5 rounded-lg border-2 border-stone-300 hover:border-stone-800 text-stone-800 font-bold text-sm flex items-center gap-2 transition-all hover:bg-stone-100"
            >
              <Navigation className="w-4 h-4 text-[#DC2626]" />
              Directions
            </a>

            <a
              href={DINER_INFO.phoneTel}
              className="tap-target px-5 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-sm tracking-wide flex items-center gap-2 transition-all shadow-md shadow-red-600/20 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call In Order
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={DINER_INFO.phoneTel}
              aria-label="Call Diner"
              className="tap-target px-3 py-2 bg-[#DC2626] text-white rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="tap-target p-2 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 border border-stone-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF9] border-b-2 border-stone-300 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="tap-target px-4 py-3 rounded-lg text-base font-bold text-stone-800 hover:text-[#DC2626] hover:bg-stone-200/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href={DINER_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="tap-target w-full px-4 py-3 rounded-lg border-2 border-stone-800 text-stone-900 font-bold text-sm flex items-center justify-center gap-2 bg-white"
            >
              <Navigation className="w-4 h-4 text-[#DC2626]" />
              Get Turn-by-Turn Directions
            </a>
            <a
              href={DINER_INFO.phoneTel}
              onClick={() => setMobileMenuOpen(false)}
              className="tap-target w-full px-4 py-3 rounded-lg bg-[#DC2626] text-white font-black text-base flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call To Place Order ({DINER_INFO.phoneDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
