"use client";

import { useState } from "react";
import { Disc3, Music, Volume2, VolumeX, Sparkles, X, Play, Pause } from "lucide-react";

interface JukeboxTrack {
  id: string;
  title: string;
  artist: string;
  year: string;
  duration: string;
}

const TRACKS: JukeboxTrack[] = [
  { id: "1", title: "Rock Around the Clock", artist: "Bill Haley & His Comets", year: "1954", duration: "2:10" },
  { id: "2", title: "Johnny B. Goode", artist: "Chuck Berry", year: "1958", duration: "2:41" },
  { id: "3", title: "Route 66 Theme", artist: "Nelson Riddle Orchestra", year: "1958", duration: "2:08" },
  { id: "4", title: "Lollipop", artist: "The Chordettes", year: "1958", duration: "2:09" },
  { id: "5", title: "Drive-In Diner Chatter & Sizzle", artist: "Authentic 1958 Flat-Top Sound", year: "1958", duration: "Loop" },
];

export default function RetroJukebox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const togglePlay = (index?: number) => {
    if (index !== undefined) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const currentTrack = TRACKS[currentTrackIndex];

  return (
    <>
      {/* Floating 1950s Table Jukebox Mini-Widget Button */}
      <div className="fixed bottom-24 left-4 sm:bottom-6 sm:left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open 1950s Diner Jukebox"
          className={`tap-target px-4 py-2.5 rounded-2xl border-3 border-amber-400 bg-[#1C1917] text-white shadow-[4px_4px_0px_0px_#DC2626] hover:shadow-[2px_2px_0px_0px_#DC2626] transition-all flex items-center gap-3 cursor-pointer group ${
            isPlaying ? "neon-box-amber ring-2 ring-red-500" : ""
          }`}
        >
          <div className="relative">
            <Disc3
              className={`w-6 h-6 text-amber-400 ${isPlaying ? "animate-spin-vinyl text-red-400" : "group-hover:rotate-45 transition-transform"}`}
            />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            )}
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              1950s Table Jukebox
            </div>
            <div className="text-xs font-bold text-stone-200 truncate max-w-[140px]">
              {isPlaying ? currentTrack.title : "Drop a Dime • Play 50s Hits"}
            </div>
          </div>
        </button>
      </div>

      {/* 1950s Classic Jukebox Pop-up Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative w-full max-w-md bg-gradient-to-b from-[#7F1D1D] via-[#1C1917] to-[#1C1917] rounded-3xl border-4 border-amber-400 shadow-[8px_8px_0px_0px_#DC2626] p-6 text-white overflow-hidden animate-in zoom-in-95">
            {/* Top Chrome Arch */}
            <div className="absolute top-0 left-0 right-0 h-4 chrome-trim" />

            {/* Header with 50s Neon Sign Styling */}
            <div className="flex items-start justify-between pb-4 border-b-2 border-amber-400/40 mb-4 mt-2">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-400/20 text-amber-300 border border-amber-400/40 mb-1">
                  ★ WURLITZER 1958 SELECT-O-MATIC ★
                </div>
                <h3 className="text-2xl font-black font-serif text-white neon-glow-amber">
                  Diner Jukebox
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white border border-stone-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Rotating 45 RPM Vinyl Record Graphic */}
            <div className="bg-stone-900/90 rounded-2xl border-2 border-stone-700 p-4 mb-5 flex items-center gap-4">
              <div className="relative shrink-0">
                <div
                  className={`w-20 h-20 rounded-full bg-stone-950 border-4 border-stone-800 flex items-center justify-center shadow-inner ${
                    isPlaying ? "animate-spin-vinyl" : ""
                  }`}
                >
                  {/* Vinyl grooves */}
                  <div className="w-14 h-14 rounded-full border border-stone-700 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[8px] font-black font-mono border-2 border-amber-400">
                      45 RPM
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                  Now Selected ({currentTrack.year})
                </div>
                <div className="text-base font-black font-serif text-white truncate">
                  {currentTrack.title}
                </div>
                <div className="text-xs text-stone-400 truncate mb-2">
                  {currentTrack.artist}
                </div>

                <button
                  type="button"
                  onClick={() => togglePlay()}
                  className={`px-3.5 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 border-2 transition-all cursor-pointer ${
                    isPlaying
                      ? "bg-[#DC2626] border-red-400 text-white shadow-md shadow-red-600/40"
                      : "bg-amber-500 hover:bg-amber-400 border-amber-300 text-stone-950"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause Jukebox</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Drop Dime &amp; Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 1950s Jukebox Title Strips */}
            <div className="space-y-2 mb-4 max-h-52 overflow-y-auto pr-1">
              <div className="text-[11px] font-bold uppercase text-stone-400 tracking-wider mb-1">
                Select Your 1950s 45 RPM Track:
              </div>

              {TRACKS.map((track, idx) => {
                const isSelected = currentTrackIndex === idx;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => togglePlay(idx)}
                    className={`w-full text-left p-2.5 rounded-xl border-2 flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#DC2626]/40 border-amber-400 text-white shadow-xs"
                        : "bg-stone-900/60 hover:bg-stone-900 border-stone-800 text-stone-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-mono text-xs font-black text-amber-400 shrink-0">
                        {String.fromCharCode(65 + idx)}
                        {idx + 1}
                      </span>
                      <div className="truncate">
                        <div className="text-xs font-bold text-white truncate">
                          {track.title}
                        </div>
                        <div className="text-[10px] text-stone-400 truncate">
                          {track.artist}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono text-amber-300">
                        {track.duration}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Diner Disclaimer */}
            <div className="pt-3 border-t border-stone-800 text-center text-[11px] text-stone-400">
              🎵 Smashed burgers taste better with 1950s rock &amp; roll!
            </div>
          </div>
        </div>
      )}
    </>
  );
}
