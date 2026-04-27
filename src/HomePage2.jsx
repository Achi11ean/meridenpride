import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaHandHoldingHeart, FaUsers } from "react-icons/fa";

export default function HomePage2() {
      const year = new Date().getFullYear();

  return (
<div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-cyan-50 text-gray-900 overflow-hidden">
      {/* ───────────────── HERO SECTION ───────────────── */}
<section className="relative min-h-[780px] sm:min-h-[860px] md:min-h-[92vh] w-full flex items-center justify-center overflow-hidden px-3 sm:px-0">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center md:scale-110 scale-125"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/1184572/pexels-photo-1184572.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      backgroundPosition: "center center",
    }}
  />

  {/* SOFT WHITE LIGHT */}
  <div className="absolute inset-0 bg-white/35" />

  {/* RAINBOW EDGE COLOR WASH */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-yellow-200/8 to-cyan-300/20" />

  {/* MOBILE/DESKTOP RADIAL GLOWS */}
  <div className="absolute top-0 left-0 w-[55%] md:w-[40%] h-[35%] md:h-[40%] bg-pink-300/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[50%] md:w-[35%] h-[30%] md:h-[35%] bg-cyan-300/20 blur-[120px] rounded-full" />

  {/* CENTER READABILITY PANEL */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.82),rgba(255,255,255,0.48),transparent_72%)]" />

  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

    {/* FLOATING BADGE */}

    {/* LOGO CARD */}
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/90 backdrop-blur-xl mt-16 lg:mt-32 p-3 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] inline-block"
    >
      <img
        src="https://img.freepik.com/premium-vector/label-banner-logo-template-black_760861-102.jpg"
        alt="Template Pride"
        className="w-full max-w-[280px] sm:max-w-md md:max-w-xl mx-auto rounded-xl"
      />
    </motion.div>

    {/* HEADLINE */}
    <motion.h1
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.7 }}
      className="mt-8 sm:mt-10 text-3xl sm:text-5xl md:text-7xl font-black leading-[1.05] text-gray-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]"
    >
      Celebrating Pride.
      <br />
      Creating Belonging.
    </motion.h1>

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="mt-5 sm:mt-6 max-w-3xl mx-auto text-base sm:text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed px-2 sm:px-0"
    >
      A vibrant LGBTQIA+ community center built for advocacy, support,
      events, volunteerism, wellness, education, and year-round joy.
    </motion.p>

    {/* CTA BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7 }}
      className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
    >
      <Link
        to="/events"
        className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 font-bold text-white rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.35)] hover:scale-105 transition"
      >
        Explore Events
      </Link>

      <Link
        to="/volunteer"
        className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 font-bold text-white rounded-full shadow-[0_10px_30px_rgba(34,211,238,0.35)] hover:scale-105 transition"
      >
        Get Involved
      </Link>
    </motion.div>
<motion.div
  initial={{ opacity: 0, y: -18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mt-4 inline-block mb-5 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-white/90 backdrop-blur border border-pink-200 shadow-xl text-[11px] sm:text-sm md:text-base font-bold tracking-wide text-pink-600"
>
  🌈 Inclusive • Affirming • Community Driven
</motion.div>

  </div>
  
</section>
        

{/* ───────────────── ACTION HUB ───────────────── */}
<section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 mt-14 mb-24">

  {/* SECTION INTRO */}
  <div className="text-center mb-10">
    <div className="text-sm sm:text-base uppercase tracking-[0.3em] text-pink-500 font-bold mb-3">
      Jump Into Community
    </div>
    <h2 className="text-3xl sm:text-5xl font-black text-gray-900">
      Explore, Connect & Participate
    </h2>
    <p className="mt-4 max-w-3xl mx-auto text-gray-600 font-semibold text-base sm:text-lg">
      Whether you're looking for celebration, support, or ways to give back —
      there’s a place for you here.
    </p>
  </div>

  {/* CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

    {/* EVENTS */}
    <Link
      to="/events"
      className="group p-8 sm:p-10 bg-gradient-to-br from-pink-50 via-white to-purple-50 border border-pink-100 rounded-[2rem] shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(236,72,153,0.18)] transition text-center"
    >
      <div className="mx-auto mb-5 w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
        <FaCalendarAlt className="text-3xl text-white" />
      </div>

      <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
        Upcoming Events
      </h3>

      <p className="mt-4 text-gray-600 font-semibold leading-relaxed">
        Pride festivals, socials, support meetups, educational workshops,
        fundraisers, and community celebrations.
      </p>
    </Link>

    {/* VOLUNTEER */}
    <Link
      to="/volunteer"
      className="group p-8 sm:p-10 bg-gradient-to-br from-yellow-50 via-white to-pink-50 border border-yellow-100 rounded-[2rem] shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(250,204,21,0.18)] transition text-center"
    >
      <div className="mx-auto mb-5 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
        <FaHandHoldingHeart className="text-3xl text-white" />
      </div>

      <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
        Volunteer & Help
      </h3>

      <p className="mt-4 text-gray-600 font-semibold leading-relaxed">
        Join committees, support events, contribute your skills,
        and help us build stronger spaces for everyone.
      </p>
    </Link>

    {/* RESOURCES */}
    <Link
      to="/resources"
      className="group p-8 sm:p-10 bg-gradient-to-br from-cyan-50 via-white to-teal-50 border border-cyan-100 rounded-[2rem] shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(34,211,238,0.18)] transition text-center"
    >
      <div className="mx-auto mb-5 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
        <FaUsers className="text-3xl text-white" />
      </div>

      <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
        Find Resources
      </h3>

      <p className="mt-4 text-gray-600 font-semibold leading-relaxed">
        Safe spaces, affirming providers, crisis support,
        educational tools, and local LGBTQIA+ connections.
      </p>
    </Link>

  </div>
