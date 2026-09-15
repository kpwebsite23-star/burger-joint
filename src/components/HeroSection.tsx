"use client";

import { Phone, ArrowDown, Navigation, Award, Milk, Car, Flame, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FFFDF9] paper-grid pt-8 pb-16 lg:pt-14 lg:pb-24 border-b-4 border-stone-900 overflow-hidden">
      {/* 1950s Retro Decorative Neon Backlight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-200/50 via-red-200/30 to-transparent pointer-events-none rounded-full blur-3xl -z-10" />

      {/* Top 1950s Red/Cream Checker Strip */}
      <div className="w-full h-2.5 diner-checker-red mb-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 1950s Roadside Marquee Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* 1950s Neon Billboard Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-white border-3 border-stone-900 px-4 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#1C1917] mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-ping" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-stone-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                Historic Route 66 Drive-In • Since 1958
              </span>
            </div>

            {/* Main Headline with 1950s Character */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-stone-950 font-serif leading-[1.08] mb-6">
              Classic Smashed Burgers,{" "}
              <span className="text-[#DC2626] underline decoration-[#F59E0B] decoration-wavy decoration-3 drop-shadow-[2px_2px_0px_#1C1917]">
                Golden Crinkle Fries
              </span>{" "}
              &amp; Hand-Spun Shakes.
            </h1>

            {/* Subhead with 50s Diner Lore */}
            <p className="text-lg sm:text-xl text-stone-800 font-medium leading-relaxed mb-8 max-w-2xl">
              Made fresh to order, served car-hop style or ready for quick pickup. Savor the authentic 1950s taste of thin-pressed Midwestern Angus beef seared with lace-crisp edges on a 450°F seasoned cast-iron flat top.
            </p>

            {/* Quick Action Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={DINER_INFO.phoneTel}
                className="tap-target px-7 py-4 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-base sm:text-lg tracking-wide uppercase flex items-center justify-center gap-3 shadow-[5px_5px_0px_0px_#1C1917] hover:shadow-[2px_2px_0px_0px_#1C1917] hover:translate-x-[3px] hover:translate-y-[3px] transition-all border-3 border-stone-900"
              >
                <Phone className="w-5 h-5 animate-bounce text-amber-300" />
                <span>Call Car-Hop ({DINER_INFO.phoneDisplay})</span>
              </a>

              <a
                href="#menu"
                className="tap-target px-6 py-4 rounded-2xl bg-white border-3 border-stone-900 hover:bg-stone-50 text-stone-950 font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-[5px_5px_0px_0px_#1C1917] hover:shadow-[2px_2px_0px_0px_#1C1917] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                <ArrowDown className="w-5 h-5 text-[#DC2626]" />
                Explore 1958 Menu
              </a>

              <a
                href={DINER_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target px-5 py-4 rounded-2xl bg-amber-100 hover:bg-amber-200 border-3 border-stone-900 text-stone-950 font-black text-base flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#1C1917] transition-all"
              >
                <Navigation className="w-4 h-4 text-[#DC2626]" />
                Directions
              </a>
            </div>

            {/* 1950s Value Badges */}
            <div className="pt-6 border-t-3 border-stone-900">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
                  <div className="p-2 bg-red-100 text-[#DC2626] rounded-xl border border-red-300">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-stone-950 text-sm">100% Fresh Beef</div>
                    <div className="text-xs text-stone-600">Never frozen, smashed hot</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
                  <div className="p-2 bg-amber-100 text-[#D97706] rounded-xl border border-amber-300">
                    <Milk className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-stone-950 text-sm">Hand-Spun Real Ice Cream</div>
                    <div className="text-xs text-stone-600">Vintage malt spindle shaken</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
                  <div className="p-2 bg-stone-100 text-stone-900 rounded-xl border border-stone-400">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-stone-950 text-sm">Drive-In &amp; Dine-Out</div>
                    <div className="text-xs text-stone-600">16 stalls &amp; car-hop trays</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 1950s Authentic "GUEST CHECK" Order Ticket Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Authentic 1950s Diner Guest Check Card */}
              <div className="relative guest-check-paper rounded-3xl border-4 border-stone-900 shadow-[8px_8px_0px_0px_#1C1917] p-6 overflow-hidden">
                
                {/* Perforated Top Receipt Edge */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-stone-400 mb-4">
                  <div>
                    <span className="font-mono text-xs font-black tracking-widest text-[#DC2626] uppercase block">
                      ★ GUEST CHECK #1958-058 ★
                    </span>
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      CAR-HOP STALL #7 • SERVER: BETTY
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
                    <Clock className="w-3.5 h-3.5" />
                    Grill Ready: 6-8 Min
                  </span>
                </div>

                {/* 1950s Order Showcase Banner */}
                <div className="relative rounded-2xl bg-gradient-to-br from-[#B91C1C] via-[#DC2626] to-[#991B1B] p-6 text-white text-center shadow-md border-3 border-stone-900 overflow-hidden mb-5">
                  <div className="inline-block bg-[#1C1917] text-[#F59E0B] font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-amber-400 mb-3 shadow-sm">
                    ★ THE 1958 ROUTE 66 FAVORITE ★
                  </div>

                  <div className="text-3xl sm:text-4xl font-black font-serif tracking-tight drop-shadow-[2px_2px_0px_#1C1917] mb-1">
                    Double Smash Combo
                  </div>
                  <div className="text-xs uppercase font-black tracking-wider text-amber-200 mb-4">
                    Two Lace-Crisp Patties + Crinkle Fries + Shake
                  </div>

                  <div className="inline-flex items-baseline justify-center gap-1.5 bg-[#FFFDF9] text-stone-950 px-5 py-2 rounded-2xl border-2 border-stone-900 shadow-md">
                    <span className="text-xs font-black uppercase text-stone-600">Drive-In Special</span>
                    <span className="text-3xl font-black text-[#DC2626] font-mono">$11.95</span>
                  </div>
                </div>

                {/* 1950s Guest Check Line Items */}
                <div className="space-y-2 mb-5 font-mono text-xs text-stone-800 bg-white/70 p-3.5 rounded-xl border border-stone-300">
                  <div className="flex justify-between border-b border-stone-200 pb-1">
                    <span>1x Dbl Smash Cheeseburger</span>
                    <span className="font-bold">$7.95</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-1">
                    <span>1x Crinkle-Cut Cheese Fries</span>
                    <span className="font-bold">$4.95</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-1">
                    <span>1x Hand-Spun Chocolate Malt</span>
                    <span className="font-bold">$5.45</span>
                  </div>
                  <div className="flex justify-between pt-1 font-black text-sm text-[#DC2626]">
                    <span>CAR-HOP TRAY TOTAL:</span>
                    <span>$18.35</span>
                  </div>
                </div>

                {/* 1950s Stamp Graphic */}
                <div className="bg-amber-100/90 rounded-2xl p-3 border-2 border-stone-900 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[10px] font-black text-stone-600 uppercase tracking-wide">
                      Drive-In Stalls &amp; Carryout
                    </div>
                    <div className="text-xs sm:text-sm font-black text-stone-950">
                      Call Ahead: {DINER_INFO.phoneDisplay}
                    </div>
                  </div>

                  <a
                    href={DINER_INFO.phoneTel}
                    className="tap-target px-4 py-1.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1917] border border-stone-900"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                </div>

              </div>

              {/* 1950s Floating Route 66 Shield Stamp */}
              <div className="absolute -bottom-4 -left-4 bg-[#F59E0B] text-stone-950 font-black text-xs sm:text-sm px-4 py-2.5 rounded-2xl border-3 border-stone-900 shadow-[4px_4px_0px_0px_#1C1917] rotate-[-5deg] flex items-center gap-2">
                <Award className="w-4 h-4 text-stone-950" />
                <span>★ Voted #1 Burger on Route 66 ★</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom 1950s Black & White Checkerboard Trim */}
      <div className="w-full h-3 checker-border opacity-90 mt-12" />
    </section>
  );
}
