"use client";

import { Phone, Utensils, Navigation } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

export default function StickyMobileOrderBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1917]/95 backdrop-blur-md border-t-2 border-[#DC2626] px-4 py-2.5 shadow-2xl safe-area-bottom">
      <div className="flex items-center gap-2">
        {/* Quick Menu Button */}
        <a
          href="#menu"
          className="tap-target px-3 py-3 rounded-xl bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-bold text-xs flex flex-col items-center justify-center shrink-0"
        >
          <Utensils className="w-4 h-4 text-[#F59E0B]" />
          <span>Menu</span>
        </a>

        {/* Primary Call To Order Tap Target Button */}
        <a
          href={DINER_INFO.phoneTel}
          className="tap-target flex-1 px-4 py-3 rounded-xl bg-[#DC2626] active:bg-[#B91C1C] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call to Order ({DINER_INFO.phoneDisplay})</span>
        </a>

        {/* Quick Directions Button */}
        <a
          href={DINER_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-target px-3 py-3 rounded-xl bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-bold text-xs flex flex-col items-center justify-center shrink-0"
        >
          <Navigation className="w-4 h-4 text-emerald-400" />
          <span>Map</span>
        </a>
      </div>
    </div>
  );
}
