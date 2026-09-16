"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Navigation, Car, Phone, Lightbulb, Compass, ExternalLink, Sparkles, CheckCircle2, Radio } from "lucide-react";
import { DINER_INFO, getDinerStatus } from "@/data/dinerInfo";

export default function LocationHoursSection() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(1);
  const [selectedStall, setSelectedStall] = useState<number | null>(7);
  const [headlightsOn, setHeadlightsOn] = useState<boolean>(true);
  const [status, setStatus] = useState({
    isOpen: true,
    statusText: "Open Today until 9:00 PM",
  });

  useEffect(() => {
    const dinerStat = getDinerStatus();
    setCurrentDayIndex(dinerStat.currentDayIndex);
    setStatus({
      isOpen: dinerStat.isOpen,
      statusText: dinerStat.statusText,
    });
  }, []);

  const handleSelectStall = (stallNum: number) => {
    setSelectedStall(stallNum);
    setHeadlightsOn(true);
  };

  return (
    <section id="location" className="py-16 sm:py-20 lg:py-24 bg-amber-50/40 border-b-4 border-stone-900 scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1950s Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-200 text-[#78350F] px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-3 border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
            <Car className="w-4 h-4" />
            ★ Augusta Drive-In Tradition Since 1956 ★
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight text-stone-950">
            Hours, Location &amp; Drive-In Dining
          </h2>
          <p className="mt-3 text-stone-800 font-medium text-base sm:text-lg">
            Located right at 330 State Street in Augusta, Kansas. Pull up for quick counter carryout or enjoy your meal at our outdoor picnic benches under the Kansas sky!
          </p>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Column 1: Weekly Hours Board */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl border-4 border-stone-900 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1C1917] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-stone-900 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-[#DC2626] text-white rounded-xl border border-stone-900 shadow-[2px_2px_0px_0px_#1C1917]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-stone-950 font-serif">
                      Diner Operating Hours
                    </h3>
                    <p className="text-xs text-stone-600 font-bold uppercase">Augusta Drive-In Schedule</p>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] ${
                    status.isOpen
                      ? "bg-emerald-200 text-emerald-950"
                      : "bg-amber-200 text-amber-950"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-600 animate-pulse" : "bg-amber-600"}`} />
                  {status.isOpen ? "Open Now" : "Closed Now"}
                </span>
              </div>

              {/* Hours Grid */}
              <div className="space-y-2 mb-8">
                {DINER_INFO.weeklyHours.map((item) => {
                  const isToday = item.dayIndex === currentDayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all ${
                        isToday
                          ? "bg-red-100 border-stone-900 font-black shadow-[2px_2px_0px_0px_#1C1917]"
                          : "border-transparent hover:border-stone-300 hover:bg-stone-50 text-stone-800"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-sm sm:text-base ${isToday ? "font-black text-[#DC2626]" : "font-bold text-stone-800"}`}>
                          {item.day}
                        </span>
                        {isToday && (
                          <span className="text-[10px] font-black uppercase tracking-wider bg-[#DC2626] text-white px-2 py-0.5 rounded-md border border-stone-900">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={`font-mono text-sm sm:text-base ${isToday ? "font-black text-[#DC2626]" : "font-bold text-stone-700"}`}>
                        {item.openTime} – {item.closeTime}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 1950s Drive-In Ordering Box Graphic */}
            <div className="bg-[#1C1917] text-white rounded-2xl p-5 border-3 border-amber-400 shadow-[4px_4px_0px_0px_#DC2626]">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-amber-400 text-stone-950 rounded-xl shrink-0 mt-0.5 border border-stone-900">
                  <Radio className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-amber-300 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <span>★ Authentic Drive-In Service ★</span>
                  </h4>
                  <p className="text-sm text-stone-200 leading-relaxed font-medium">
                    &ldquo;{DINER_INFO.orderingInstructions}&rdquo;
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-stone-300 font-bold">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      12 Drive-In Spots
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Carryout Counter Window
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Augusta KS Map Frame */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl border-4 border-stone-900 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1C1917] flex flex-col justify-between">
            <div>
              {/* Address Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-stone-900 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-amber-400 text-stone-950 rounded-xl border border-stone-900 shadow-[2px_2px_0px_0px_#1C1917]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-stone-950 font-serif">
                      Augusta, Kansas Spot
                    </h3>
                    <p className="text-sm font-bold text-stone-700 mt-0.5">
                      {DINER_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* 1950s Stylized Map Canvas */}
              <div className="relative rounded-2xl overflow-hidden border-3 border-stone-900 bg-amber-50 h-64 sm:h-72 mb-6 group">
                <div className="absolute inset-0 bg-stone-200 paper-grid">
                  {/* State Street strip */}
                  <div className="absolute top-1/2 left-0 right-0 h-14 bg-stone-900 -translate-y-1/2 flex items-center justify-around border-y-3 border-amber-400">
                    <div className="w-10 h-1.5 bg-amber-400" />
                    <div className="w-10 h-1.5 bg-amber-400" />
                    <div className="w-10 h-1.5 bg-amber-400" />
                    <div className="w-10 h-1.5 bg-amber-400" />
                  </div>

                  {/* Diner Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                      <Car className="w-6 h-6 text-amber-300" />
                    </div>
                    <div className="mt-2 bg-[#1C1917] text-white font-black text-xs px-3.5 py-1 rounded-xl border-2 border-amber-400 shadow-md whitespace-nowrap">
                      Miller&apos;s Drive In (Est. 1956)
                    </div>
                  </div>

                  {/* Augusta KS Shield */}
                  <div className="absolute top-4 left-4 bg-white border-2 border-stone-900 rounded-lg p-1.5 shadow-[2px_2px_0px_0px_#1C1917]">
                    <div className="text-[7px] font-black uppercase text-stone-500">AUGUSTA</div>
                    <div className="text-xs font-black text-[#DC2626]">KANSAS</div>
                  </div>
                </div>

                <a
                  href={DINER_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-stone-900/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-black text-base z-20"
                >
                  <Compass className="w-5 h-5 text-amber-400" />
                  <span>Click for GPS Navigation (Augusta, KS)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Parking Directions */}
              <div className="bg-amber-100/60 border-2 border-stone-900 rounded-xl p-4 mb-6 text-sm text-stone-800 space-y-1 shadow-[2px_2px_0px_0px_#1C1917]">
                <div className="font-black text-stone-950 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-[#DC2626]" />
                  State Street Drive-In &amp; Carryout:
                </div>
                <p className="text-xs sm:text-sm text-stone-700 font-medium">
                  Located right on State Street (US-54 / US-77 corridor) in Augusta, KS. Ample parking and outdoor picnic seating. Call ahead 10-15 minutes and your order will be bagged piping hot right off the grill!
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={DINER_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target w-full sm:flex-1 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-sm sm:text-base uppercase rounded-2xl flex items-center justify-center gap-2.5 shadow-[4px_4px_0px_0px_#1C1917] border-2 border-stone-900 transition-all active:scale-98"
              >
                <Navigation className="w-5 h-5 text-[#F59E0B]" />
                <span>Open in Maps</span>
                <ExternalLink className="w-4 h-4 text-stone-400" />
              </a>

              <a
                href={DINER_INFO.phoneTel}
                className="tap-target w-full sm:w-auto px-5 py-3.5 bg-red-100 hover:bg-red-200 border-2 border-stone-900 text-[#DC2626] font-black text-sm sm:text-base uppercase rounded-2xl flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1C1917] transition-all active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>Call Ahead</span>
              </a>
            </div>

          </div>

        </div>

        {/* 1950s 12-Stall Drive-In Guide */}
        <div className="bg-[#FFFDF9] rounded-3xl border-4 border-stone-900 p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1C1917]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-stone-900 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#92400E] bg-amber-200 px-3 py-1 rounded-full border border-stone-900 mb-1.5 shadow-[2px_2px_0px_0px_#1C1917]">
                <Sparkles className="w-3.5 h-3.5" />
                Drive-In Car &amp; Carryout Guide
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-950">
                12 Drive-In Parking Stalls &amp; Picnic Dining
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 font-bold mt-0.5">
                Pull into any stall along State Street or walk right up to the window for fast carryout.
              </p>
            </div>

            {selectedStall && (
              <div className="flex items-center gap-3 bg-[#1C1917] text-white px-4 py-2.5 rounded-2xl border-2 border-amber-400 shadow-[3px_3px_0px_0px_#DC2626]">
                <div className={`w-3.5 h-3.5 rounded-full ${headlightsOn ? "bg-amber-400 shadow-[0_0_12px_#F59E0B] animate-pulse" : "bg-stone-600"}`} />
                <div className="text-xs sm:text-sm">
                  <span className="font-mono font-black text-amber-400">Stall #{selectedStall}</span>
                  <span className="text-stone-300 ml-1.5 font-bold">• Ready for Dining</span>
                </div>
                <a
                  href={DINER_INFO.phoneTel}
                  className="tap-target ml-2 px-3 py-1.5 bg-[#DC2626] text-white font-black text-xs uppercase rounded-xl border border-white"
                >
                  Order to Stall #{selectedStall}
                </a>
              </div>
            )}
          </div>

          {/* 12 Stall Buttons Grid with 1950s Car Styling */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((stallNum) => {
              const isSelected = selectedStall === stallNum;
              return (
                <button
                  key={stallNum}
                  type="button"
                  onClick={() => handleSelectStall(stallNum)}
                  className={`tap-target py-3 px-2 rounded-2xl font-mono text-center flex flex-col items-center justify-center transition-all border-3 cursor-pointer ${
                    isSelected
                      ? "bg-[#1C1917] text-amber-400 border-amber-400 shadow-[4px_4px_0px_0px_#DC2626] scale-105"
                      : "bg-white hover:bg-amber-50 text-stone-900 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917]"
                  }`}
                >
                  <Car className={`w-5 h-5 mb-1 ${isSelected ? "text-amber-400 animate-bounce" : "text-stone-500"}`} />
                  <span className="text-xs font-black">Stall {stallNum}</span>
                </button>
              );
            })}
          </div>

          <div className="p-4 bg-amber-100 border-2 border-stone-900 rounded-2xl flex items-center justify-between text-xs sm:text-sm text-stone-900 font-bold shadow-[2px_2px_0px_0px_#1C1917]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                Enjoy picnic bench outdoor dining, drive-in parking, and quick walk-up window carryout.
              </span>
            </div>
            <span className="font-black uppercase text-[#DC2626] hidden sm:inline">
              ★ Butler County Tradition Since 1956 ★
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
