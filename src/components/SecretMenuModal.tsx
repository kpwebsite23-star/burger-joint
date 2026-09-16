"use client";

import { useState } from "react";
import { Lock, Sparkles, X, Phone, Flame, Star } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

interface SecretItem {
  name: string;
  price: string;
  desc: string;
  tag: string;
}

const SECRET_ITEMS: SecretItem[] = [
  {
    name: "The Quadruple State Street Monster Smash",
    price: "$15.95",
    desc: "4 fresh Angus beef patties smashed super-thin with quadruple American cheese, triple secret sauce, and mountain of crispy grilled onions.",
    tag: "VIP Legendary Stack",
  },
  {
    name: "Loaded Animal-Style Crinkle Tots",
    price: "$6.95",
    desc: "Deep-fried golden tater tots smothered in melted double cheese, slow-caramelized grilled onions, and our signature tangy Drive-In secret sauce.",
    tag: "Fan Created",
  },
  {
    name: "Wild Blackberry Cobbler Malt",
    price: "$6.45",
    desc: "Rich vanilla ice cream hand-spun with whole wild Oregon blackberry puree, buttery graham cracker pie crust crumbles, and malt powder.",
    tag: "Seasonal Vault",
  },
  {
    name: "Crispy Nashville Hot Tender Slider Duo",
    price: "$8.95",
    desc: "Two mini potato buns stuffed with spicy cayenne dipped buttermilk tenders, sweet pickle slices, and creamy garlic ranch slaw.",
    tag: "Spicy Pick",
  },
];

export default function SecretMenuModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="tap-target px-5 py-2.5 rounded-2xl bg-[#1C1917] hover:bg-stone-800 text-amber-400 border-2 border-amber-400/80 font-black text-xs sm:text-sm inline-flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer"
        >
          <Lock className="w-4 h-4 text-amber-400" />
          <span>Unlock VIP Secret Menu Vault</span>
          <Sparkles className="w-4 h-4 text-amber-300" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#1C1917] text-white rounded-3xl border-4 border-amber-400 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F59E0B] bg-stone-900 px-3 py-1 rounded-full border border-amber-400/30 mb-2">
              <Star className="w-3.5 h-3.5 fill-current" />
              Off-Menu Secret Drops
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-serif text-white mb-2">
              The Miller&apos;s Secret Vault
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mb-6">
              Exclusive items only available by request. Order at the window or mention by name when you call!
            </p>

            <div className="space-y-3.5 mb-6 max-h-80 overflow-y-auto pr-1">
              {SECRET_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900 rounded-2xl p-4 border border-stone-800 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded mr-2">
                        {item.tag}
                      </span>
                      <h4 className="inline font-black text-white text-sm sm:text-base font-serif">
                        {item.name}
                      </h4>
                    </div>
                    <span className="font-mono font-black text-base text-[#F59E0B]">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-4">
              <span className="text-xs text-stone-400">
                Mention item name when ordering
              </span>
              <a
                href={DINER_INFO.phoneTel}
                className="tap-target px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call In Secret Order</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
