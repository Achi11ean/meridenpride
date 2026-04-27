import React from "react";
import { motion } from "framer-motion";
import { FaRainbow, FaCalendarAlt, FaStar } from "react-icons/fa";
import CapitalEvents from "./CapitalEvents";

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-emerald-950 to-black text-white overflow-hidden">

      {/* ───────────────── HERO VIDEO BANNER ───────────────── */}
{/* ───────────────── HERO DYNAMIC BANNER ───────────────── */}
<section className="relative mt-14 md:mt-16 h-[360px] sm:h-[420px] md:h-[560px] w-full overflow-hidden">

  {/* MOBILE IMAGE */}
  <img
    src="/mobile.PNG"
    alt="Capital City Events"
    className="block md:hidden w-full h-full object-cover"
  />

  {/* DESKTOP VIDEO */}
  <video
    src="/Video.mov"
    autoPlay
    loop
    muted
    playsInline
    className="hidden md:block w-full h-full object-cover"
  />

  {/* DARK CINEMATIC OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-emerald-900/20" />

  {/* EMERALD GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_68%)]" />

  {/* HERO TEXT */}
  <div className="absolute inset-0 z-10 flex flex-col justify-end md:justify-center items-center text-center px-6 pb-10 md:pb-0">

    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/30 backdrop-blur px-5 py-2 text-xs sm:text-sm md:text-base text-emerald-200 shadow-xl mb-4 md:mb-5">
      <FaRainbow />
      Proud Community Partnership
    </div>

    <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)]">
      Capital City Events
    </h1>

    <p className="mt-4 md:mt-5 max-w-4xl text-sm sm:text-lg md:text-2xl text-white/85 font-medium leading-relaxed">
      In proud collaboration with <span className="text-yellow-400 font-bold">Karaoverse</span>,
      connecting LGBTQIA+ entertainment, safe spaces, nightlife, artists,
      and unforgettable experiences throughout Connecticut and beyond.
    </p>
  </div>
</section>

      {/* ───────────────── INTRO PARTNER CARD ───────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-14 mb-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-900/25 via-black to-green-900/20 p-8 md:p-12 shadow-2xl backdrop-blur-xl text-center">

          <div className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-3">
            Powered By Karaoverse
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-5">
            A Shared Mission of Visibility, Safety & Celebration
          </h2>

          <p className="text-white/75 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Through this partnership, Karaoverse helps amplify queer voices, showcase local talent,
            increase event visibility, and build stronger bridges between artists, venues,
            and the LGBTQIA+ community. Together we are creating a more connected entertainment ecosystem.
          </p>
        </div>
      </section>

      {/* ───────────────── EVENTS FEED ───────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">

        <div className="flex items-center justify-center gap-3 mb-10">
          <FaCalendarAlt className="text-emerald-400 text-2xl" />
          <h2 className="text-3xl md:text-5xl font-black">Upcoming Community Events</h2>
          <FaCalendarAlt className="text-emerald-400 text-2xl" />
        </div>

        <CapitalEvents />
      </section>

      {/* ───────────────── COMMUNITY CTA SECTION ───────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-1 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-black via-emerald-950/70 to-black p-2 md:p-14 shadow-2xl text-center">

          <FaStar className="mx-auto text-emerald-400 text-3xl mb-5 animate-pulse" />

          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent">
            Build Safe Spaces. Be Seen. Get Connected.
          </h2>

          <p className="max-w-4xl mx-auto text-lg md:text-2xl text-white/80 leading-relaxed">
            Karaoverse empowers LGBTQIA+ artists, nightlife hosts, queer-friendly venues,
            allies, and community organizations to create profiles, share events,
            showcase talents, and become discoverable across a growing entertainment universe.
          </p>

          <p className="max-w-4xl mx-auto mt-5 text-base md:text-xl text-white/65 leading-relaxed">
            From drag shows to karaoke nights, support groups to queer musicians —
            this platform exists to help people find belonging, opportunities,
            and unforgettable experiences in one centralized system.
          </p>

          <a
            href="https://karaoverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-9 px-10 py-1 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 text-white font-extrabold text-lg shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:scale-105 transition"
          >
            Visit Karaoverse →
          </a>

          <div className="mt-8 text-sm md:text-base text-yellow-400/85">
            Karaoverse was created and engineered by <span className="font-bold">Jonathen Whitford</span> of JWhit Productions.
          </div>
        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pb-20 flex flex-col items-center space-y-3"
      >
        <FaRainbow className="text-5xl text-emerald-400 animate-pulse" />
        <p className="text-sm text-white/70 italic">
          “Pride never sleeps — and neither does our community.”
        </p>
      </motion.div>
    </div>
  );
}