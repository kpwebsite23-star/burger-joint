"use client";

import { useState } from "react";
import { Gift, Mail, Phone, CheckCircle, Sparkles, AlertCircle, ArrowRight, Ticket } from "lucide-react";

export default function VipClubSection() {
  const [contactInput, setContactInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = contactInput.trim();

    if (!value) {
      setError("Please enter your email or phone number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      setError("Please provide a valid email address or 10-digit phone number.");
      return;
    }

    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="vip" className="py-16 sm:py-20 lg:py-24 bg-amber-50/50 border-b-4 border-stone-900 scroll-mt-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1950s Vintage Diner Ticket Card Container */}
        <div className="bg-[#FFFDF9] rounded-3xl border-4 border-stone-900 p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#DC2626] relative overflow-hidden">
          
          {/* 1950s Top Checkered Strip */}
          <div className="absolute top-0 left-0 right-0 h-2 checker-border opacity-75" />

          <div className="relative z-10 mt-2">
            {!submitted ? (
              <div>
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <div className="inline-flex items-center gap-2 bg-amber-200 text-[#78350F] border-2 border-stone-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_#1C1917]">
                    <Ticket className="w-4 h-4 text-[#DC2626]" />
                    ★ Route 66 Cruisers Club ★
                  </div>
                  
                  <h2 className="text-3xl sm:text-5xl font-black font-serif tracking-tight text-stone-950 mb-3">
                    Join the Miller&apos;s Five VIP Club
                  </h2>

                  <p className="text-stone-700 font-bold text-base sm:text-lg leading-relaxed">
                    Receive weekly secret menu drops, off-menu burger specials, and a free hand-spun malt on your birthday!
                  </p>
                </div>

                {/* Form Field */}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500">
                        {contactInput.includes("@") ? (
                          <Mail className="w-5 h-5" />
                        ) : (
                          <Phone className="w-5 h-5" />
                        )}
                      </div>
                      <input
                        type="text"
                        value={contactInput}
                        onChange={(e) => {
                          setContactInput(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="Enter email or mobile phone number"
                        className="tap-target w-full pl-12 pr-4 py-4 bg-white border-3 border-stone-900 focus:border-[#DC2626] rounded-2xl text-stone-950 placeholder:text-stone-400 font-black text-base outline-none transition-all shadow-[3px_3px_0px_0px_#1C1917]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="tap-target px-8 py-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-base uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1C1917] hover:shadow-[1px_1px_0px_0px_#1C1917] hover:translate-x-[3px] hover:translate-y-[3px] transition-all border-2 border-stone-900 disabled:opacity-75 cursor-pointer"
                    >
                      {isLoading ? (
                        <span>Joining...</span>
                      ) : (
                        <>
                          <span>Join Club</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {error && (
                    <div className="mt-3 flex items-center gap-2 text-sm font-black text-red-700 bg-red-100 p-3 rounded-xl border-2 border-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <p className="text-center text-xs text-stone-500 mt-4 font-bold">
                    ★ No spam ever — only secret flat-top specials and free birthday shakes! ★
                  </p>
                </form>

                {/* 1950s Punch-Card Style Perks */}
                <div className="mt-8 pt-8 border-t-2 border-dashed border-stone-300 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
                    <div className="font-black text-stone-950 text-sm uppercase">🎂 Free Birthday Malt</div>
                    <div className="text-xs text-stone-600 font-bold mt-1">Spun with real whole milk</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
                    <div className="font-black text-stone-950 text-sm uppercase">🔒 Secret 1958 Stacks</div>
                    <div className="text-xs text-stone-600 font-bold mt-1">Quadruple smash &amp; floats</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
                    <div className="font-black text-stone-950 text-sm uppercase">⚡ Flash Cruiser Drops</div>
                    <div className="text-xs text-stone-600 font-bold mt-1">VIP seasonal malt releases</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border-3 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917]">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-black font-serif text-stone-950 mb-2">
                  Welcome to the 1958 Cruisers Club!
                </h3>
                
                <p className="text-stone-700 font-bold text-base max-w-md mx-auto mb-6">
                  You are officially on our VIP driver list. Show this coupon code on your next visit to claim your treat:
                </p>

                {/* 1950s Movie Ticket Voucher Graphic */}
                <div className="max-w-sm mx-auto bg-amber-100 border-3 border-dashed border-stone-900 rounded-2xl p-5 shadow-[4px_4px_0px_0px_#1C1917] mb-6">
                  <div className="flex items-center justify-center gap-2 text-xs font-black uppercase text-[#92400E] mb-1">
                    <Sparkles className="w-4 h-4" />
                    ★ 1958 VINTAGE VOUCHER ★
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#DC2626] tracking-widest my-2">
                    FREE-SHAKE-1958
                  </div>
                  <p className="text-xs text-stone-700 font-bold">
                    Free regular hand-spun malt shake with any burger combo order. Valid for 30 days!
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setContactInput("");
                  }}
                  className="tap-target px-5 py-2 text-sm font-black text-stone-700 hover:text-stone-950 uppercase underline cursor-pointer"
                >
                  Register another cruiser
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
