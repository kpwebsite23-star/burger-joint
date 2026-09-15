"use client";

import { useState } from "react";
import { Sparkles, Utensils, Layers, Coffee, Phone, Search, Star, Flame, Check, X, Plus, ShoppingBag, Award } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "@/data/menu";
import { DINER_INFO } from "@/data/dinerInfo";
import { useTray } from "@/context/TrayContext";
import SecretMenuModal from "./SecretMenuModal";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<"combos" | "burgers" | "sides" | "shakes">("combos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemForCustomizing, setSelectedItemForCustomizing] = useState<MenuItem | null>(null);
  const [extraAddons, setExtraAddons] = useState<string[]>([]);
  const { addItem } = useTray();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "combos":
        return <Sparkles className="w-4 h-4 sm:w-5 h-5" />;
      case "burgers":
        return <Utensils className="w-4 h-4 sm:w-5 h-5" />;
      case "sides":
        return <Layers className="w-4 h-4 sm:w-5 h-5" />;
      case "shakes":
        return <Coffee className="w-4 h-4 sm:w-5 h-5" />;
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  const currentCategoryData = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = searchQuery ? true : item.category === activeCategory;
    const matchesSearch = searchQuery
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const toggleAddon = (addon: string) => {
    if (extraAddons.includes(addon)) {
      setExtraAddons(extraAddons.filter((a) => a !== addon));
    } else {
      setExtraAddons([...extraAddons, addon]);
    }
  };

  const calculateCustomTotal = () => {
    if (!selectedItemForCustomizing) return 0;
    let total = selectedItemForCustomizing.rawPrice;
    if (extraAddons.includes("extra-patty")) total += 2.5;
    if (extraAddons.includes("bacon")) total += 1.5;
    if (extraAddons.includes("cheese-sauce")) total += 0.95;
    if (extraAddons.includes("malt-upgrade")) total += 1.25;
    return total;
  };

  const openCustomizer = (item: MenuItem) => {
    setSelectedItemForCustomizing(item);
    setExtraAddons([]);
  };

  const closeCustomizer = () => {
    setSelectedItemForCustomizing(null);
    setExtraAddons([]);
  };

  const handleAddCustomToTray = () => {
    if (!selectedItemForCustomizing) return;
    addItem(selectedItemForCustomizing, extraAddons);
    closeCustomizer();
  };

  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-[#FFFDF9] border-b-4 border-stone-900 scroll-mt-24 relative">
      {/* 1950s Diner Decorative Checker Strip */}
      <div className="w-full h-2 checker-border opacity-70 mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1950s Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-3 border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
            <Flame className="w-4 h-4 text-amber-300" />
            ★ 1950s Original Route 66 Diner Menu ★
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight text-stone-950">
            Miller&apos;s Five Drive-In Menu
          </h2>
          <p className="mt-3 text-stone-800 font-medium text-base sm:text-lg">
            Smashed paper-thin on our 1958 seasoned flat-top with lace-crispy edges, real American cheese, and rich malted ice cream spun to order.
          </p>
        </div>

        {/* Search & Filter Bar with 1950s Border */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, crinkle fries, malt shakes..."
              className="w-full pl-11 pr-4 py-3 bg-white border-3 border-stone-900 rounded-2xl text-stone-900 placeholder:text-stone-400 font-bold outline-none transition-all shadow-[4px_4px_0px_0px_#1C1917]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black uppercase text-stone-700 hover:text-stone-950 bg-amber-100 px-2.5 py-1 rounded-lg border border-stone-800 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 1950s Category Switcher Tabs */}
        {!searchQuery && (
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-3 mb-8">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`tap-target shrink-0 px-5 sm:px-6 py-3 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all duration-200 border-3 cursor-pointer ${
                    isActive
                      ? "bg-[#DC2626] text-white border-stone-900 shadow-[4px_4px_0px_0px_#1C1917] scale-102"
                      : "bg-white text-stone-900 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] hover:bg-amber-50"
                  }`}
                >
                  <span className={isActive ? "text-amber-300" : "text-[#DC2626]"}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Category Description Banner */}
        {!searchQuery && currentCategoryData && (
          <div className="bg-amber-50 border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] rounded-2xl p-4 mb-8 text-center max-w-2xl mx-auto">
            <p className="text-stone-900 text-sm font-bold">
              <span className="text-[#DC2626] uppercase font-black">✦ {currentCategoryData.shortLabel}:</span>{" "}
              {currentCategoryData.description}
            </p>
          </div>
        )}

        {/* 1950s Laminated Menu Item Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border-3 border-stone-900 p-6 shadow-[5px_5px_0px_0px_#1C1917] hover:shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner 1950s Diner Triangle Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-amber-400/30 -rotate-45 translate-x-4 -translate-y-4 pointer-events-none" />

              <div>
                {/* Header with Title, 1950s Ribbon Badge, and Price */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-black text-stone-950 font-serif group-hover:text-[#DC2626] transition-colors">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border-2 border-stone-900 bg-amber-100 text-stone-900 shadow-[1px_1px_0px_0px_#1C1917]">
                          ★ {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 1950s Exact Price Coin Box */}
                  <div className="text-right shrink-0">
                    <span className="text-2xl sm:text-3xl font-black text-[#DC2626] font-mono tracking-tight drop-shadow-[1px_1px_0px_#1C1917]">
                      {item.price}
                    </span>
                    {item.calories && (
                      <div className="text-[10px] font-bold uppercase text-stone-500">
                        {item.calories}
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-stone-700 font-normal leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Details / Bullets */}
                {item.details && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs text-stone-800 bg-amber-50/80 border border-amber-200/90 px-2 py-0.5 rounded-md font-bold"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Call to Order Action */}
              <div className="pt-3 border-t-2 border-dashed border-stone-200 flex items-center justify-between">
                <span className="text-xs font-black uppercase text-stone-500">
                  ⚡ Ready in ~8 min
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openCustomizer(item)}
                    aria-label={`Customize ${item.name}`}
                    className="tap-target px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl font-black text-xs uppercase flex items-center gap-1 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Customize</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => addItem(item)}
                    aria-label={`Add ${item.name} to Tray`}
                    className="tap-target px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl font-black text-xs uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1917] border-2 border-stone-900 active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Tray</span>
                  </button>

                  <a
                    href={DINER_INFO.phoneTel}
                    aria-label={`Order ${item.name}`}
                    className="tap-target px-3.5 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl font-black text-xs uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1917] border-2 border-stone-900 transition-all group/btn"
                  >
                    <Phone className="w-3.5 h-3.5 group-hover/btn:animate-bounce text-amber-300" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when searching */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border-3 border-dashed border-stone-400">
            <p className="text-stone-800 font-bold text-base mb-2">
              No menu items found matching &quot;{searchQuery}&quot;
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="tap-target px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-black uppercase cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* VIP Secret Menu Vault Toggle */}
        <SecretMenuModal />

        {/* Bottom 1950s Marquee Order Callout */}
        <div className="mt-12 bg-[#1C1917] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-amber-400 shadow-[8px_8px_0px_0px_#DC2626]">
          <div>
            <div className="inline-flex items-center gap-2 text-[#F59E0B] text-xs font-black uppercase tracking-widest mb-2">
              <Star className="w-4 h-4 fill-current" />
              1950s Car-Hop Tray Service &amp; Pickup Window
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-serif text-white">
              Special Customization or Secret Order?
            </h3>
            <p className="text-stone-300 text-sm sm:text-base mt-1 max-w-xl">
              Extra grilled onions, double malt powder, or crispy lace edges? We smash and spin every single item fresh to your exact liking.
            </p>
          </div>

          <a
            href={DINER_INFO.phoneTel}
            className="tap-target shrink-0 px-6 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-sm sm:text-base uppercase tracking-wider rounded-2xl flex items-center gap-2.5 shadow-[4px_4px_0px_0px_#1C1917] border-2 border-white active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5 text-amber-300" />
            <span>Call Car-Hop ({DINER_INFO.phoneDisplay})</span>
          </a>
        </div>

      </div>

      {/* Interactive Customization Modal */}
      {selectedItemForCustomizing && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl border-4 border-stone-900 max-w-lg w-full p-6 sm:p-8 shadow-[8px_8px_0px_0px_#DC2626] animate-in zoom-in-95 duration-150 relative">
            <div className="flex items-start justify-between pb-4 border-b-2 border-stone-900 mb-5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-[#DC2626] px-2.5 py-0.5 rounded-full border border-red-300">
                  ★ 1958 Car-Hop Customizer ★
                </span>
                <h3 className="text-2xl font-black font-serif text-stone-950 mt-1">
                  {selectedItemForCustomizing.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeCustomizer}
                aria-label="Close modal"
                className="p-2 rounded-xl text-stone-600 hover:text-stone-950 hover:bg-stone-200 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-stone-700 mb-6">
              {selectedItemForCustomizing.description}
            </p>

            {/* Customization Options */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-stone-600">
                1950s Diner Additions:
              </h4>

              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl border-2 border-stone-900 bg-white shadow-[2px_2px_0px_0px_#1C1917] cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={extraAddons.includes("extra-patty")}
                      onChange={() => toggleAddon("extra-patty")}
                      className="w-4 h-4 text-[#DC2626] rounded border-stone-400"
                    />
                    <span className="text-sm font-black text-stone-900">Add Extra Smashed Angus Patty</span>
                  </div>
                  <span className="text-xs font-mono font-black text-[#DC2626]">+$2.50</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border-2 border-stone-900 bg-white shadow-[2px_2px_0px_0px_#1C1917] cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={extraAddons.includes("bacon")}
                      onChange={() => toggleAddon("bacon")}
                      className="w-4 h-4 text-[#DC2626] rounded border-stone-400"
                    />
                    <span className="text-sm font-black text-stone-900">Thick-Cut Applewood Bacon</span>
                  </div>
                  <span className="text-xs font-mono font-black text-[#DC2626]">+$1.50</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border-2 border-stone-900 bg-white shadow-[2px_2px_0px_0px_#1C1917] cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={extraAddons.includes("cheese-sauce")}
                      onChange={() => toggleAddon("cheese-sauce")}
                      className="w-4 h-4 text-[#DC2626] rounded border-stone-400"
                    />
                    <span className="text-sm font-black text-stone-900">Warm Cheddar Cheese Dip</span>
                  </div>
                  <span className="text-xs font-mono font-black text-[#DC2626]">+$0.95</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border-2 border-stone-900 bg-white shadow-[2px_2px_0px_0px_#1C1917] cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={extraAddons.includes("malt-upgrade")}
                      onChange={() => toggleAddon("malt-upgrade")}
                      className="w-4 h-4 text-[#DC2626] rounded border-stone-400"
                    />
                    <span className="text-sm font-black text-stone-900">Double Real Malt Powder</span>
                  </div>
                  <span className="text-xs font-mono font-black text-[#DC2626]">+$1.25</span>
                </label>
              </div>
            </div>

            {/* Total & Action Buttons */}
            <div className="pt-4 border-t-2 border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-[10px] text-stone-500 font-black uppercase">Estimated Total</div>
                <div className="text-2xl font-black font-mono text-[#DC2626]">
                  ${calculateCustomTotal().toFixed(2)}
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleAddCustomToTray}
                  className="tap-target flex-1 sm:flex-none px-4 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs uppercase rounded-xl flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1917] border-2 border-stone-900 active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Tray</span>
                </button>

                <a
                  href={DINER_INFO.phoneTel}
                  className="tap-target flex-1 sm:flex-none px-4 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs uppercase rounded-xl flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#1C1917] border-2 border-stone-900 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call In</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
