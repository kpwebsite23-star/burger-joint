"use client";

import { useState } from "react";
import { Star, Heart, Award, ShieldCheck, Quote, ThumbsUp } from "lucide-react";
import { DINER_INFO, Testimonial } from "@/data/dinerInfo";
import ReviewModal from "./ReviewModal";

export default function AboutStorySection() {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(DINER_INFO.testimonials);

  const handleAddReview = (newReview: {
    author: string;
    location: string;
    rating: number;
    quote: string;
    favoriteItem: string;
  }) => {
    const item: Testimonial = {
      id: `${Date.now()}`,
      author: newReview.author,
      location: newReview.location,
      rating: newReview.rating,
      quote: newReview.quote,
      favoriteItem: newReview.favoriteItem,
      date: "Verified Customer • Just now",
    };
    setTestimonialsList([item, ...testimonialsList]);
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#FAFAF9] border-b border-stone-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Visual Story Badge Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Main Card Frame */}
              <div className="relative bg-white rounded-3xl border-4 border-stone-900 p-8 shadow-[8px_8px_0px_0px_#1C1917]">
                <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#B45309] border border-[#F59E0B]/40 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4" />
                  Family Owned &amp; Operated
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-950 mb-3">
                  The Smashed Burger Standard
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  We never press frozen patties or cut corners with fillers. Fresh Angus chuck, seared hard against seasoned steel, creates that savory caramelization that fast-food chains can never duplicate.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-stone-100">
                  {DINER_INFO.communityStory.stats.map((stat, idx) => (
                    <div key={idx} className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-[#DC2626]">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-stone-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Vintage Stamp */}
              <div className="absolute -top-4 -right-4 bg-[#DC2626] text-white p-3 sm:p-4 rounded-2xl border-2 border-stone-900 shadow-md rotate-6 hidden sm:block">
                <Heart className="w-6 h-6 fill-white" />
              </div>
            </div>
          </div>

          {/* Right Column: Heritage & Craftsmanship Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-red-50 text-[#DC2626] px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-4 border border-red-200">
              <ShieldCheck className="w-4 h-4" />
              Rooted in Tradition
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-stone-950 mb-6">
              {DINER_INFO.communityStory.title}
            </h2>

            <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed mb-6">
              {DINER_INFO.communityStory.p1}
            </p>

            <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed mb-8">
              {DINER_INFO.communityStory.p2}
            </p>

            {/* Core Values Pills */}
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 text-xs sm:text-sm font-bold">
                ✓ 100% Midwestern Angus
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 text-xs sm:text-sm font-bold">
                ✓ Fresh Cut Fries &amp; Real Dairy
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 text-xs sm:text-sm font-bold">
                ✓ Friendly Car-Hop Window Service
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 text-xs sm:text-sm font-bold">
                ✓ Made Fresh When You Order
              </span>
            </div>
          </div>

        </div>

        {/* Social Proof: Authentic Testimonials Section */}
        <div className="pt-12 border-t-2 border-stone-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-1 text-[#F59E0B] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-950">
                Loved by Locals &amp; Highway Travelers Alike
              </h3>
              <p className="text-stone-600 text-sm sm:text-base mt-1">
                Over 2,400 verified reviews from drivers who know real smashed quality.
              </p>
            </div>

            <ReviewModal onAddReview={handleAddReview} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsList.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-stone-300 shrink-0" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-stone-700 text-sm sm:text-base italic leading-relaxed mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Favorite Dish Tag */}
                <div className="pt-4 border-t border-stone-100">
                  <div className="font-black text-stone-950 text-base">
                    {test.author}
                  </div>
                  <div className="text-xs text-stone-500 mb-2">
                    {test.location} • {test.date}
                  </div>
                  <div className="inline-block bg-amber-50 text-[#B45309] border border-amber-200/80 rounded-lg px-2.5 py-1 text-xs font-bold">
                    Favorite: {test.favoriteItem}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
