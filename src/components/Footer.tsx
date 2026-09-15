import { UtensilsCrossed, Phone, Navigation, Clock, Heart, Shield, Sparkles } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-stone-200 border-t-4 border-amber-400 relative">
      {/* 1950s Checkerboard Header Ribbon */}
      <div className="w-full h-3 checker-border-white opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b-2 border-stone-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 flex flex-col items-center justify-center bg-white border-2 border-amber-400 rounded-lg p-1 w-10 h-11 shadow-[2px_2px_0px_0px_#DC2626]">
                <span className="text-[7px] font-black uppercase text-stone-600 tracking-tighter leading-none">US</span>
                <span className="text-base font-black font-serif text-[#DC2626] leading-none">66</span>
              </div>

              <div>
                <span className="font-black text-2xl sm:text-3xl font-serif text-white tracking-tight uppercase">
                  Miller&apos;s <span className="text-[#DC2626] drop-shadow-[1px_1px_0px_#F59E0B]">Five</span>
                </span>
                <span className="block text-xs font-black tracking-widest text-[#F59E0B] uppercase">
                  Route 66 Drive-In Diner • Est. 1958
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed max-w-sm font-medium">
              Sizzling lace-crisp smashed burgers, golden crinkle-cut fries, and whole milk hand-spun malts served car-hop style since 1958.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={DINER_INFO.phoneTel}
                className="tap-target px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs uppercase rounded-xl flex items-center gap-2 transition-all shadow-[2px_2px_0px_0px_#FFFFFF] border border-white"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call {DINER_INFO.phoneDisplay}</span>
              </a>
              <a
                href={DINER_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs uppercase rounded-xl flex items-center gap-2 border-2 border-amber-400 shadow-[2px_2px_0px_0px_#DC2626] transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-amber-400 font-mono">
              ✦ Diner Directory
            </h4>
            <ul className="space-y-2 text-sm font-bold">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>› 1958 Smashed Menu &amp; Malts</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>› Route 66 Diner Heritage</span>
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>› 16 Covered Car-Hop Stalls</span>
                </a>
              </li>
              <li>
                <a href="#vip" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>› Cruisers Club Secret Menu</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours Snapshot */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-amber-400 font-mono flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F59E0B]" />
              ✦ Flat-Top Hours
            </h4>
            <div className="bg-stone-900 rounded-2xl p-4 border-2 border-stone-800 space-y-1.5 text-xs shadow-inner">
              <div className="flex justify-between text-stone-300">
                <span className="font-bold">Mon – Thu:</span>
                <span className="font-mono font-black text-white">11:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span className="font-bold">Fri – Sat:</span>
                <span className="font-mono font-black text-[#F59E0B]">11:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span className="font-bold">Sunday:</span>
                <span className="font-mono font-black text-white">12:00 PM – 8:30 PM</span>
              </div>
              <div className="pt-2 mt-2 border-t border-stone-800 text-[11px] text-stone-400 font-bold">
                📍 {DINER_INFO.address}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="font-bold">
            &copy; {new Date().getFullYear()} {DINER_INFO.name}. Route 66 Car-Hop Tradition Since 1958.
          </p>

          <div className="flex items-center gap-2 bg-stone-900 px-3.5 py-1.5 rounded-full border border-amber-400/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-stone-300 font-medium">
              Website Designed &amp; Built by{" "}
              <span className="font-black text-white hover:text-[#F59E0B] transition-colors">
                KP Websites
              </span>
            </span>
          </div>
        </div>

      </div>

      {/* 1950s Bottom Checkered Trim */}
      <div className="w-full h-2 checker-border-white opacity-40" />
    </footer>
  );
}
