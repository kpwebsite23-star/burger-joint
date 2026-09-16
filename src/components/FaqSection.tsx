"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Sparkles } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does drive-in ordering and pickup work?",
    answer: "We offer drive-in parking, walk-up counter service, and fast phone carryout! You can pull into our State Street lot, order right at the window, or call ahead at (316) 775-9989 so your meal is ready the moment you arrive. You're also welcome to enjoy your meal at our outdoor picnic benches under the Kansas sun.",
  },
  {
    question: "Can I pay by credit card, Apple Pay, or cash?",
    answer: "Yes! We accept Apple Pay, Google Pay, all major credit/debit cards, and cash at our counter window.",
  },
  {
    question: "How quickly is my order prepared?",
    answer: "Every burger is smashed paper-thin on our seasoned 450°F griddle to order. Most orders are piping hot and ready within 6 to 8 minutes of ordering.",
  },
  {
    question: "Can I call ahead before arriving?",
    answer: `Absolutely! Call ${DINER_INFO.phoneDisplay} before leaving home. Give us your order and estimated arrival time and we'll have your food coming off the grill the moment you pull up to the carryout window.`,
  },
  {
    question: "Do you offer gluten-friendly or dietary accommodations?",
    answer: "Yes! Any smash burger can be served in a crisp romaine lettuce wrap upon request. We also offer grilled cheese, crispy sides, and fresh fruit lemonades.",
  },
  {
    question: "What makes your hand-spun malt shakes different?",
    answer: "We never use pre-mix soft serve. Our shakes are spun with whole milk, real rich Midwest dairy ice cream, and traditional malted barley powder on vintage spindle machines.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-[#B45309] px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            Good To Know
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-stone-950">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-stone-600 font-medium text-base">
            Everything you need to know about Miller&apos;s Drive In, carryout pickup, and our menu.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border-2 border-stone-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="tap-target w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  <span className="font-black text-stone-900 text-base sm:text-lg font-serif">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#DC2626]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 py-4 bg-white text-stone-700 text-sm sm:text-base leading-relaxed border-t border-stone-200 animate-in fade-in-50 duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions callout */}
        <div className="mt-10 p-5 bg-stone-50 rounded-2xl border border-stone-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-black text-stone-900 text-sm sm:text-base">
              Have a question not listed here?
            </div>
            <div className="text-xs text-stone-500">
              Give our team a quick call—we&apos;re happy to help!
            </div>
          </div>

          <a
            href={DINER_INFO.phoneTel}
            className="tap-target px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us ({DINER_INFO.phoneDisplay})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
