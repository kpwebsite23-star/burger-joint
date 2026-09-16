"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Navigation, Phone, Compass, ExternalLink, Sparkles, CheckCircle2, Utensils, ShoppingBag } from "lucide-react";
import { DINER_INFO, getDinerStatus } from "@/data/dinerInfo";

export default function LocationHoursSection() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(1);
  const [status, setStatus] = useState({
    isOpen: true,
    statusText: "Open Today until 7:30 PM",
  });

  useEffect(() => {
    const dinerStat = getDinerStatus();
    setCurrentDayIndex(dinerStat.currentDayIndex);
    setStatus({
      isOpen: dinerStat.isOpen,
      statusText: dinerStat.statusText,
    });
  }, []);

  return (
    <section id="location" className="py-16 sm:py-20 lg:py-24 bg-amber-50/40 border-b-4 border-stone-900 scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1950s Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-200 text-[#78350F] px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-3 border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
            <Utensils className="w-4 h-4" />
            ★ Augusta Drive-In &amp; Carryout Since 1956 ★
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight text-stone-950">
            Hours &amp; Location
          </h2>
          <p className="mt-3 text-stone-800 font-medium text-base sm:text-lg">
            Located at 330 State Street in Augusta, Kansas. Walk up to our counter window for fast carryout or enjoy lunch outside at our picnic benches!
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

            {/* Ordering Guide Card */}
            <div className="bg-[#1C1917] text-white rounded-2xl p-5 border-3 border-amber-400 shadow-[4px_4px_0px_0px_#DC2626]">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-amber-400 text-stone-950 rounded-xl shrink-0 mt-0.5 border border-stone-900">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-amber-300 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <span>★ Carryout &amp; Counter Dining ★</span>
                  </h4>
                  <p className="text-sm text-stone-200 leading-relaxed font-medium">
                    &ldquo;{DINER_INFO.orderingInstructions}&rdquo;
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-stone-300 font-bold">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Walk-Up Window
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      Outdoor Picnic Benches
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      Call-Ahead Pickup
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
                      330 State Street
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
                  {/* State Street Highway strip */}
                  <div className="absolute top-1/2 left-0 right-0 h-14 bg-stone-900 -translate-y-1/2 flex items-center justify-around border-y-3 border-amber-400">
                    <div className="w-10 h-1.5 bg-amber-400" />
                    <div className="w-10 h-1.5 bg-amber-400" />
                    <div className="w-10 h-1.5 bg-amber-400" />
                    <div className="w-10 h-1.5 bg-amber-400" />
                  </div>

                  {/* Diner Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                      <Utensils className="w-6 h-6 text-amber-300" />
                    </div>
                    <div className="mt-2 bg-[#1C1917] text-white font-black text-xs px-3.5 py-1 rounded-xl border-2 border-amber-400 shadow-md whitespace-nowrap">
                      Miller&apos;s Five Drive-In &amp; Carry-Out
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
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Parking & Pickup Directions */}
              <div className="bg-amber-100/60 border-2 border-stone-900 rounded-xl p-4 mb-6 text-sm text-stone-800 space-y-1 shadow-[2px_2px_0px_0px_#1C1917]">
                <div className="font-black text-stone-950 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-[#DC2626]" />
                  State Street Arrival &amp; Parking:
                </div>
                <p className="text-xs sm:text-sm text-stone-700 font-medium">
                  Located directly on State Street in Augusta, KS. Convenient parking right out front. Call ahead 10-15 minutes and your order will be bagged piping hot right off the grill!
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

        {/* Authentic Augusta Drive-In & Carryout Feature Highlights */}
        <div className="bg-[#FFFDF9] rounded-3xl border-4 border-stone-900 p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1C1917]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-stone-900 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#92400E] bg-amber-200 px-3 py-1 rounded-full border border-stone-900 mb-1.5 shadow-[2px_2px_0px_0px_#1C1917]">
                <Sparkles className="w-3.5 h-3.5" />
                How To Order At Miller&apos;s
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-950">
                Fresh Carryout &amp; Outdoor Picnic Dining
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 font-bold mt-0.5">
                Quick, friendly hometown service on State Street in Augusta.
              </p>
            </div>

            <a
              href={DINER_INFO.phoneTel}
              className="tap-target px-5 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-sm uppercase rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call ({DINER_INFO.phoneDisplay})</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-5 rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#DC2626] flex items-center justify-center font-black font-serif text-lg mb-3 border border-red-300">
                1
              </div>
              <h4 className="font-black text-stone-950 text-base font-serif mb-1">
                Walk Up to the Counter
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Park in front of our State Street location and walk right up to the window to place your fresh order.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center font-black font-serif text-lg mb-3 border border-amber-300">
                2
              </div>
              <h4 className="font-black text-stone-950 text-base font-serif mb-1">
                Call Ahead for Carryout
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Call 10 to 15 minutes before you arrive. We&apos;ll have your smashed burgers and shakes hot and ready for fast pickup.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center font-black font-serif text-lg mb-3 border border-stone-300">
                3
              </div>
              <h4 className="font-black text-stone-950 text-base font-serif mb-1">
                Picnic Bench Dining
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Take your food to-go, or sit down and eat at our outdoor picnic benches under the Kansas sky.
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-100 border-2 border-stone-900 rounded-2xl flex items-center justify-between text-xs sm:text-sm text-stone-900 font-bold shadow-[2px_2px_0px_0px_#1C1917]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                Freshly cooked to order, hot crinkle fries, and thick hand-spun malts.
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
