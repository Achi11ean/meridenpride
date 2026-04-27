import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaUsers,
  FaFacebook,
  FaEnvelope,
  FaGem,
} from "react-icons/fa";

export default function HomePage4() {
    const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#12051f] via-[#140a2b] to-[#041a24] text-white overflow-hidden">

      {/* ───────────────── HERO ───────────────── */}
    <section className="relative min-h-[950px] md:min-h-screen flex items-center overflow-hidden px-3 sm:px-0">

  {/* RAINBOW COSMIC BASE */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff4fd8_0%,transparent_28%),radial-gradient(circle_at_top_right,#4de7ff_0%,transparent_30%),radial-gradient(circle_at_bottom_left,#ffe14d_0%,transparent_28%),radial-gradient(circle_at_bottom_right,#9d4dff_0%,transparent_30%),linear-gradient(135deg,#2b0838,#111827,#042c30)]" />

  {/* MASSIVE COLOR FOG */}
  <div className="absolute -top-24 left-[5%] w-[520px] h-[520px] bg-pink-400/30 rounded-full blur-[150px]" />
  <div className="absolute top-[12%] right-[2%] w-[560px] h-[560px] bg-cyan-300/28 rounded-full blur-[170px]" />
  <div className="absolute bottom-0 left-[28%] w-[500px] h-[500px] bg-yellow-200/18 rounded-full blur-[150px]" />
  <div className="absolute bottom-[8%] right-[20%] w-[460px] h-[460px] bg-purple-400/24 rounded-full blur-[150px]" />

  {/* PRISM LIGHT FILM */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-200/8 via-cyan-300/8 to-purple-500/10" />

  {/* GLASS GRID */}
  <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:55px_55px]" />

  {/* FLOATING LIGHT ORBS */}
  <div className="absolute top-24 left-[12%] w-3 h-3 bg-pink-200 rounded-full animate-pulse" />
  <div className="absolute top-44 right-[16%] w-4 h-4 bg-cyan-200 rounded-full animate-ping" />
  <div className="absolute bottom-24 left-[24%] w-3 h-3 bg-yellow-100 rounded-full animate-pulse" />
  <div className="absolute bottom-36 right-[28%] w-4 h-4 bg-purple-200 rounded-full animate-ping" />

  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="text-center lg:text-left">

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-pink-200/20 shadow-2xl text-pink-100 font-black uppercase tracking-[0.25em] text-xs sm:text-sm"
        >
          <FaGem />
          Pride Center Template 4
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65 }}
          className="mt-7 text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9]"
        >
          Pride,
          <span className="block bg-gradient-to-r from-pink-200 via-yellow-100 via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Reimagined.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.65 }}
          className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-2xl text-white/85 font-semibold leading-relaxed"
        >
          A dazzling futuristic homepage infused with color, warmth,
          queer visibility, and elevated digital magic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.65 }}
          className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0"
        >
          <Link to="/events" className="rounded-2xl px-5 py-4 bg-pink-400/20 backdrop-blur-xl border border-pink-200/20 text-pink-100 font-black hover:bg-pink-400/30 transition flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(236,72,153,0.15)]">
            <FaCalendarAlt /> Events
          </Link>

          <Link to="/volunteer" className="rounded-2xl px-5 py-4 bg-cyan-300/20 backdrop-blur-xl border border-cyan-200/20 text-cyan-100 font-black hover:bg-cyan-300/30 transition flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(34,211,238,0.15)]">
            <FaHandHoldingHeart /> Volunteer
          </Link>

          <Link to="/resources" className="rounded-2xl px-5 py-4 bg-purple-300/20 backdrop-blur-xl border border-purple-200/20 text-purple-100 font-black hover:bg-purple-300/30 transition flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(168,85,247,0.15)]">
            <FaUsers /> Resources
          </Link>
        </motion.div>
      </div>

      {/* RIGHT PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.7 }}
        className="rounded-[2rem] bg-white/14 backdrop-blur-2xl border border-white/15 p-5 sm:p-8 shadow-[0_25px_100px_rgba(0,0,0,0.35)]"
      >
        <div className="rounded-[1.6rem] p-[3px] bg-gradient-to-r from-pink-300 via-yellow-200 via-cyan-300 to-purple-300">
          <img
            src="https://img.freepik.com/premium-vector/label-banner-logo-template-black_760861-102.jpg"
            alt="Template Pride"
            className="w-full rounded-[1.5rem]"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-pink-400/10 border border-pink-200/15 p-5">
            <div className="text-pink-100 text-sm uppercase font-black tracking-[0.2em]">Advocacy</div>
            <div className="mt-2 text-2xl font-black">Visible Voices</div>
          </div>

          <div className="rounded-2xl bg-cyan-300/10 border border-cyan-200/15 p-5">
            <div className="text-cyan-100 text-sm uppercase font-black tracking-[0.2em]">Support</div>
            <div className="mt-2 text-2xl font-black">Safe Spaces</div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

    {/* ───────────────── RAINBOW CRYSTAL IMPACT ───────────────── */}
{/* ───────────────── PRIDE CELEBRATION MOSAIC ───────────────── */}
{/* ───────────────── THE PRIDE JOURNEY ───────────────── */}
<section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 overflow-hidden">

  {/* BACKGROUND AURAS */}
  <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-400/15 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-300/15 rounded-full blur-[140px]" />

  {/* HEADER */}
  <div className="text-center mb-20">
    <div className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-cyan-100 font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
      The Pride Journey
    </div>

    <h2 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
      Every Step Forward
      <span className="block bg-gradient-to-r from-pink-200 via-cyan-200 to-yellow-100 bg-clip-text text-transparent">
        Builds Belonging.
      </span>
    </h2>
  </div>

  {/* CENTER CURVE LINE */}
  <div className="relative">

    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[10px] h-full rounded-full bg-gradient-to-b from-pink-300 via-yellow-200 via-cyan-300 to-purple-300 opacity-70 blur-[1px]" />
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[24px] h-full rounded-full bg-white/5 blur-md" />

    <div className="space-y-20 sm:space-y-24 relative z-10">

      {/* ITEM 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="lg:text-right">
          <div className="inline-block rounded-[2rem] bg-pink-400/12 border border-pink-200/15 backdrop-blur-2xl p-8 shadow-[0_20px_90px_rgba(236,72,153,0.18)]">
            <div className="text-pink-100 uppercase tracking-[0.25em] text-xs font-black">Celebrate</div>
            <h3 className="mt-3 text-3xl sm:text-5xl font-black">Major Pride Events</h3>
            <p className="mt-4 text-white/75 font-semibold leading-relaxed">
              Festivals, fundraisers, performances and highly visible moments of community joy.
            </p>
          </div>
        </div>
        <div />
      </div>

      {/* ITEM 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div />
        <div>
          <div className="inline-block rounded-[2rem] bg-cyan-300/12 border border-cyan-200/15 backdrop-blur-2xl p-8 shadow-[0_20px_90px_rgba(34,211,238,0.18)]">
            <div className="text-cyan-100 uppercase tracking-[0.25em] text-xs font-black">Support</div>
            <h3 className="mt-3 text-3xl sm:text-5xl font-black">Safe Access Resources</h3>
            <p className="mt-4 text-white/75 font-semibold leading-relaxed">
              Year-round affirming providers, referrals, crisis help and wellness pathways.
            </p>
          </div>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="lg:text-right">
          <div className="inline-block rounded-[2rem] bg-yellow-200/12 border border-yellow-100/15 backdrop-blur-2xl p-8 shadow-[0_20px_90px_rgba(250,204,21,0.15)]">
            <div className="text-yellow-100 uppercase tracking-[0.25em] text-xs font-black">Grow</div>
            <h3 className="mt-3 text-3xl sm:text-5xl font-black">Youth & Family Programs</h3>
            <p className="mt-4 text-white/75 font-semibold leading-relaxed">
              Confidence building, mentorship, education and stronger family inclusion.
            </p>
          </div>
        </div>
        <div />
      </div>

      {/* ITEM 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div />
        <div>
          <div className="inline-block rounded-[2rem] bg-purple-300/12 border border-purple-200/15 backdrop-blur-2xl p-8 shadow-[0_20px_90px_rgba(168,85,247,0.18)]">
            <div className="text-purple-100 uppercase tracking-[0.25em] text-xs font-black">Sustain</div>
            <h3 className="mt-3 text-3xl sm:text-5xl font-black">Volunteer Driven Care</h3>
            <p className="mt-4 text-white/75 font-semibold leading-relaxed">
              Outreach teams, helping hands, committees and people powering change together.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL CENTER IMPACT */}
      <div className="text-center pt-10">
        <div className="inline-block rounded-[2.5rem] bg-white/8 border border-white/10 backdrop-blur-2xl px-10 py-10 shadow-[0_20px_100px_rgba(255,255,255,0.08)]">
          <div className="text-6xl sm:text-8xl font-black bg-gradient-to-r from-pink-200 via-yellow-100 via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            500+
          </div>
          <div className="mt-3 text-2xl sm:text-4xl font-black">Lives Reached In Community</div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ───────────────── STAGGERED PROGRAM PRISM SHOWCASE ───────────────── */}
{/* ───────────────── RADIANT PRIDE CONSTELLATION ───────────────── */}
<section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 overflow-hidden">

  {/* MASSIVE COLOR ATMOSPHERE */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_65%)]" />
  <div className="absolute top-24 left-[18%] w-56 sm:w-72 h-56 sm:h-72 bg-pink-400/16 rounded-full blur-[130px]" />
  <div className="absolute top-32 right-[18%] w-56 sm:w-72 h-56 sm:h-72 bg-cyan-300/16 rounded-full blur-[130px]" />
  <div className="absolute bottom-10 left-[35%] w-56 sm:w-72 h-56 sm:h-72 bg-yellow-200/14 rounded-full blur-[130px]" />

  {/* HEADER */}
  <div className="text-center mb-14 sm:mb-20 relative z-10">
    <div className="inline-block px-5 sm:px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-pink-100 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs shadow-2xl">
      Programs In Orbit
    </div>

    <h2 className="mt-5 sm:mt-6 text-3xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
      Every Initiative
      <span className="block bg-gradient-to-r from-pink-200 via-cyan-200 to-yellow-100 bg-clip-text text-transparent">
        Radiates Outward.
      </span>
    </h2>
  </div>

  {/* MOBILE + DESKTOP WRAPPER */}
  <div className="relative md:h-[820px] max-w-6xl mx-auto flex flex-col items-center gap-6 md:block">

    {/* CENTER SUN */}
    <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[370px] md:h-[370px] rounded-full bg-gradient-to-br from-pink-300/30 via-yellow-200/20 via-cyan-300/20 to-purple-300/20 border border-white/15 backdrop-blur-3xl shadow-[0_0_120px_rgba(255,255,255,0.12)] flex flex-col items-center justify-center text-center p-6 sm:p-8">
      <div className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/70 font-black">
        Pride Center Core
      </div>
      <div className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-black">Community Light</div>
      <p className="mt-3 sm:mt-4 text-white/70 font-semibold text-xs sm:text-sm max-w-[220px] sm:max-w-[260px]">
        Every program begins here and expands outward into real lives.
      </p>
    </div>

    {/* NODE 1 */}
    <div className="relative md:absolute md:top-8 md:left-[6%] z-10 w-full md:w-[250px] rounded-[2rem] bg-pink-400/14 border border-pink-200/15 backdrop-blur-2xl p-6 shadow-[0_20px_90px_rgba(236,72,153,0.18)]">
      <div className="text-pink-100 uppercase tracking-[0.25em] text-xs font-black">Visibility</div>
      <h3 className="mt-3 text-2xl font-black">Advocacy Campaigns</h3>
      <p className="mt-3 text-white/75 font-semibold">Awareness, civic presence and stronger public queer representation.</p>
    </div>

    {/* NODE 2 */}
    <div className="relative md:absolute md:top-12 md:right-[7%] z-10 w-full md:w-[250px] rounded-[2rem] bg-cyan-300/14 border border-cyan-200/15 backdrop-blur-2xl p-6 shadow-[0_20px_90px_rgba(34,211,238,0.18)]">
      <div className="text-cyan-100 uppercase tracking-[0.25em] text-xs font-black">Support</div>
      <h3 className="mt-3 text-2xl font-black">Affirming Access</h3>
      <p className="mt-3 text-white/75 font-semibold">Resources, providers, wellness pathways and family guidance.</p>
    </div>

    {/* NODE 3 */}
    <div className="relative md:absolute md:left-[2%] md:top-[42%] z-10 w-full md:w-[230px] rounded-[2rem] bg-yellow-200/14 border border-yellow-100/15 backdrop-blur-2xl p-6 shadow-[0_20px_90px_rgba(250,204,21,0.16)]">
      <div className="text-yellow-100 uppercase tracking-[0.25em] text-xs font-black">Events</div>
      <h3 className="mt-3 text-2xl font-black">Signature Gatherings</h3>
    </div>

    {/* NODE 4 */}
    <div className="relative md:absolute md:right-[2%] md:top-[42%] z-10 w-full md:w-[230px] rounded-[2rem] bg-purple-300/14 border border-purple-200/15 backdrop-blur-2xl p-6 shadow-[0_20px_90px_rgba(168,85,247,0.18)]">
      <div className="text-purple-100 uppercase tracking-[0.25em] text-xs font-black">Volunteer</div>
      <h3 className="mt-3 text-2xl font-black">Community Force</h3>
    </div>

    {/* NODE 5 */}
    <div className="relative md:absolute md:bottom-10 md:left-[14%] z-10 w-full md:w-[260px] rounded-[2rem] bg-white/10 border border-white/10 backdrop-blur-2xl p-6 shadow-[0_20px_90px_rgba(255,255,255,0.10)]">
      <div className="text-pink-100 uppercase tracking-[0.25em] text-xs font-black">Education</div>
      <h3 className="mt-3 text-2xl font-black">Youth & Family Growth</h3>
      <p className="mt-3 text-white/75 font-semibold">Mentorship, inclusion and confidence-building opportunities.</p>
    </div>

    {/* NODE 6 */}
    <div className="relative md:absolute md:bottom-8 md:right-[14%] z-10 w-full md:w-[260px] rounded-[2rem] bg-white/10 border border-white/10 backdrop-blur-2xl p-6 shadow-[0_20px_90px_rgba(255,255,255,0.10)]">
      <div className="text-cyan-100 uppercase tracking-[0.25em] text-xs font-black">Partnership</div>
      <h3 className="mt-3 text-2xl font-black">Sponsors & Donors</h3>
      <p className="mt-3 text-white/75 font-semibold">Meaningful relationships helping sustain and grow impact.</p>
    </div>

  </div>
