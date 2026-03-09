import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SponsorSlider from "./SponsorSlider";
import PublicFundersSection from "./PublicFundersSection";
import VendorSlider from "./VendorSlider";
import AnnualPrideEventDetails from "./AnnualPrideEventDetails";
import PrideItinerary from "./PrideItinerary";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import SponsorInvitationPage from "./SponsorInvitationPage";

export default function HartfordCityPride() {
  const [showSponsorModal, setShowSponsorModal] = React.useState(false);
  const [prideEvent, setPrideEvent] = useState(null);
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();
  const hasPrideEvent = !!prideEvent?.slug;

  useEffect(() => {
    let mounted = true;

    axios
      .get("https://singspacebackend.onrender.com/karaokeevents/pride/1/annual")
      .then((res) => {
        if (!mounted) return;

        // Backend guarantees either an event object or null
        setPrideEvent(res.data ?? null);
      })
      .catch((err) => {
        console.error("Error loading Annual Pride event:", err);
        setPrideEvent(null);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const SectionHeader = ({ icon, title, subtitle }) => (
    <div className="text-center mb-10">
      <h3 className="text-5xl sm:text-6xl font-[Aspire] text-yellow-300 drop-shadow-lg">
        {icon} {title}
      </h3>
      <p className="mt-2 text-yellow-100 font-semibold tracking-wide">
        {subtitle}
      </p>
    </div>
  );

  const RainbowDivider = () => (
    <div
      className="my-16 h-1 w-full rounded-full bg-gradient-to-r 
    from-red-500 via-orange-400 via-yellow-300 via-green-400 
    via-blue-400 via-purple-500 to-pink-500
    shadow-[0_0_20px_rgba(255,255,255,0.35)]
  "
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900  via-green-900 via-green-600 via-green-800 to-blue-400 text-white pt-24">
      {/* 🌞 HERO SECTION */}
     <section
  className="
    relative text-center py-20 
    bg-[url('https://www.vacationer.travel/wp-content/uploads/2023/05/West-Hartford-Pride-1024x768.jpg')]
    bg-cover bg-center
    shadow-2xl
  "
>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

  <div className="relative z-10 px-6">
    <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg">
      South Haven, MI <span className="text-yellow-300">Pride</span>
    </h1>

    <p className="mt-3 text-lg sm:text-xl text-yellow-200 font-semibold">
      The Official Pride Celebration of South Haven, Michigan
    </p>

    {/* 🌞 CLICKABLE DATE BANNER */}
    <div
      className="
        mt-6 inline-block 
        bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600
        px-6 py-3 
        rounded-none font-bold shadow-xl border-2 border-white
        cursor-pointer hover:opacity-90 transition
        text-black
      "
      onClick={() => {
        if (
          window.confirm(
            "You’re being redirected to the official Pride Festival page on Karaoverse!\n\nContinue?"
          )
        ) {
          window.location.href = prideEvent
            ? `https://karaoverse.com/events/${prideEvent.slug}`
            : "https://karaoverse.com";
        }
      }}
    >
      {prideEvent ? (
        <>
          🌟{" "}
          {new Date(prideEvent.date + "T00:00:00").toLocaleDateString(
            "en-US",
            {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            }
          )}{" "}
          • {prideEvent.city}, {prideEvent.state}
        </>
      ) : (
        "🌟 June 2026 • Pride Event"
      )}
    </div>
  </div>
</section>
      <hr className="rainbow-hr" />
      {/* 🟡 EVENT OVERVIEW */}
      <section className="max-w-4xl mx-auto text-center px-2 py-2">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          The Biggest Pride Event <br /> in South Haven, MI
        </h2>

        <p className="text-yellow-100 leading-relaxed text-lg">
          Every June, thousands come together in South Haven, MI to celebrate
          love, identity, diversity, and resilience. The South Haven, MI Pride
          Festival features live entertainment, vendors, community resources, a
          massive parade, and a celebration that lights up the city.
        </p>
      </section>
      {/* 🎭 MAIN FEATURES */}
      <AnnualPrideEventDetails />
      <div className=" px-3">
        <PrideItinerary />
      </div>
      {/* 🌈 PRIDE PARTNERS SHOWCASE */}
      <section className="relative w-full px-2 py-2 overflow-hidden">
        {/* 🌈 Ambient Pride Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* 🌈 MAIN HEADER */}
     
<div
  className="
    relative overflow-hidden
    rounded-3xl p-6 sm:p-8
    border border-white/10
    bg-gradient-to-b from-black/60 via-black/40 to-black/60
    backdrop-blur-xl
    shadow-[0_25px_70px_-40px_rgba(0,0,0,0.9)]
    text-center
  "
>

  {/* glow accents */}
  <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-yellow-400/15 blur-3xl" />

  <div className="relative">

    {/* IMAGE */}
    <div className="relative mb-6">
      <img
        src="https://main-stream.org/wp-content/uploads/2024/05/call-for-Pride-volunteers-cover-image-770x434-1.jpg"
        alt="Pride event volunteer helping at the festival"
        className="
          w-full max-w-2xl mx-auto
          rounded-2xl
          border border-white/10
          shadow-[0_20px_60px_-30px_rgba(250,204,21,0.6)]
          object-cover
        "
      />

      <div className="absolute inset-0 rounded-2xl ring-1 ring-yellow-300/20 pointer-events-none" />
    </div>

    {/* TITLE */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mb-3 drop-shadow-lg">
      💛 Become a Volunteer
    </h2>

    {/* TEXT */}
    <p className="text-yellow-100/85 text-lg sm:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
      Support South Haven Pride by lending a helping hand and being part of
      something unforgettable for the community.
    </p>

    {/* BUTTON */}
    <button
      onClick={() => navigate("/contact")}
      className="
        inline-flex items-center justify-center gap-2
        px-8 py-3 rounded-2xl
        bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
        text-black font-extrabold
        shadow-[0_20px_50px_-25px_rgba(250,204,21,0.85)]
        hover:brightness-110 hover:scale-[1.03]
        active:scale-[0.99]
        transition
        focus:outline-none focus:ring-2 focus:ring-yellow-200/70
      "
    >
      Contact Us
      <span className="opacity-80">↗</span>
    </button>

  </div>
</div>
          {/* 🏆 SPONSORS */}
       <div
            className="
    max-w-6xl mx-auto mt-6 mb-6
    rounded-3xl p-6 sm:p-8
    border border-white/10
    bg-gradient-to-b from-black/60 via-black/40 to-black/60
    backdrop-blur-xl
    shadow-[0_25px_70px_-40px_rgba(0,0,0,0.9)]
    text-center
    relative overflow-hidden
  "
          >
            {/* soft glow accents */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-pink-500/15 blur-3xl" />

            <div className="relative">
              <SectionHeader
                icon="🏆"
                title="Sponsors"
                subtitle="Supporting Pride at the highest level"
              />

              <div className="flex justify-center mt-6">
                <SponsorSlider />
              </div>
            </div>
          </div>

 

          {/* 🛍️ VENDORS */}
    <div
            className="
    max-w-6xl mx-auto mb-6
    rounded-3xl p-6 sm:p-8
    border border-white/10
    bg-gradient-to-b from-black/60 via-black/40 to-black/60
    backdrop-blur-xl
    shadow-[0_25px_70px_-40px_rgba(0,0,0,0.9)]
    text-center
    relative overflow-hidden
  "
          >
            {/* soft glow accents */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-yellow-400/15 blur-3xl" />

            <div className="relative">
              <SectionHeader
                icon="🛍️"
                title="Vendors"
                subtitle="Local businesses bringing the magic"
              />

              <div className="flex justify-center mt-6">
                <VendorSlider />
              </div>
            </div>
          </div>


          {/* 💖 FUNDERS */}
    <div
            className="
    max-w-6xl mx-auto mb-6
    rounded-3xl p-6 sm:p-8
    border border-white/10
    bg-gradient-to-b from-black/60 via-black/40 to-black/60
    backdrop-blur-xl
    shadow-[0_25px_70px_-40px_rgba(0,0,0,0.9)]
    text-center
    relative overflow-hidden
  "
          >
            {/* soft glow accents */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-yellow-400/15 blur-3xl" />

            <div className="relative">
              <SectionHeader
                icon="💖"
                title="Funders"
                subtitle="Community champions making it happen"
              />

              <div className="flex justify-center mt-6">
                <PublicFundersSection />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 🛍️ VENDOR / SPONSOR / VOLUNTEER */}
      {/* ⭐ Sponsor Modal */}
      {showSponsorModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-white text-black max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-xl shadow-2xl border-4 border-yellow-500">
            <button
              onClick={() => setShowSponsorModal(false)}
              className="absolute top-2 right-2 z-50 px-4 py-1 bg-yellow-500 text-black font-bold border-2 border-white shadow hover:bg-yellow-600 transition rounded-md"
            >
              ✖ Close
            </button>

            <div>
              <SponsorInvitationPage />
            </div>
          </div>
        </div>
      )}
      {/* 📍 MAP */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Festival Location
        </h2>
        <hr className="rainbow-hr my-4" />

        <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-400">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps?q=Stanley+Johnston+Park,+South+Haven,+MI&z=18&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      {/* ⭐ FOOTER — YELLOW THEME */}
      <section className="bg-gradient-to-br from-yellow-900 via-black to-amber-900 text-yellow-200 py-6 border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 divide-y lg:divide-y-0 lg:divide-x lg:divide-yellow-700">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-yellow-400 border-b-2 border-yellow-400 inline-block mb-2">
              South Haven LGBTQ+ Advocacy 🌟
            </h3>
            <p className="text-sm font-bold">
              Celebrating identity, community, and love in the heart of South
              Haven, MI.
            </p>
          </div>

          <div className="text-center lg:text-left lg:px-6">
            <h4 className="text-lg font-semibold text-yellow-100 mb-3">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <Link to="/events" className="hover:text-yellow-300">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-yellow-300">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-yellow-300">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left lg:pl-6">
            <h4 className="text-lg font-semibold text-yellow-100 mb-3">
              Connect
            </h4>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-2xl">
              <a
                href="https://www.facebook.com/SouthHavenLGBTQAdvocacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <FaFacebook />
              </a>
              <a
                href="mailto:blanca@lgbtqadvocacy.org"
                className="hover:text-yellow-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-yellow-500">
          © {new Date().getFullYear()} South Haven LGBTQ+ Advocacy - Non Profit
          Organization.
        </div>
      </section>
    </div>
  );
}
