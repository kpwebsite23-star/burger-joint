"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Navigation, Car, Phone, Lightbulb, Compass, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { DINER_INFO, getDinerStatus } from "@/data/dinerInfo";

export default function LocationHoursSection() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(1);
  const [selectedStall, setSelectedStall] = useState<number | null>(7); // default preview stall
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
    <section id="location" className="py-16 sm:py-20 lg:py-24 bg-stone-100/70 border-b border-stone-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-[#B45309] px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-3">
            <Car className="w-4 h-4" />
            16 Vintage Car-Hop Stalls
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-stone-950">
            Hours, Location &amp; Car-Hop Service
          </h2>
          <p className="mt-3 text-stone-600 font-medium text-base sm:text-lg">
            Located right on historic Route 66 Parkway. Drive in, stay cozy in your car, or walk right up to our quick-pickup window.
          </p>
        </div>

        {/* Two-Column Responsive Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Column 1: Weekly Hours Grid & Car-Hop Instructions */}
          <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-amber-100 text-[#D97706] rounded-xl">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-stone-900 font-serif">
                      Weekly Operating Hours
                    </h3>
                    <p className="text-xs text-stone-500">Live updated for today</p>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                    status.isOpen
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-amber-100 text-amber-800 border border-amber-300"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
                  {status.isOpen ? "Open Now" : "Closed Now"}
                </span>
              </div>

              {/* Hours Table */}
              <div className="space-y-2 mb-8">
                {DINER_INFO.weeklyHours.map((item) => {
                  const isToday = item.dayIndex === currentDayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
                        isToday
                          ? "bg-red-50 border-2 border-[#DC2626] font-bold shadow-xs"
                          : "hover:bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-sm sm:text-base ${isToday ? "font-black text-[#DC2626]" : "font-semibold text-stone-800"}`}>
                          {item.day}
                        </span>
                        {isToday && (
                          <span className="text-[10px] font-black uppercase tracking-wider bg-[#DC2626] text-white px-2 py-0.5 rounded-md">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={`font-mono text-sm sm:text-base ${isToday ? "font-black text-[#DC2626]" : "font-medium text-stone-700"}`}>
                        {item.openTime} – {item.closeTime}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Car-Hop Ordering Instructions Callout */}
            <div className="bg-[#1C1917] text-white rounded-2xl p-5 border border-stone-800 shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-[#F59E0B] text-stone-950 rounded-xl shrink-0 mt-0.5">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-amber-300 uppercase tracking-wide mb-1">
                    Car-Hop Ordering Instructions
                  </h4>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    &ldquo;{DINER_INFO.carHopInstructions}&rdquo;
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-stone-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      16 Dedicated Stalls
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      Window Walk-Up Lane
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Map Frame / Mockup & Directions */}
          <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Address Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-red-100 text-[#DC2626] rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-stone-900 font-serif">
                      Find Our Drive-In
                    </h3>
                    <p className="text-sm font-semibold text-stone-600 mt-0.5">
                      {DINER_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stylized Interactive Map Mockup Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-300 bg-stone-100 h-64 sm:h-72 mb-6 group">
                {/* Visual Map Canvas Representation with Route 66 Graphic */}
                <div className="absolute inset-0 bg-stone-200 paper-grid">
                  {/* Road Grid lines representation */}
                  <div className="absolute top-1/2 left-0 right-0 h-12 bg-stone-800 -translate-y-1/2 flex items-center justify-around border-y-2 border-amber-400/80">
                    <div className="w-12 h-1 bg-amber-400" />
                    <div className="w-12 h-1 bg-amber-400" />
                    <div className="w-12 h-1 bg-amber-400" />
                    <div className="w-12 h-1 bg-amber-400" />
                    <div className="w-12 h-1 bg-amber-400" />
                  </div>

                  {/* Cross Street */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-10 bg-stone-400 -translate-x-1/2 border-x border-stone-500/40" />

                  {/* Diner Landmark Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                        <Car className="w-6 h-6" />
                      </div>
                      <span className="animate-ping absolute top-0 left-0 w-12 h-12 rounded-full bg-[#DC2626] opacity-30 -z-10" />
                    </div>

                    <div className="mt-2 bg-[#1C1917] text-white font-black text-xs px-3 py-1.5 rounded-lg border border-amber-400 shadow-md whitespace-nowrap">
                      Miller&apos;s Five Drive-In
                    </div>
                  </div>

                  {/* Route 66 Shield Tag */}
                  <div className="absolute top-4 left-4 bg-white border-2 border-stone-800 rounded-lg px-2.5 py-1 text-center shadow-sm">
                    <div className="text-[9px] font-black uppercase text-stone-500">HISTORIC</div>
                    <div className="text-xs font-black text-[#DC2626]">ROUTE 66</div>
                  </div>

                  {/* Stall Availability Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#1C1917]/90 text-stone-200 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-xs border border-stone-700 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    16 Stalls + Drive-Thru Window
                  </div>
                </div>

                {/* Hover overlay button to open maps */}
                <a
                  href={DINER_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-stone-900/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-black text-base z-20"
                >
                  <Compass className="w-5 h-5 text-amber-400" />
                  <span>Click to Open Live GPS Navigation</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Parking and Arrival Tips */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-6 text-sm text-stone-700 space-y-1.5">
                <div className="font-bold text-stone-900 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-[#DC2626]" />
                  Parking &amp; Arrival Directions:
                </div>
                <p className="text-xs sm:text-sm text-stone-600">
                  Easy turn-in directly from Route 66 Parkway. All stalls have overhead rain/sun canopies. Call ahead 10 minutes prior to arrival and your order will be fresh off the griddle the moment you pull in.
                </p>
              </div>
            </div>

            {/* Prominent Open in Maps Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={DINER_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target w-full sm:flex-1 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-sm sm:text-base rounded-xl flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-98"
              >
                <Navigation className="w-5 h-5 text-[#F59E0B]" />
                <span>Open in Maps</span>
                <ExternalLink className="w-4 h-4 text-stone-400" />
              </a>

              <a
                href={DINER_INFO.phoneTel}
                className="tap-target w-full sm:w-auto px-5 py-3.5 bg-red-50 hover:bg-red-100 border-2 border-[#DC2626] text-[#DC2626] font-black text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>Call Ahead</span>
              </a>
            </div>

          </div>

        </div>

        {/* Interactive 16 Car-Hop Stall Guide & Headlight Simulator */}
        <div className="bg-white rounded-3xl border-3 border-stone-900 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1C1917]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#B45309] bg-amber-100 px-3 py-1 rounded-full mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Interactive Stall Map
              </div>
              <h3 className="text-2xl font-black font-serif text-stone-950">
                16 Covered Car-Hop Stalls
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Pull into any open stall. Tap below to simulate headlight car-hop service!
              </p>
            </div>

            {selectedStall && (
              <div className="flex items-center gap-3 bg-stone-900 text-white px-4 py-2.5 rounded-2xl">
                <div className={`w-3 h-3 rounded-full ${headlightsOn ? "bg-amber-400 shadow-[0_0_8px_#F59E0B] animate-pulse" : "bg-stone-500"}`} />
                <div className="text-xs sm:text-sm">
                  <span className="font-mono font-bold text-amber-400">Stall #{selectedStall}</span>
                  <span className="text-stone-300 ml-1.5">• Headlights ON</span>
                </div>
                <a
                  href={DINER_INFO.phoneTel}
                  className="tap-target ml-2 px-3 py-1 bg-[#DC2626] text-white font-bold text-xs rounded-lg"
                >
                  Order to Stall #{selectedStall}
                </a>
              </div>
            )}
          </div>

          {/* 16 Stall Buttons Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 sm:gap-3 mb-6">
            {Array.from({ length: 16 }, (_, i) => i + 1).map((stallNum) => {
              const isSelected = selectedStall === stallNum;
              return (
                <button
                  key={stallNum}
                  type="button"
                  onClick={() => handleSelectStall(stallNum)}
                  className={`tap-target py-3 px-2 rounded-xl font-mono text-center flex flex-col items-center justify-center transition-all border-2 cursor-pointer ${
                    isSelected
                      ? "bg-[#1C1917] text-amber-400 border-amber-400 shadow-md scale-105"
                      : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200"
                  }`}
                >
                  <Car className={`w-4 h-4 mb-1 ${isSelected ? "text-amber-400 animate-bounce" : "text-stone-400"}`} />
                  <span className="text-xs font-black">Stall {stallNum}</span>
                </button>
              );
            })}
          </div>

          <div className="p-3.5 bg-amber-50/80 border border-amber-300 rounded-xl flex items-center justify-between text-xs sm:text-sm text-stone-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                All 16 stalls feature car-window tray service, call-ahead express pickup, and weather canopies.
              </span>
            </div>
            <span className="font-bold text-stone-900 hidden sm:inline">
              Est. 1958 Route 66
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
