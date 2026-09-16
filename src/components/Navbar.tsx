"use client";

import { useState } from "react";
import { Phone, Navigation, Menu as MenuIcon, X, Sparkles, Utensils } from "lucide-react";
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
    <nav className="bg-[#FFFDF9] border-b-4 border-stone-900 shadow-md w-full transition-all relative">
      {/* 1950s Diner Checkered Trim Accent along top of Navbar */}
      <div className="w-full h-1.5 checker-border opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* 1950s Brand Wordmark with Vintage Diner Emblem */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0 py-1"
          >
            {/* Retro Diner Sign Shield Graphic */}
            <div className="relative shrink-0 flex flex-col items-center justify-center bg-[#DC2626] border-2 border-stone-900 rounded-xl p-1 w-10 h-11 shadow-[2px_2px_0px_0px_#1C1917] group-hover:rotate-3 transition-transform text-white">
              <span className="text-[7px] font-black uppercase text-amber-300 tracking-tighter leading-none">EST.</span>
              <span className="text-sm font-black font-serif text-white leading-none mt-0.5">1956</span>
              <Utensils className="w-2.5 h-2.5 text-amber-300 mt-0.5" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-black text-2xl sm:text-3xl tracking-tight text-[#1C1917] font-serif uppercase whitespace-nowrap">
                Miller&apos;s
              </span>
              <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#DC2626] drop-shadow-[1px_1px_0px_#1C1917] whitespace-nowrap">
                Drive-In
              </span>
            </div>

            {/* 1950s Vintage Badge */}
            <span className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-100 text-[#92400E] border-2 border-[#D97706] whitespace-nowrap shrink-0 shadow-[2px_2px_0px_0px_#92400E]">
              <Sparkles className="w-3 h-3 text-[#D97706]" />
              Augusta, KS
            </span>
          </a>

          {/* Desktop Nav Links in 1950s Diner Style */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="tap-target px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-black uppercase tracking-wider text-stone-800 hover:text-[#DC2626] hover:bg-amber-50/80 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons with 1950s 3D Drop Shadows */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={DINER_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex tap-target px-3.5 py-2.5 rounded-xl border-2 border-stone-900 bg-white hover:bg-stone-50 text-stone-900 font-black text-xs xl:text-sm items-center gap-1.5 transition-all shadow-[3px_3px_0px_0px_#1C1917] hover:shadow-[1px_1px_0px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] whitespace-nowrap"
            >
              <Navigation className="w-4 h-4 text-[#DC2626] shrink-0" />
              <span>Directions</span>
            </a>

            <a
              href={DINER_INFO.phoneTel}
              className="tap-target px-4 xl:px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs xl:text-sm tracking-wider uppercase flex items-center gap-2 transition-all shadow-[3px_3px_0px_0px_#1C1917] hover:shadow-[1px_1px_0px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95 whitespace-nowrap border-2 border-stone-900"
            >
              <Phone className="w-4 h-4 shrink-0 text-amber-300" />
              <span>Call In Order</span>
            </a>
          </div>

          {/* Mobile & Tablet Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={DINER_INFO.phoneTel}
              aria-label="Call Diner"
              className="tap-target px-3 py-2 bg-[#DC2626] text-white rounded-xl font-black text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1917] border border-stone-900 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="tap-target p-2 rounded-xl text-stone-900 hover:bg-stone-100 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b-4 border-stone-900 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="tap-target px-4 py-3 rounded-xl text-base font-black uppercase tracking-wider text-stone-900 hover:text-[#DC2626] hover:bg-amber-100/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t-2 border-dashed border-stone-300 flex flex-col gap-2.5">
            <a
              href={DINER_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="tap-target w-full px-4 py-3 rounded-xl border-2 border-stone-900 text-stone-900 font-black text-sm flex items-center justify-center gap-2 bg-white shadow-[3px_3px_0px_0px_#1C1917]"
            >
              <Navigation className="w-4 h-4 text-[#DC2626]" />
              Get Directions (Augusta, KS)
            </a>
            <a
              href={DINER_INFO.phoneTel}
              onClick={() => setMobileMenuOpen(false)}
              className="tap-target w-full px-4 py-3 rounded-xl bg-[#DC2626] text-white font-black text-base flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#1C1917] border-2 border-stone-900"
            >
              <Phone className="w-5 h-5 text-amber-300" />
              Call To Place Order ({DINER_INFO.phoneDisplay})
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
