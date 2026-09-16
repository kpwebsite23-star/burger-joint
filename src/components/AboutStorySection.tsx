import { Star, Heart, Award, ShieldCheck, Quote, ExternalLink } from "lucide-react";
import { DINER_INFO } from "@/data/dinerInfo";

export default function AboutStorySection() {
  const testimonialsList = DINER_INFO.testimonials;

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#FFFDF9] border-b-4 border-stone-900 scroll-mt-24 relative">
      {/* 1950s Top Checkered Strip */}
      <div className="w-full h-2 checker-border opacity-70 mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
          
          {/* Left Column: 1950s Vintage Polaroid Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* 1950s Postcard Frame */}
              <div className="relative bg-white rounded-3xl border-4 border-stone-900 p-8 shadow-[8px_8px_0px_0px_#1C1917] rotate-[-1deg]">
                <div className="inline-flex items-center gap-2 bg-amber-200 text-[#78350F] border-2 border-stone-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_#1C1917]">
                  <Award className="w-4 h-4" />
                  Serving Augusta Since 1956
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-950 mb-3">
                  The Smashed Flat-Top Standard
                </h3>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  We never press frozen patties or cut corners with fillers. Fresh Angus chuck, seared hard against 450°F seasoned steel, creates that savory caramelization that fast-food chains can never duplicate.
                </p>

                {/* 1950s Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-stone-900">
                  {DINER_INFO.communityStory.stats.map((stat, idx) => (
                    <div key={idx} className="bg-amber-50 rounded-2xl p-3.5 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917]">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-[#DC2626]">
                        {stat.value}
                      </div>
                      <div className="text-xs font-black text-stone-800 uppercase mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 1950s Floating Heart Stamp */}
              <div className="absolute -top-4 -right-4 bg-[#DC2626] text-white p-3 sm:p-4 rounded-2xl border-3 border-stone-900 shadow-[4px_4px_0px_0px_#1C1917] rotate-12 hidden sm:block">
                <Heart className="w-6 h-6 fill-white" />
              </div>
            </div>
          </div>

          {/* Right Column: 1950s Heritage Story Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-red-100 text-[#DC2626] px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mb-4 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917]">
              <ShieldCheck className="w-4 h-4" />
              Augusta Community Heritage
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight text-stone-950 mb-6">
              Over 6 Decades of Augusta Drive-In Tradition
            </h2>

            <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed mb-6">
              {DINER_INFO.communityStory.p1}
            </p>

            <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed mb-8">
              {DINER_INFO.communityStory.p2}
            </p>

            {/* 1950s Core Values Pills */}
            <div className="flex flex-wrap gap-2.5">
              <span className="px-4 py-2 rounded-xl bg-amber-100 border-2 border-stone-900 text-stone-950 text-xs sm:text-sm font-black uppercase shadow-[2px_2px_0px_0px_#1C1917]">
                ★ 100% Midwestern Angus
              </span>
              <span className="px-4 py-2 rounded-xl bg-amber-100 border-2 border-stone-900 text-stone-950 text-xs sm:text-sm font-black uppercase shadow-[2px_2px_0px_0px_#1C1917]">
                ★ Crinkle Fries &amp; Real Dairy
              </span>
              <span className="px-4 py-2 rounded-xl bg-amber-100 border-2 border-stone-900 text-stone-950 text-xs sm:text-sm font-black uppercase shadow-[2px_2px_0px_0px_#1C1917]">
                ★ Carryout &amp; Picnic Dining
              </span>
              <span className="px-4 py-2 rounded-xl bg-amber-100 border-2 border-stone-900 text-stone-950 text-xs sm:text-sm font-black uppercase shadow-[2px_2px_0px_0px_#1C1917]">
                ★ Hand-Spun Thick Malts
              </span>
            </div>
          </div>

        </div>

        {/* 1950s Diner Comment Cards Testimonials */}
        <div className="pt-12 border-t-3 border-stone-900">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-1 text-[#F59E0B] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current text-[#F59E0B]" />
                ))}
              </div>
              <h3 className="text-2xl sm:text-4xl font-black font-serif text-stone-950">
                Loved by Generations of Augusta Locals
              </h3>
              <p className="text-stone-700 font-bold text-sm sm:text-base mt-1">
                Authentic community praise from lifelong Butler County regulars, neighbors, and day-trippers.
              </p>
            </div>

            <a
              href={DINER_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target px-5 py-3 rounded-2xl bg-white hover:bg-stone-50 border-3 border-stone-900 text-stone-900 font-black text-xs sm:text-sm uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_#1C1917] hover:shadow-[2px_2px_0px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all whitespace-nowrap cursor-pointer"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>Review Us on Google</span>
              <ExternalLink className="w-4 h-4 text-stone-500" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsList.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-3xl border-3 border-stone-900 p-6 sm:p-7 shadow-[5px_5px_0px_0px_#1C1917] hover:shadow-[3px_3px_0px_0px_#1C1917] transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-amber-300 shrink-0" />
                  </div>

                  <p className="text-stone-800 text-sm sm:text-base italic leading-relaxed mb-6 font-medium">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-stone-900">
                  <div className="font-black text-stone-950 text-base font-serif">
                    {test.author}
                  </div>
                  <div className="text-xs text-stone-600 mb-2 font-bold">
                    {test.location} • {test.date}
                  </div>
                  <div className="inline-block bg-amber-100 text-[#92400E] border border-stone-900 rounded-lg px-2.5 py-1 text-xs font-black uppercase">
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
