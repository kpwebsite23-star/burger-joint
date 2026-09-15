"use client";

import { Phone, ArrowDown, Navigation, Award, Milk, Car, Flame, CheckCircle2, Clock } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAFAF9] paper-grid pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200 overflow-hidden">
      {/* Subtle retro decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-100/40 via-red-50/20 to-transparent pointer-events-none rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Conversion Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Retro Badge Header Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-white border-2 border-stone-900 px-3.5 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#1C1917] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-stone-900">
                Route 66 Drive-In Diner Since 1958
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-stone-950 font-serif leading-[1.1] mb-6">
              Classic Smashed Burgers,{" "}
              <span className="text-[#DC2626] underline decoration-[#F59E0B] decoration-wavy decoration-2">
                Golden Crinkle-Cut Fries
              </span>{" "}
              &amp; Hand-Spun Shakes.
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-stone-700 font-medium leading-relaxed mb-8 max-w-2xl">
              Made fresh to order, served car-hop style or ready for quick pickup. Savor the authentic taste of thin-pressed Midwestern Angus beef seared with lace-crisp edges.
            </p>

            {/* Quick Action Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={DINER_INFO.phoneTel}
                className="tap-target px-7 py-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-base sm:text-lg tracking-wide flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#1C1917] hover:shadow-[2px_2px_0px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>Call to Order ({DINER_INFO.phoneDisplay})</span>
              </a>

              <a
                href="#menu"
                className="tap-target px-6 py-4 rounded-xl bg-white border-2 border-stone-900 hover:bg-stone-50 text-stone-900 font-black text-base flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1C1917] hover:shadow-[2px_2px_0px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <ArrowDown className="w-5 h-5 text-[#DC2626]" />
                Explore Digital Menu
              </a>

              <a
                href={DINER_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target px-5 py-4 rounded-xl bg-stone-100 hover:bg-stone-200 border-2 border-stone-300 hover:border-stone-400 text-stone-800 font-bold text-base flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-stone-600" />
                Get Directions
              </a>
            </div>

            {/* Trust/Value Badges: Row of 3 mini pills */}
            <div className="pt-6 border-t-2 border-stone-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-stone-200 shadow-xs">
                  <div className="p-2 bg-red-100 text-[#DC2626] rounded-lg">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-stone-900 text-sm">100% Fresh Beef</div>
                    <div className="text-xs text-stone-600">Never frozen, smashed hot</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-stone-200 shadow-xs">
                  <div className="p-2 bg-amber-100 text-[#D97706] rounded-lg">
                    <Milk className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-stone-900 text-sm">Hand-Spun Real Ice Cream</div>
                    <div className="text-xs text-stone-600">Pure dairy malt shakes</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-stone-200 shadow-xs">
                  <div className="p-2 bg-stone-100 text-stone-800 rounded-lg">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-stone-900 text-sm">Drive-In &amp; Dine-Out</div>
                    <div className="text-xs text-stone-600">16 stalls &amp; car-hop service</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Diner Ticket Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative bg-white rounded-3xl border-4 border-stone-900 shadow-[8px_8px_0px_0px_#1C1917] p-6 overflow-hidden">
                
                {/* Top Ticket Header */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-dashed border-stone-300 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                    <span className="font-mono text-xs font-black tracking-widest uppercase text-stone-600">
                      ORDER TICKET #058
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <Clock className="w-3 h-3" />
                    Grill Ready In 6-8 Min
                  </span>
                </div>

                {/* Featured Drive-In Signature Graphic / Visual Card */}
                <div className="relative rounded-2xl bg-gradient-to-br from-amber-500 via-red-600 to-amber-700 p-6 text-white text-center shadow-inner overflow-hidden mb-6">
                  {/* Decorative background stripes */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Retro Starburst Tag */}
                  <div className="inline-block bg-[#1C1917] text-[#F59E0B] font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-amber-400/40 mb-3 shadow-md">
                    ★ The #1 Classic Drive-In Special ★
                  </div>

                  <div className="text-4xl sm:text-5xl font-black font-serif tracking-tight drop-shadow-md mb-2">
                    Double Smash
                  </div>
                  <div className="text-xs uppercase font-black tracking-widest text-amber-100 mb-4">
                    With Crisp Crinkle Fries &amp; Chocolate Malt
                  </div>

                  {/* Price Tag Graphic */}
                  <div className="inline-flex items-baseline justify-center gap-1 bg-white text-stone-900 px-4 py-2 rounded-2xl border-2 border-stone-900 shadow-md">
                    <span className="text-sm font-bold text-stone-600">Combo</span>
                    <span className="text-3xl font-black text-[#DC2626]">$11.95</span>
                  </div>
                </div>

                {/* Live Car-Hop Guarantee Checklist */}
                <div className="space-y-2.5 mb-6 text-sm text-stone-800">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Smashed paper-thin on 450°F cast iron</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Buttered &amp; toasted potato bun</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Tray-to-window car-hop service</span>
                  </div>
                </div>

                {/* Call Prompt Bar */}
                <div className="bg-stone-50 rounded-xl p-3.5 border-2 border-dashed border-stone-300 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-xs font-bold text-stone-500 uppercase tracking-wide">
                      Drive-In Stalls &amp; Carryout
                    </div>
                    <div className="text-sm font-black text-stone-900">
                      Call Ahead: {DINER_INFO.phoneDisplay}
                    </div>
                  </div>
                  <a
                    href={DINER_INFO.phoneTel}
                    className="tap-target px-3.5 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                </div>

              </div>

              {/* Floating Retro Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#F59E0B] text-stone-950 font-black text-xs sm:text-sm px-4 py-2.5 rounded-2xl border-3 border-stone-900 shadow-[4px_4px_0px_0px_#1C1917] rotate-[-4deg] flex items-center gap-2">
                <Award className="w-4 h-4 text-stone-900" />
                <span>Voted Best Burger in Lincoln</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Decorative Checkered Bottom Divider */}
      <div className="w-full h-3 checker-border opacity-20 mt-12" />
    </section>
  );
}
