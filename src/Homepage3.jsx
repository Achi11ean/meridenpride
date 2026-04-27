import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import {
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaNewspaper,
  FaRainbow,
  FaStar,
} from "react-icons/fa";

export default function HomePage3() {
    const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-[#fff7fb] text-gray-900 overflow-hidden">
      {/* ───────────────── TEMPLATE 3 HERO ───────────────── */}
      <section className="relative min-h-[820px] md:min-h-screen w-full overflow-hidden flex items-center">
        {/* BIG COLORFUL BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-yellow-100 to-cyan-300" />

        {/* RAINBOW RIBBON SHAPES */}
        <div className="absolute -top-28 -left-24 w-[420px] h-[420px] rounded-full bg-pink-400/50 blur-3xl" />
        <div className="absolute top-32 -right-28 w-[460px] h-[460px] rounded-full bg-purple-400/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-cyan-300/45 blur-3xl" />

        {/* DIAGONAL FESTIVAL STRIPES */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(135deg,rgba(255,0,128,0.22)_0%,rgba(255,0,128,0.22)_12%,transparent_12%,transparent_22%,rgba(255,214,0,0.25)_22%,rgba(255,214,0,0.25)_34%,transparent_34%,transparent_46%,rgba(0,200,255,0.24)_46%,rgba(0,200,255,0.24)_58%,transparent_58%,transparent_70%,rgba(150,70,255,0.22)_70%,rgba(150,70,255,0.22)_82%,transparent_82%)]" />

        {/* WHITE READABILITY WASH */}
        <div className="absolute inset-0 bg-white/35" />

        {/* FLOATING STARS */}
        <FaStar className="absolute top-24 left-[8%] text-pink-500/60 text-3xl animate-pulse" />
        <FaStar className="absolute top-40 right-[12%] text-purple-500/60 text-4xl animate-pulse" />
        <FaStar className="absolute bottom-28 left-[18%] text-cyan-500/60 text-3xl animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/85 border border-pink-200 shadow-xl text-pink-600 font-black text-xs sm:text-sm uppercase tracking-[0.22em]"
              >
                <FaRainbow />
                Pride Center Template 3
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.65 }}
                className="mt-7 text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tight"
              >
                Pride Lives
                <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Here.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.65 }}
                className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-2xl text-gray-700 font-bold leading-relaxed"
              >
                A bold, joyful community homepage for events, resources,
                announcements, volunteers, sponsors, and year-round LGBTQIA+
                celebration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.65 }}
                className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0"
              >
                <Link
                  to="/events"
                  className="rounded-2xl px-5 py-4 bg-pink-500 text-white font-black shadow-xl hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  <FaCalendarAlt /> Events
                </Link>

                <Link
                  to="/volunteer"
                  className="rounded-2xl px-5 py-4 bg-yellow-400 text-gray-900 font-black shadow-xl hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  <FaHandHoldingHeart /> Volunteer
                </Link>

                <Link
                  to="/resources"
                  className="rounded-2xl px-5 py-4 bg-cyan-400 text-gray-900 font-black shadow-xl hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  <FaNewspaper /> Resources
                </Link>
              </motion.div>
            </div>

            {/* RIGHT FEATURE POSTER */}
            <motion.div
              initial={{ opacity: 0, rotate: 2, y: 20 }}
              animate={{ opacity: 1, rotate: -1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-[2rem] bg-white p-4 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] border border-white">
                <div className="rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 p-1">
                  <div className="rounded-[1.35rem] bg-white p-5 sm:p-7 text-center">
                    <img
                      src="https://img.freepik.com/premium-vector/label-banner-logo-template-black_760861-102.jpg"
                      alt="Template Pride"
                      className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                    />

                    <div className="mt-6 rounded-2xl bg-gradient-to-r from-pink-100 via-yellow-100 to-cyan-100 p-5">
                      <div className="text-sm uppercase tracking-[0.25em] text-pink-600 font-black">
                        Now Highlighting
                      </div>
                      <h2 className="mt-2 text-3xl sm:text-4xl font-black">
                        Community. Color. Connection.
                      </h2>
                      <p className="mt-3 text-gray-600 font-semibold">
                        A homepage style made for centers that want to feel
                        energetic, public, celebratory, and alive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-pink-100 font-black text-pink-600 rotate-[-3deg]">
                🌈 Year-Round Pride
              </div>

              <div className="absolute -top-5 -right-3 bg-white rounded-2xl px-5 py-3 shadow-xl border border-cyan-100 font-black text-cyan-600 rotate-[4deg]">
                Safe Spaces
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* ───────────────── COMMUNITY HAPPENINGS ───────────────── */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

  <div className="text-center mb-10">
    <div className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-600 font-black uppercase tracking-[0.25em] text-xs sm:text-sm">
      Happening Now
    </div>

    <h2 className="mt-5 text-4xl sm:text-6xl font-black">
      Community In Motion
    </h2>

    <p className="mt-4 max-w-3xl mx-auto text-gray-600 font-semibold text-lg">
      Discover celebrations, volunteer opportunities, support spaces,
      and community initiatives happening all year long.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="rounded-[2rem] p-8 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 text-white shadow-2xl">
      <div className="text-sm uppercase tracking-[0.25em] font-black opacity-80">
        Featured Festival
      </div>
      <h3 className="mt-3 text-3xl font-black">Annual Pride Weekend</h3>
      <p className="mt-4 font-semibold leading-relaxed">
        Parades, performances, drag brunches, family spaces, music,
        food trucks, advocacy booths and unforgettable visibility.
      </p>
    </div>

    <div className="rounded-[2rem] p-8 bg-gradient-to-br from-yellow-300 via-amber-300 to-orange-400 text-gray-900 shadow-2xl">
      <div className="text-sm uppercase tracking-[0.25em] font-black opacity-80">
        Ways To Help
      </div>
      <h3 className="mt-3 text-3xl font-black">Volunteer Teams</h3>
      <p className="mt-4 font-semibold leading-relaxed">
        Event staffing, youth outreach, sponsor coordination,
        community resource work, committee leadership and more.
      </p>
    </div>

    <div className="rounded-[2rem] p-8 bg-gradient-to-br from-cyan-300 via-teal-300 to-blue-400 text-gray-900 shadow-2xl">
      <div className="text-sm uppercase tracking-[0.25em] font-black opacity-80">
        Support & Wellness
      </div>
      <h3 className="mt-3 text-3xl font-black">Find Your People</h3>
      <p className="mt-4 font-semibold leading-relaxed">
        Peer groups, affirming providers, family support,
        educational resources, and safer spaces for every identity.
      </p>
    </div>
  </div>
</section>

{/* ───────────────── WHY PEOPLE GATHER HERE ───────────────── */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* IMAGE SIDE */}
    <div className="relative">
      <div
        className="min-h-[420px] rounded-[2.2rem] bg-cover bg-center shadow-[0_25px_70px_rgba(0,0,0,0.15)]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1184572/pexels-photo-1184572.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      />

      <div className="absolute -bottom-5 left-6 bg-white px-5 py-3 rounded-2xl shadow-xl border border-pink-100 font-black text-pink-500 rotate-[-2deg]">
        🌈 Safe Spaces
      </div>

      <div className="absolute -top-5 right-6 bg-white px-5 py-3 rounded-2xl shadow-xl border border-cyan-100 font-black text-cyan-500 rotate-[3deg]">
        🎤 Community Voices
      </div>
    </div>

    {/* TEXT SIDE */}
    <div>
      <div className="inline-block px-5 py-2 rounded-full bg-cyan-100 text-cyan-600 font-black uppercase tracking-[0.25em] text-xs sm:text-sm">
        Why We Gather
      </div>

      <h2 className="mt-5 text-4xl sm:text-6xl font-black leading-tight">
        More Than A Center —
        <span className="block text-pink-500">A Place To Be Seen.</span>
      </h2>

      <p className="mt-6 text-lg sm:text-xl text-gray-600 font-semibold leading-relaxed">
        Pride centers thrive when they become joyful hubs of visibility,
        belonging, celebration, advocacy, and support. This homepage style
        is built to showcase movement, not just information.
      </p>

      <p className="mt-4 text-lg sm:text-xl text-gray-600 font-semibold leading-relaxed">
        Here visitors instantly feel energy, community activity,
        and a reason to stay connected.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-pink-50 border border-pink-100 p-4 font-black text-pink-500">
          Youth Programs
        </div>
        <div className="rounded-2xl bg-yellow-50 border border-yellow-100 p-4 font-black text-amber-500">
          Community Outreach
        </div>
        <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-4 font-black text-cyan-500">
          Health & Wellness
        </div>
        <div className="rounded-2xl bg-purple-50 border border-purple-100 p-4 font-black text-purple-500">
          Sponsorship & Growth
        </div>
      </div>
    </div>
  </div>
</section>
<footer className="relative mt-10 overflow-hidden border-t border-pink-200">

  {/* FESTIVAL BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-yellow-50 to-cyan-100" />
  <div className="absolute -top-16 -left-10 w-60 h-60 bg-pink-300/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl" />
  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,rgba(255,0,128,0.2)_0%,rgba(255,0,128,0.2)_14%,transparent_14%,transparent_28%,rgba(255,214,0,0.2)_28%,rgba(255,214,0,0.2)_42%,transparent_42%,transparent_56%,rgba(0,200,255,0.2)_56%,rgba(0,200,255,0.2)_70%,transparent_70%)]" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* ORG */}
      <div>
        <div className="inline-block px-5 py-2 rounded-full bg-white shadow-lg text-pink-500 font-black uppercase tracking-[0.25em] text-xs sm:text-sm">
          Template Pride 🌈
        </div>

        <h3 className="mt-5 text-3xl font-black leading-tight">
          Celebrating Community,
          <span className="block text-pink-500">Every Day Of The Year.</span>
        </h3>

        <p className="mt-4 text-gray-600 font-semibold leading-relaxed">
          Visibility, advocacy, wellness, sponsorship, volunteers,
          support spaces, and year-round joyful connection.
        </p>
      </div>

      {/* LINKS */}
      <div>
        <h4 className="text-xl font-black text-gray-900">Explore More</h4>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link to="/about" className="rounded-xl bg-white px-4 py-3 shadow-lg font-black text-pink-500 hover:scale-105 transition text-center">About</Link>
          <Link to="/services" className="rounded-xl bg-white px-4 py-3 shadow-lg font-black text-yellow-500 hover:scale-105 transition text-center">Services</Link>
          <Link to="/events" className="rounded-xl bg-white px-4 py-3 shadow-lg font-black text-cyan-500 hover:scale-105 transition text-center">Events</Link>
          <Link to="/volunteer" className="rounded-xl bg-white px-4 py-3 shadow-lg font-black text-purple-500 hover:scale-105 transition text-center">Volunteer</Link>
          <Link to="/resources" className="rounded-xl bg-white px-4 py-3 shadow-lg font-black text-pink-500 hover:scale-105 transition text-center">Resources</Link>
          <Link to="/contact" className="rounded-xl bg-white px-4 py-3 shadow-lg font-black text-cyan-500 hover:scale-105 transition text-center">Contact</Link>
        </div>
      </div>

      {/* CONTACT */}
      <div>
        <h4 className="text-xl font-black text-gray-900">Stay Connected</h4>

        <p className="mt-5 text-gray-700 font-bold">
          📧{" "}
          <a
            href="mailto:templatepride@gmail.com"
            className="underline hover:text-pink-500"
          >
            templatepride@gmail.com
          </a>
        </p>

        <p className="mt-3 text-gray-700 font-bold">
          📞{" "}
          <a
            href="tel:+9999999999"
            className="underline hover:text-cyan-500"
          >
            (999) 999-9999
          </a>
        </p>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <FaFacebook className="text-xl" />
          </a>

          <a
            href="mailto:templatepride@gmail.com"
            className="w-12 h-12 rounded-full bg-cyan-400 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        <div className="mt-6 inline-block px-5 py-3 rounded-2xl bg-white shadow-lg font-black text-pink-500 rotate-[-2deg]">
          🌈 Everyone Is Welcome Here
        </div>
      </div>
    </div>

    {/* BOTTOM */}
    <div className="mt-14 border-t border-pink-200 pt-8 text-center">
      <div className="text-sm text-gray-500 font-bold">
        © {year} Template LGBTQIA+ Pride Center — All Rights Reserved.
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="px-7 py-4 rounded-2xl bg-pink-500 text-white font-black shadow-xl hover:scale-105 transition"
        >
          ← Template 1
        </Link>

        <Link
          to="/home-page-2"
          className="px-7 py-4 rounded-2xl bg-cyan-400 text-white font-black shadow-xl hover:scale-105 transition"
        >
          Template 2
        </Link>
        <Link
          to="/home-page-3"
          className="px-7 py-4 rounded-2xl bg-yellow-500 text-white font-black shadow-xl hover:scale-105 transition"
        >
          Template 3
        </Link>



        <Link
          to="/home-page-4"
          className="px-7 py-4 rounded-2xl bg-purple-500 text-white font-black shadow-xl hover:scale-105 transition"
        >
          Template 4 →
        </Link>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}