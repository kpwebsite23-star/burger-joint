"use client";

import { useEffect, useState } from "react";
import { Phone, Clock, Sparkles } from "lucide-react";
import { DINER_INFO, getDinerStatus } from "@/data/dinerInfo";

export default function AnnouncementBar() {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    statusText: string;
  }>({
    isOpen: true,
    statusText: "Open Today until 9:00 PM",
  });

  useEffect(() => {
    setStatus(getDinerStatus());
    const interval = setInterval(() => {
      setStatus(getDinerStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1C1917] text-stone-100 border-b-2 border-amber-400/60 text-xs sm:text-sm font-medium w-full relative">
      {/* Top 1950s Micro Checkerboard Ribbon */}
      <div className="w-full h-1 checker-border-white opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-2.5 gap-2">
          
          {/* Left Live Badge with 1950s Neon Glow */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-start">
            <div className="inline-flex items-center gap-2 bg-stone-900/95 px-3 py-1 rounded-full border border-amber-400/40 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                {status.isOpen ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </>
                ) : (
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                )}
              </span>
              <span className="text-amber-200 text-xs font-bold tracking-wide flex items-center gap-1.5 whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                {status.statusText}
              </span>
            </div>

            {/* 1950s Augusta Mini Stamp */}
            <span className="text-[11px] font-black uppercase text-[#F59E0B] bg-stone-900 px-2.5 py-0.5 rounded-full border border-amber-400/40 whitespace-nowrap hidden sm:inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              State St Drive-In • Est. 1956
            </span>

            {/* Mobile Mini Tag */}
            <span className="sm:hidden text-[11px] font-bold text-stone-300 bg-stone-800 px-2.5 py-1 rounded-full border border-stone-700 whitespace-nowrap">
              Carryout &amp; Dining
            </span>
          </div>

          {/* Right: 1950s Click to Call Button */}
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end">
            <a
              href={DINER_INFO.phoneTel}
              aria-label={`Call ${DINER_INFO.phoneDisplay} to place an order`}
              className="tap-target w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-1.5 rounded-lg font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-98 shadow-sm border border-red-400/50 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 animate-bounce shrink-0 text-amber-300" />
              <span>Call-Ahead Carryout:</span>
              <span className="underline decoration-amber-400 decoration-2 underline-offset-2 tracking-wider font-mono font-black text-amber-200">
                {DINER_INFO.phoneDisplay}
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
