"use client";

import { useTray } from "@/context/TrayContext";
import { Utensils, X, Plus, Minus, Trash2, Phone, ShoppingBag, Car, Check, Sparkles } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

export default function CarHopTray() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearTray,
    totalItemsCount,
    subtotal,
    isTrayOpen,
    setIsTrayOpen,
    selectedStall,
    setSelectedStall,
  } = useTray();

  if (totalItemsCount === 0 && !isTrayOpen) {
    return null;
  }

  const generatedScript = items
    .map((item) => `${item.quantity}x ${item.menuItem.name}${item.customizations && item.customizations.length > 0 ? ` (+${item.customizations.join(", ")})` : ""}`)
    .join(", ");

  return (
    <>
      {/* Floating Tray Button (Visible when tray has items) */}
      {totalItemsCount > 0 && !isTrayOpen && (
        <aside
          aria-label="Floating Car-Hop Tray Order Summary"
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 animate-in bounce-in"
        >
          <button
            type="button"
            onClick={() => setIsTrayOpen(true)}
            aria-label="Open Car-Hop Tray"
            className="tap-target px-5 py-3.5 bg-[#1C1917] hover:bg-stone-800 text-white rounded-2xl border-2 border-amber-400 shadow-[4px_4px_0px_0px_#DC2626] flex items-center gap-3 active:scale-95 transition-all cursor-pointer group"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#F59E0B] group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-[#DC2626] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1C1917]">
                {totalItemsCount}
              </span>
            </div>
            <div className="text-left">
              <div className="text-xs font-black uppercase text-amber-300">Car-Hop Tray</div>
              <div className="text-sm font-black font-mono text-white">${subtotal.toFixed(2)}</div>
            </div>
          </button>
        </aside>
      )}

      {/* Slide-out Tray Drawer Modal */}
      {isTrayOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex justify-end animate-in fade-in">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0"
            onClick={() => setIsTrayOpen(false)}
          />

          {/* Drawer Container */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l-4 border-stone-900 z-10 animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="p-5 border-b-2 border-stone-200 bg-stone-50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-red-100 text-[#DC2626] rounded-xl">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black font-serif text-stone-950">
                    Your Car-Hop Tray
                  </h3>
                  <p className="text-xs text-stone-500">
                    {totalItemsCount} {totalItemsCount === 1 ? "item" : "items"} selected
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsTrayOpen(false)}
                className="p-2 rounded-xl text-stone-500 hover:text-stone-950 hover:bg-stone-200 border border-stone-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16 text-stone-500">
                  <Utensils className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                  <p className="font-bold text-base text-stone-700">Your tray is empty</p>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Explore our menu and add smashed burgers, crinkle fries, or hand-spun malts!
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsTrayOpen(false)}
                    className="tap-target mt-4 px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold"
                  >
                    View Menu
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <h4 className="font-black text-stone-900 text-sm sm:text-base">
                          {item.menuItem.name}
                        </h4>
                        <span className="font-mono font-black text-sm text-[#DC2626]">
                          ${item.totalPrice.toFixed(2)}
                        </span>
                      </div>

                      {item.customizations && item.customizations.length > 0 && (
                        <div className="mt-1 flex flex-wrap gap-1">
                          {item.customizations.map((c, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-bold bg-amber-100 text-[#B45309] px-2 py-0.5 rounded"
                            >
                              +{c.replace("-", " ")}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-stone-100 text-stone-700 cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 font-mono font-black text-xs text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-stone-100 text-stone-700 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-stone-400 hover:text-red-600 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Tray Footer & Calling Helper */}
            {items.length > 0 && (
              <div className="p-5 border-t-2 border-stone-200 bg-stone-50 space-y-4">
                {/* Stall Picker */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#DC2626]" />
                    Delivery Destination:
                  </label>
                  <select
                    value={selectedStall}
                    onChange={(e) => setSelectedStall(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-sm font-bold text-stone-900"
                  >
                    <option value="Carryout Pickup Window">Carryout Pickup Window</option>
                    {Array.from({ length: 16 }, (_, i) => `Car-Hop Stall #${i + 1}`).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Subtotal Calculation */}
                <div className="bg-white p-3.5 rounded-xl border border-stone-200 space-y-1.5">
                  <div className="flex justify-between text-xs text-stone-600">
                    <span>Tray Subtotal:</span>
                    <span className="font-mono font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-600">
                    <span>Est. Tax (~8.25%):</span>
                    <span className="font-mono font-bold">${(subtotal * 0.0825).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-stone-950 pt-1.5 border-t border-stone-100">
                    <span>Estimated Total:</span>
                    <span className="font-mono text-base text-[#DC2626]">
                      ${(subtotal * 1.0825).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Order Script preview for the car-hop */}
                <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-3 text-xs text-stone-800">
                  <span className="font-black text-[#B45309] block mb-1">
                    Ready to recite to our car-hop:
                  </span>
                  <p className="italic text-stone-700 font-medium line-clamp-2">
                    &ldquo;Hi! I&apos;m at {selectedStall}, I&apos;d like to order: {generatedScript}&rdquo;
                  </p>
                </div>

                {/* Call To Order Primary Button */}
                <a
                  href={DINER_INFO.phoneTel}
                  className="tap-target w-full px-5 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-sm sm:text-base rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/30 active:scale-98 transition-all"
                >
                  <Phone className="w-5 h-5 animate-bounce" />
                  <span>Call In Order ({DINER_INFO.phoneDisplay})</span>
                </a>

                <div className="flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={clearTray}
                    className="text-stone-500 hover:text-stone-900 underline"
                  >
                    Clear Tray
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsTrayOpen(false)}
                    className="text-stone-700 font-bold"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