</section>
<footer className="relative mt-12 overflow-hidden border-t border-white/10">

  {/* COSMIC RAINBOW BACKDROP */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff5bc6_0%,transparent_28%),radial-gradient(circle_at_top_right,#52e8ff_0%,transparent_28%),radial-gradient(circle_at_bottom_left,#ffe76a_0%,transparent_24%),radial-gradient(circle_at_bottom_right,#a855f7_0%,transparent_28%),linear-gradient(145deg,#12051f,#140a2b,#041a24)]" />
  <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:55px_55px]" />

  <div className="absolute top-10 left-[8%] w-72 h-72 bg-pink-400/20 rounded-full blur-[140px]" />
  <div className="absolute top-20 right-[8%] w-72 h-72 bg-cyan-300/20 rounded-full blur-[140px]" />
  <div className="absolute bottom-10 left-[35%] w-72 h-72 bg-yellow-200/12 rounded-full blur-[140px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">

    {/* MASSIVE CENTER INTRO */}
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-pink-100 font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
        Pride Without Limits
      </div>

      <h2 className="mt-7 text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
        Celebrating Community,
        <span className="block bg-gradient-to-r from-pink-200 via-yellow-100 via-cyan-200 to-purple-200 bg-clip-text text-transparent">
          Every Day Of The Year.
        </span>
      </h2>

      <p className="mt-6 text-white/80 text-lg sm:text-2xl font-semibold leading-relaxed">
        Visibility. Wellness. Advocacy. Volunteerism. Education. Joy.
        A living center built to keep LGBTQIA+ connection glowing all year long.
      </p>
    </div>

    {/* FLOATING NAV PILLS */}
    <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-5">
      <Link to="/about" className="px-6 py-4 rounded-2xl bg-pink-400/15 border border-pink-200/15 backdrop-blur-xl text-pink-100 font-black hover:scale-105 transition">About</Link>
      <Link to="/services" className="px-6 py-4 rounded-2xl bg-yellow-200/12 border border-yellow-100/15 backdrop-blur-xl text-yellow-100 font-black hover:scale-105 transition">Services</Link>
      <Link to="/events" className="px-6 py-4 rounded-2xl bg-cyan-300/15 border border-cyan-200/15 backdrop-blur-xl text-cyan-100 font-black hover:scale-105 transition">Events</Link>
      <Link to="/volunteer" className="px-6 py-4 rounded-2xl bg-purple-300/15 border border-purple-200/15 backdrop-blur-xl text-purple-100 font-black hover:scale-105 transition">Volunteer</Link>
      <Link to="/resources" className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white font-black hover:scale-105 transition">Resources</Link>
      <Link to="/contact" className="px-6 py-4 rounded-2xl bg-pink-400/15 border border-pink-200/15 backdrop-blur-xl text-pink-100 font-black hover:scale-105 transition">Contact</Link>
    </div>

    {/* CONTACT CAPSULES */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="rounded-[2rem] bg-white/8 border border-white/10 backdrop-blur-2xl p-7 text-center shadow-2xl">
        <div className="text-pink-100 uppercase tracking-[0.25em] text-xs font-black">Email</div>
        <div className="mt-3 text-lg sm:text-xl font-black">templatepride@gmail.com</div>
      </div>

      <div className="rounded-[2rem] bg-white/8 border border-white/10 backdrop-blur-2xl p-7 text-center shadow-2xl">
        <div className="text-cyan-100 uppercase tracking-[0.25em] text-xs font-black">Call</div>
        <div className="mt-3 text-lg sm:text-xl font-black">(999) 999-9999</div>
      </div>

      <div className="rounded-[2rem] bg-white/8 border border-white/10 backdrop-blur-2xl p-7 text-center shadow-2xl">
        <div className="text-yellow-100 uppercase tracking-[0.25em] text-xs font-black">Welcome</div>
        <div className="mt-3 text-lg sm:text-xl font-black">Everyone Belongs Here 🌈</div>
      </div>
    </div>

    {/* SOCIAL GLOW */}
    <div className="mt-12 flex justify-center gap-5">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-pink-400/20 border border-pink-200/15 text-pink-100 flex items-center justify-center backdrop-blur-xl shadow-2xl hover:scale-110 transition"
      >
        <FaFacebook className="text-2xl" />
      </a>

      <a
        href="mailto:templatepride@gmail.com"
        className="w-14 h-14 rounded-full bg-cyan-300/20 border border-cyan-200/15 text-cyan-100 flex items-center justify-center backdrop-blur-xl shadow-2xl hover:scale-110 transition"
      >
        <FaEnvelope className="text-2xl" />
      </a>
    </div>

    {/* BOTTOM BAR */}
    <div className="mt-16 pt-8 border-t border-white/10 text-center">
      <div className="text-sm text-white/50 font-bold">
        © {year} Template LGBTQIA+ Pride Center — All Rights Reserved.
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="px-7 py-4 rounded-2xl bg-pink-400/20 border border-pink-200/15 backdrop-blur-xl text-pink-100 font-black hover:scale-105 transition"
        >
          ← Template 1
        </Link>

        <Link
          to="/home-page-2"
          className="px-7 py-4 rounded-2xl bg-cyan-300/20 border border-cyan-200/15 backdrop-blur-xl text-cyan-100 font-black hover:scale-105 transition"
        >
          Template 2
        </Link>
        <Link
            to="/home-page-3"
            className="px-7 py-4 rounded-2xl bg-yellow-200/12 border border-yellow-100/15 backdrop-blur-xl text-yellow-100 font-black hover:scale-105 transition"
            >
            Template 3
            </Link>
            <Link
            to="/home-page-4"
            className="px-7 py-4 rounded-2xl bg-purple-300/20 border border-purple-200/15 backdrop-blur-xl text-purple-100 font-black hover:scale-105 transition"
            >
            Template 4
            </Link>
      </div>
    </div>

  </div>
</footer>
    </div>
  );
}