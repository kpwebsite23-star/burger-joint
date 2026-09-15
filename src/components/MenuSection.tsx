"use client";

import { useState } from "react";
import { Sparkles, Utensils, Layers, Coffee, Phone, Search, Star, Flame, Check } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "@/data/menu";
import { DINER_INFO } from "@/data/dinerInfo";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<"combos" | "burgers" | "sides" | "shakes">("combos");
  const [searchQuery, setSearchQuery] = useState("");
  const [orderedItemNotice, setOrderedItemNotice] = useState<string | null>(null);

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

  const handleOrderPrompt = (itemName: string) => {
    setOrderedItemNotice(`Ready to order ${itemName}! Dialing ${DINER_INFO.phoneDisplay}...`);
    setTimeout(() => {
      window.location.href = DINER_INFO.phoneTel;
    }, 400);
  };

  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-[#FAFAF9] border-b border-stone-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-[#DC2626] px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-3">
            <Flame className="w-4 h-4" />
            Freshly Smashed &amp; Spun Daily
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-stone-950">
            Our Digital Drive-In Menu
          </h2>
          <p className="mt-3 text-stone-600 font-medium text-base sm:text-lg">
            Every burger is made with 100% fresh Midwest Angus beef, hand-pressed hot on the griddle with lace-crispy edges, and served alongside pure real ice cream malts.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, crinkle fries, malt shakes..."
              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-stone-300 focus:border-stone-900 rounded-xl text-stone-900 placeholder:text-stone-400 font-medium outline-none transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500 hover:text-stone-900 bg-stone-100 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Switcher Tabs */}
        {!searchQuery && (
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-3 mb-8">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`tap-target shrink-0 px-4 sm:px-6 py-3 rounded-2xl font-black text-sm sm:text-base flex items-center gap-2.5 transition-all duration-200 border-2 cursor-pointer ${
                    isActive
                      ? "bg-[#DC2626] text-white border-[#1C1917] shadow-[3px_3px_0px_0px_#1C1917] scale-102"
                      : "bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50"
                  }`}
                >
                  <span className={isActive ? "text-white" : "text-[#DC2626]"}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Category Subtitle Description */}
        {!searchQuery && currentCategoryData && (
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 mb-8 text-center max-w-2xl mx-auto">
            <p className="text-stone-700 text-sm font-medium">
              <span className="font-bold text-stone-900">{currentCategoryData.shortLabel}:</span>{" "}
              {currentCategoryData.description}
            </p>
          </div>
        )}

        {/* Notice Banner when user clicks order */}
        {orderedItemNotice && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 font-bold rounded-xl text-center text-sm animate-pulse">
            {orderedItemNotice}
          </div>
        )}

        {/* Menu Item Card Grid: 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border-2 border-stone-200 hover:border-stone-900 p-5 sm:p-6 transition-all duration-200 shadow-xs hover:shadow-[4px_4px_0px_0px_#1C1917] flex flex-col justify-between group"
            >
              <div>
                {/* Header with Title, Badge, and Price */}
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-black text-stone-950 font-serif group-hover:text-[#DC2626] transition-colors">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span
                          className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                            item.badge === "Best Seller"
                              ? "bg-red-50 text-[#DC2626] border-red-200"
                              : item.badge === "Customer Favorite"
                              ? "bg-amber-50 text-[#B45309] border-amber-200"
                              : item.badge === "Car-Hop Classic"
                              ? "bg-stone-100 text-stone-800 border-stone-300"
                              : "bg-emerald-50 text-emerald-800 border-emerald-200"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Exact Price */}
                  <div className="text-right shrink-0">
                    <span className="text-xl sm:text-2xl font-black text-[#DC2626] font-mono tracking-tight">
                      {item.price}
                    </span>
                    {item.calories && (
                      <div className="text-[11px] font-medium text-stone-600">
                        {item.calories}
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Details / Bullets */}
                {item.details && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md font-medium"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Call to Order Action */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-600">
                  Ready in ~8 min
                </span>
                <button
                  type="button"
                  onClick={() => handleOrderPrompt(item.name)}
                  aria-label={`Order ${item.name}`}
                  className="tap-target px-4 py-2 bg-stone-100 hover:bg-[#DC2626] text-stone-800 hover:text-white rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all group/btn"
                >
                  <Phone className="w-3.5 h-3.5 group-hover/btn:animate-bounce" />
                  <span>Call to Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when searching */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-stone-300">
            <p className="text-stone-600 font-bold text-base mb-2">
              No menu items found matching &quot;{searchQuery}&quot;
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="tap-target px-4 py-2 bg-stone-900 text-white rounded-xl text-sm font-bold"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Bottom Menu Order Prompt Box */}
        <div className="mt-12 bg-[#1C1917] rounded-3xl p-6 sm:p-8 text-stone-100 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-stone-800 shadow-lg">
          <div>
            <div className="inline-flex items-center gap-2 text-[#F59E0B] text-xs font-black uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-current" />
              Car-Hop Service or Window Carryout
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-serif text-white">
              Have a special customization or dietary request?
            </h3>
            <p className="text-stone-300 text-sm sm:text-base mt-1 max-w-xl">
              Extra grilled onions, gluten-free lettuce wraps, or double malt? We prepare every single order fresh to your exact liking.
            </p>
          </div>

          <a
            href={DINER_INFO.phoneTel}
            className="tap-target shrink-0 px-6 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-base rounded-xl flex items-center gap-2.5 shadow-md active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Call to Order ({DINER_INFO.phoneDisplay})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
