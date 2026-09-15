import { UtensilsCrossed, Phone, Navigation, Clock, Heart, Shield, Sparkles } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-stone-300 border-t-4 border-[#DC2626]">
      {/* Decorative Checkered Header Bar */}
      <div className="w-full h-2 checker-border-white opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="bg-[#DC2626] text-white p-2 rounded-xl shadow-md">
                <UtensilsCrossed className="w-5 h-5" />
              </span>
              <div>
                <span className="font-black text-2xl font-serif text-white tracking-tight uppercase">
                  Miller&apos;s <span className="text-[#DC2626]">Five</span>
                </span>
                <span className="block text-xs font-black tracking-widest text-[#F59E0B] uppercase">
                  Route 66 Drive-In Diner
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Sizzling lace-crisp smashed burgers, thick crinkle fries, and whole milk hand-spun malts served car-hop style since 1958.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={DINER_INFO.phoneTel}
                className="tap-target px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs rounded-xl flex items-center gap-2 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {DINER_INFO.phoneDisplay}</span>
              </a>
              <a
                href={DINER_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs rounded-xl flex items-center gap-2 border border-stone-700 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#menu" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span>› Digital Menu &amp; Specials</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span>› About Our Heritage</span>
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span>› Hours &amp; 16 Car-Hop Stalls</span>
                </a>
              </li>
              <li>
                <a href="#vip" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span>› VIP Club &amp; Secret Menu</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Snapshot */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F59E0B]" />
              Operating Hours
            </h4>
            <div className="bg-stone-900/90 rounded-2xl p-4 border border-stone-800 space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-300">
                <span>Mon – Thu:</span>
                <span className="font-mono font-bold text-white">11:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Fri – Sat:</span>
                <span className="font-mono font-bold text-[#F59E0B]">11:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Sunday:</span>
                <span className="font-mono font-bold text-white">12:00 PM – 8:30 PM</span>
              </div>
              <div className="pt-2 mt-2 border-t border-stone-800 text-[11px] text-stone-400">
                📍 {DINER_INFO.address}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Agency Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} {DINER_INFO.name}. All rights reserved. Classic Car-Hop Dining.
          </p>

          <div className="flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded-full border border-stone-800">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-stone-300">
              Website Designed &amp; Built by{" "}
              <span className="font-bold text-white hover:text-[#F59E0B] transition-colors">
                KP Websites
              </span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
