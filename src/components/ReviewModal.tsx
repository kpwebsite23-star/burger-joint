"use client";

import { useState } from "react";
import { Star, MessageSquarePlus, X, CheckCircle, Heart } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu";

interface ReviewModalProps {
  onAddReview: (review: {
    author: string;
    location: string;
    rating: number;
    quote: string;
    favoriteItem: string;
  }) => void;
}

export default function ReviewModal({ onAddReview }: ReviewModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState("");
  const [favoriteItem, setFavoriteItem] = useState("Miller's Double Smash Cheeseburger");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    onAddReview({
      author: name.trim(),
      location: location.trim() || "Drive-In Customer",
      rating,
      quote: quote.trim(),
      favoriteItem,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsOpen(false);
      setName("");
      setLocation("");
      setQuote("");
    }, 1500);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="tap-target px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 border border-stone-300 transition-all cursor-pointer"
      >
        <MessageSquarePlus className="w-4 h-4 text-[#DC2626]" />
        <span>Leave a Drive-In Review</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl border-4 border-stone-900 max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center pb-2">
                  <div className="w-12 h-12 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <h3 className="text-xl font-black font-serif text-stone-950">
                    Share Your Car-Hop Experience
                  </h3>
                  <p className="text-xs text-stone-500">
                    Help fellow drivers discover your favorite smashed burgers &amp; malts!
                  </p>
                </div>

                {/* Rating Stars Picker */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Rating:
                  </label>
                  <div className="flex items-center gap-1.5 justify-center py-2 bg-stone-50 rounded-xl border border-stone-200">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 text-[#F59E0B] hover:scale-125 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`w-7 h-7 ${star <= rating ? "fill-current" : "stroke-current text-stone-300 fill-none"}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jordan Miller"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold text-stone-900 outline-none focus:border-[#DC2626]"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Hometown / Traveling From:
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lincoln Local or Route 66 Traveler"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold text-stone-900 outline-none focus:border-[#DC2626]"
                  />
                </div>

                {/* Favorite Item Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Favorite Item:
                  </label>
                  <select
                    value={favoriteItem}
                    onChange={(e) => setFavoriteItem(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-bold text-stone-900"
                  >
                    {MENU_ITEMS.slice(0, 10).map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Review Quote */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Review / Notes:
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="What did you love about the smashed burgers, fries, or car-hop service?"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm text-stone-900 outline-none focus:border-[#DC2626]"
                  />
                </div>

                <button
                  type="submit"
                  className="tap-target w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-sm rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Publish Review
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-black font-serif text-stone-950 mb-1">
                  Thank You For The Review!
                </h4>
                <p className="text-sm text-stone-600">
                  Your feedback has been added to our community board.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