</section>

{/* ───────────────── WHO WE SERVE SECTION ───────────────── */}
<section className="max-w-7xl mx-auto px-6 mb-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    <div
      className="min-h-[420px] rounded-[2rem] bg-cover bg-center shadow-2xl"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1184572/pexels-photo-1184572.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}
    />

    <div>
      <div className="text-pink-400 uppercase tracking-[0.3em] text-sm mb-3 font-bold">
        Programs • Advocacy • Belonging
      </div>

      <h2 className="text-4xl md:text-6xl font-black leading-tight">
        More Than A Celebration —
        <br />
        A Year-Round Community Home
      </h2>

      <p className="mt-6 text-lg text-white/75 leading-relaxed font-medium">
        Pride centers thrive when they become a daily point of connection — not just an annual festival.
        This includes youth support, affirming wellness resources, peer groups, educational workshops,
        social mixers, outreach, family services, and opportunities for every identity to feel represented.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 text-sm font-bold">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">Youth & Family Support</div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">Peer Social Programs</div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">Health & Wellness</div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">Education & Advocacy</div>
      </div>
    </div>
  </div>
</section>

{/* ───────────────── COMMUNITY IMPACT STRIP ───────────────── */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-28">

  <div className="rounded-[2.2rem] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-cyan-50 p-8 sm:p-12 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-center overflow-hidden relative">

    {/* subtle decorative glows */}
    <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200/30 blur-[80px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-200/30 blur-[80px] rounded-full" />

    <div className="relative z-10">
      <div className="text-sm sm:text-base uppercase tracking-[0.3em] text-pink-500 font-bold mb-3">
        Community Impact
      </div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
        You Belong Here.
      </h2>

      <p className="max-w-4xl mx-auto mt-6 text-base sm:text-xl text-gray-600 leading-relaxed font-semibold">
        Every event attended, every volunteer hour donated, every support resource shared,
        and every sponsorship contributed creates something bigger:
        a safer, stronger, more visible LGBTQIA+ future for the next generation.
      </p>

      {/* IMPACT STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 mt-12">

        <div className="bg-white/90 rounded-3xl p-6 shadow-xl border border-pink-100">
          <div className="text-4xl sm:text-5xl font-black text-pink-500">12+</div>
          <div className="text-sm text-gray-500 font-bold mt-2">Annual Community Events</div>
        </div>

        <div className="bg-white/90 rounded-3xl p-6 shadow-xl border border-yellow-100">
          <div className="text-4xl sm:text-5xl font-black text-yellow-500">500+</div>
          <div className="text-sm text-gray-500 font-bold mt-2">Local Connections Made</div>
        </div>

        <div className="bg-white/90 rounded-3xl p-6 shadow-xl border border-cyan-100">
          <div className="text-4xl sm:text-5xl font-black text-cyan-500">100+</div>
          <div className="text-sm text-gray-500 font-bold mt-2">Volunteer Opportunities</div>
        </div>

        <div className="bg-white/90 rounded-3xl p-6 shadow-xl border border-purple-100">
          <div className="text-4xl sm:text-5xl font-black text-purple-500">∞</div>
          <div className="text-sm text-gray-500 font-bold mt-2">Pride & Visibility</div>
        </div>
      </div>

      {/* bottom affirmation line */}
      <div className="mt-10 text-lg sm:text-2xl font-black text-pink-500">
        Together, we build a brighter and bolder future.
      </div>
    </div>
  </div>
</section>
<footer className="border-t border-pink-100 bg-gradient-to-br from-white via-pink-50 to-cyan-50 mt-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* ORG */}
      <div>
        <h3 className="text-2xl font-black text-pink-500">
          Template Pride 🌈
        </h3>

        <p className="mt-3 text-gray-600 font-semibold leading-relaxed">
          Empowering the LGBTQIA+ community through visibility, advocacy,
          support, wellness, and joyful year-round connection.
        </p>

        <div className="mt-5 text-sm text-gray-500 font-bold">
          Building stronger safe spaces for every identity.
        </div>
      </div>

      {/* LINKS */}
      <div>
        <h4 className="text-lg font-black text-gray-900">Quick Links</h4>

        <ul className="mt-4 grid grid-cols-2 gap-3 text-sm sm:text-base font-semibold text-gray-600">
          <li><Link className="hover:text-pink-500 transition" to="/about">About</Link></li>
          <li><Link className="hover:text-pink-500 transition" to="/services">Services</Link></li>
          <li><Link className="hover:text-pink-500 transition" to="/events">Events</Link></li>
          <li><Link className="hover:text-pink-500 transition" to="/volunteer">Volunteer</Link></li>
          <li><Link className="hover:text-pink-500 transition" to="/resources">Resources</Link></li>
          <li><Link className="hover:text-pink-500 transition" to="/contact">Contact</Link></li>
          <li><Link className="hover:text-pink-500 transition" to="/sponsors">Sponsors</Link></li>
          <li><Link className="hover:text-pink-500 transition" to="/privacy">Privacy</Link></li>
        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <h4 className="text-lg font-black text-gray-900">Get In Touch</h4>

        <p className="mt-4 text-gray-600 font-semibold">
          📧{" "}
          <a
            href="mailto:templatepride@gmail.com"
            className="underline hover:text-pink-500"
          >
            templatepride@gmail.com
          </a>
        </p>

        <p className="mt-2 text-gray-600 font-semibold">
          📞{" "}
          <a
            href="tel:+9999999999"
            className="underline hover:text-pink-500"
          >
            (999) 999-9999
          </a>
        </p>

        <div className="mt-6 flex items-center gap-4 pt-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <FaFacebook className="text-xl" />
          </a>

          <a
            href="mailto:templatepride@gmail.com"
            className="w-11 h-11 rounded-full bg-cyan-400 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </div>
    </div>

    {/* BOTTOM BAR */}
    <div className="mt-12 border-t border-pink-100 pt-8 text-center">
      <div className="text-xs sm:text-sm text-gray-500 font-semibold">
        © {year} Template LGBTQIA+ Pride Center — All Rights Reserved.
      </div>

<div className="mt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-5">

  {/* HOME 1 */}
  <Link
    to="/"
    className="group relative overflow-hidden rounded-[2rem] bg-white/85 backdrop-blur-xl border border-pink-100 shadow-[0_18px_45px_rgba(0,0,0,0.08)] px-8 py-6 min-w-[260px] text-center hover:-translate-y-2 transition duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 via-purple-200/15 to-cyan-200/20 opacity-0 group-hover:opacity-100 transition" />
    <div className="relative">
      <div className="text-[11px] uppercase tracking-[0.3em] text-pink-500 font-black">
        Previous
      </div>
      <div className="mt-2 text-2xl font-black text-gray-900">
        Homepage 1
      </div>
      <div className="mt-2 text-sm text-gray-500 font-semibold">
        Return to classic design
      </div>
    </div>
  </Link>

  {/* HOME 3 */}
  <Link
    to="/home-page-3"
    className="group relative overflow-hidden rounded-[2rem] bg-white/85 backdrop-blur-xl border border-cyan-100 shadow-[0_18px_45px_rgba(0,0,0,0.08)] px-8 py-6 min-w-[260px] text-center hover:-translate-y-2 transition duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/20 via-blue-200/15 to-teal-200/20 opacity-0 group-hover:opacity-100 transition" />
    <div className="relative">
      <div className="text-[11px] uppercase tracking-[0.3em] text-cyan-500 font-black">
        Next Preview
      </div>
      <div className="mt-2 text-2xl font-black text-gray-900">
        Homepage 3
      </div>
      <div className="mt-2 text-sm text-gray-500 font-semibold">
        View warm editorial layout
      </div>
    </div>
  </Link>

  {/* HOME 4 */}
  <Link
    to="/home-page-4"
    className="group relative overflow-hidden rounded-[2rem] bg-white/85 backdrop-blur-xl border border-purple-100 shadow-[0_18px_45px_rgba(0,0,0,0.08)] px-8 py-6 min-w-[260px] text-center hover:-translate-y-2 transition duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 via-pink-200/15 to-cyan-200/20 opacity-0 group-hover:opacity-100 transition" />
    <div className="relative">
      <div className="text-[11px] uppercase tracking-[0.3em] text-purple-500 font-black">
        Futuristic
      </div>
      <div className="mt-2 text-2xl font-black text-gray-900">
        Homepage 4
      </div>
      <div className="mt-2 text-sm text-gray-500 font-semibold">
        Explore immersive rainbow version
      </div>
    </div>
  </Link>

</div>
    </div>
  </div>
</footer>




      
    </div>
  );
}