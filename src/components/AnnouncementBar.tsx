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
    <div className="bg-[#1C1917] text-stone-100 border-b border-stone-800 text-xs sm:text-sm font-medium w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-2.5 gap-2">
          {/* Left Live Badge */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-start">
            <div className="inline-flex items-center gap-2 bg-stone-900/90 px-3 py-1 rounded-full border border-stone-700/60 shadow-inner">
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
              <span className="text-stone-200 text-xs font-bold tracking-wide flex items-center gap-1.5 whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                {status.statusText}
              </span>
            </div>

            {/* Mobile Car-Hop Mini Tag */}
            <span className="sm:hidden text-[11px] font-bold text-stone-300 bg-stone-800/90 px-2.5 py-1 rounded-full border border-stone-700 whitespace-nowrap">
              16 Stalls Open
            </span>
          </div>

          {/* Right: Click to Call */}
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end">
            <a
              href={DINER_INFO.phoneTel}
              aria-label={`Call ${DINER_INFO.phoneDisplay} to place an order`}
              className="tap-target w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-1.5 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-98 shadow-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 animate-bounce shrink-0" />
              <span>Car-Hop &amp; Call-Ahead Orders:</span>
              <span className="underline decoration-amber-400 decoration-2 underline-offset-2 tracking-wide font-black">
                {DINER_INFO.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
