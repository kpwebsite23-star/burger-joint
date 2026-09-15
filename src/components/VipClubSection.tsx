"use client";

import { useState } from "react";
import { Gift, Mail, Phone, CheckCircle, Sparkles, AlertCircle, ArrowRight } from "lucide-react";

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

    // Validation: simple email or 10-digit phone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      setError("Please provide a valid email address or 10-digit phone number.");
      return;
    }

    setError(null);
    setIsLoading(true);

    // Simulate instant client response
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="vip" className="py-16 sm:py-20 lg:py-24 bg-stone-100/60 border-b border-stone-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container with Warm Accent Border */}
        <div className="bg-white rounded-3xl border-3 border-[#F59E0B] p-6 sm:p-10 lg:p-12 shadow-[6px_6px_0px_0px_#1C1917] relative overflow-hidden">
          
          {/* Subtle decorative background pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            {!submitted ? (
              <div>
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <div className="inline-flex items-center gap-2 bg-amber-50 text-[#B45309] border border-amber-300 px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-4">
                    <Gift className="w-4 h-4 text-[#DC2626]" />
                    Exclusive Insider Perks
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-tight text-stone-950 mb-3">
                    Join the Miller&apos;s Five VIP Club
                  </h2>

                  <p className="text-stone-600 font-medium text-base sm:text-lg leading-relaxed">
                    Receive weekly secret menu specials, seasonal shake drops, and a free treat on your birthday.
                  </p>
                </div>

                {/* Form Field */}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
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
                        className="tap-target w-full pl-12 pr-4 py-3.5 bg-stone-50 border-2 border-stone-300 focus:border-[#DC2626] focus:bg-white rounded-2xl text-stone-900 placeholder:text-stone-400 font-semibold text-base outline-none transition-all shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="tap-target px-8 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-base rounded-2xl flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#1C1917] hover:shadow-[1px_1px_0px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-75 cursor-pointer"
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

                  {/* Error Notification */}
                  {error && (
                    <div className="mt-3 flex items-center gap-2 text-sm font-bold text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Privacy & Anti-Spam Disclaimer */}
                  <p className="text-center text-xs text-stone-600 mt-4 font-normal">
                    We respect your privacy. No spam ever—only fresh secret menu specials &amp; birthday gifts. Unsubscribe anytime.
                  </p>
                </form>

                {/* VIP Perks Row */}
                <div className="mt-8 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <div className="font-black text-stone-900 text-sm">🎂 Free Birthday Treat</div>
                    <div className="text-xs text-stone-600 mt-0.5">Complimentary hand-spun shake</div>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <div className="font-black text-stone-900 text-sm">🔒 Secret Menu Access</div>
                    <div className="text-xs text-stone-600 mt-0.5">Off-menu burger stacks &amp; floats</div>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <div className="font-black text-stone-900 text-sm">⚡ Priority Flash Drops</div>
                    <div className="text-xs text-stone-600 mt-0.5">First taste of seasonal malts</div>
                  </div>
                </div>
              </div>
            ) : (
              /* Success State Card */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300 shadow-md">
                  <CheckCircle className="w-9 h-9" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-950 mb-2">
                  Welcome to the Miller&apos;s Five VIP Club!
                </h3>
                
                <p className="text-stone-700 text-base max-w-md mx-auto mb-6">
                  You&apos;re officially on our insider list. Show this coupon code on your next visit to claim your welcome reward:
                </p>

                {/* VIP Welcome Reward Voucher */}
                <div className="max-w-sm mx-auto bg-amber-50 border-2 border-dashed border-[#F59E0B] rounded-2xl p-5 shadow-sm mb-6">
                  <div className="flex items-center justify-center gap-2 text-xs font-black uppercase text-[#B45309] mb-1">
                    <Sparkles className="w-4 h-4" />
                    Instant Welcome Voucher
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-[#DC2626] tracking-wider my-2">
                    FREE-SHAKE-VIP
                  </div>
                  <p className="text-xs text-stone-600 font-medium">
                    Free regular hand-spun malt shake with any burger combo order. Valid for 30 days!
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setContactInput("");
                  }}
                  className="tap-target px-5 py-2 text-sm font-bold text-stone-600 hover:text-stone-950 underline"
                >
                  Register another member
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
