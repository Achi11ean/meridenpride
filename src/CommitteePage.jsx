import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_BASE = "https://singspacebackend.onrender.com";

export default function CommitteePage() {
  const { slug } = useParams();

  const [committee, setCommittee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/pride-committees/slug/${slug}`)
      .then(res => setCommittee(res.data))
      .finally(() => setLoading(false));
  }, [slug]);
const formatPhone = (phone) => {
  if (!phone) return "";

  const digits = phone.replace(/\D/g, "");

  // US 10-digit formatting
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  // 11-digit starting with 1
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }

  // fallback — return original
  return phone;
};
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-blue-300 animate-pulse text-xl">
        Loading Committee…
      </div>
    );
  }

  if (!committee) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-400 text-xl">
        Committee Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-blue-100">

      {/* HERO */}
     <div className="relative mt-20 border-b h-[360px] flex items-center justify-center overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-purple-700/20 to-pink-700/30 animate-rainbow-glow" />
  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

  {/* Title */}
  <div className="relative z-10 text-center px-6">
    <h1 className="text-6xl md:text-7xl font-[Aspire] text-blue-300 drop-shadow-2xl">
      {committee.name}
    </h1>
  </div>

  {/* Bottom Contact Info */}
  {(committee.contact_email || committee.contact_phone) && (
    <div className="absolute bottom-6 left-0 right-0 z-10 px-8 flex justify-between items-end text-sm font-semibold">

      {/* Email — Bottom Left */}
      {committee.contact_email && (
        <a
          href={`mailto:${committee.contact_email}`}
          className="flex items-center gap-2 text-blue-200 hover:text-white transition"
        >
          <span className="text-lg">📧</span>
          {committee.contact_email}
        </a>
      )}

      {/* Phone — Bottom Right */}
{committee.contact_phone && (
  <a
    href={`tel:${committee.contact_phone.replace(/\D/g, "")}`}
    className="flex items-center gap-2 text-blue-200 hover:text-white transition"
  >
    <span className="text-lg">📞</span>
    {formatPhone(committee.contact_phone)}
  </a>
)}
    </div>
  )}

</div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-2 py-16 space-y-20">

        {/* ABOUT */}
{committee.details && (
  <div className="relative max-w-5xl mx-auto">

    {/* 🌟 Outer Glow */}
    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r 
                    from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl" />

    {/* 🌟 Main Card */}
    <div className="relative bg-gradient-to-br 
                    from-[#020617]/90 via-[#0f172a]/95 to-[#020617]/90
                    backdrop-blur-xl
                    border border-blue-400/30
                    rounded-[32px] p-6 shadow-[0_0_80px_rgba(59,130,246,0.25)]">

      {/* ⭐ Title */}
      <h2 className="text-4xl font-[Aspire] text-center text-blue-300 tracking-wide">
        About This Committee
      </h2>

      {/* Decorative Divider */}
      <div className="mt-6 flex justify-center">
        <div className="h-[3px] w-40 bg-gradient-to-r 
                        from-blue-400 via-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* ⭐ Mission Statement Highlight */}
      <div className="mt-10 relative text-center">

        {/* Quote Glow */}
        <div className="absolute inset-0 blur-2xl bg-blue-500/10 rounded-2xl" />

        <p className="relative max-w-3xl mx-auto text-xl italic 
                      text-blue-200 leading-relaxed font-semibold">
          “{committee.mission_statement}”
        </p>
      </div>

      {/* ⭐ Details Body */}
      <div className="mt-10 max-w-4xl mx-auto">

        <p className="text-lg leading-relaxed text-blue-100/95 
                      font-medium text-center whitespace-pre-line">
          {committee.details}
        </p>

      </div>

    </div>
  </div>
)}

        {/* MEMBERS */}
   {committee.members?.length > 0 && (
  <div className="relative mt-24">

    {/* 🌟 Section Glow */}
    <div className="absolute inset-0 bg-gradient-to-r 
                    from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl" />

    <div className="relative">

      {/* ⭐ Section Header */}
      <h2 className="text-5xl font-[Aspire] text-center text-blue-300">
        Committee Members
      </h2>

      {/* Divider */}
      <div className="mt-6 flex justify-center">
        <div className="h-[3px] w-48 bg-gradient-to-r 
                        from-blue-400 via-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* ⭐ Members Grid */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {committee.members.map(m => {
          let displayName = "";

          if (m.member_type === "admin") {
            displayName = m.member?.name || "Admin";
          }

          if (m.member_type === "staff") {
            displayName = `${m.member?.first_name || ""} ${m.member?.last_name || ""}`.trim();
          }

          if (m.member_type === "volunteer") {
            displayName = m.member?.name || "Volunteer";
          }

          return (
            <div
              key={m.id}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl 
                              bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20
                              blur-xl opacity-0 group-hover:opacity-100 transition" />

              {/* Card */}
              <div className="relative bg-gradient-to-br 
                              from-[#020617]/90 via-[#0f172a]/95 to-[#020617]/90
                              backdrop-blur-xl
                              border border-blue-400/30
                              rounded-3xl p-8 shadow-2xl
                              hover:scale-[1.04] transition-all duration-300">

                {/* Avatar Circle */}
                <div className="w-20 h-20 mx-auto rounded-full 
                                bg-gradient-to-br from-blue-500/40 to-purple-600/40
                                flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  {displayName.charAt(0)}
                </div>

                {/* Name */}
                <h3 className="mt-6 text-2xl font-bold text-blue-200 text-center">
                  {displayName}
                </h3>

                {/* Role Title */}
                {m.role_title && (
                  <p className="text-center mt-2 text-blue-400 font-semibold">
                    {m.role_title}
                  </p>
                )}

                {/* Member Type Badge */}
                <div className="mt-6 flex justify-center">
                  <span className="px-4 py-1 rounded-full text-xs font-bold tracking-wide
                                   bg-gradient-to-r from-purple-600/30 to-blue-600/30
                                   border border-purple-400/40 text-purple-300">
                    {m.member_type.toUpperCase()}
                  </span>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  </div>
)}

        {/* SERVICES */}
   {committee.services?.length > 0 && (
  <div className="relative mt-24">

    {/* 🌟 Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-r 
                    from-purple-600/10 via-blue-600/10 to-pink-600/10 blur-3xl" />

    <div className="relative">

      {/* ⭐ Section Header */}
      <h2 className="text-5xl font-[Aspire] text-center text-blue-300">
        Committee Services
      </h2>

      {/* Divider */}
      <div className="mt-6 flex justify-center">
        <div className="h-[3px] w-48 bg-gradient-to-r 
                        from-blue-400 via-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* ⭐ Services Grid */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

       {committee.services.map(s => (
  <Link
    key={s.id}
    to={`/services/${s.slug}`}
    className="relative group block"
  >
    {/* Glow halo */}
    <div className="absolute inset-0 rounded-3xl 
                    bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20
                    blur-xl opacity-0 group-hover:opacity-100 transition" />

    {/* Card */}
    <div className="relative bg-gradient-to-br 
                    from-[#020617]/90 via-[#0f172a]/95 to-[#020617]/90
                    backdrop-blur-xl
                    border border-blue-400/30
                    rounded-3xl shadow-2xl
                    overflow-hidden
                    hover:scale-[1.04] transition-all duration-300">

      {s.image_url && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={s.image_url}
            alt={s.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t 
                          from-black/80 via-black/20 to-transparent" />
        </div>
      )}

      <div className="p-7">
        <h3 className="text-2xl font-bold text-blue-200">
          {s.title}
        </h3>

        <p className="mt-4 text-blue-100 leading-relaxed text-sm">
          {s.description}
        </p>

        {/* Learn more indicator */}
        <div className="mt-6 inline-block px-6 py-2 rounded-full font-bold text-white
                        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                        shadow-lg group-hover:brightness-110 transition">
          View Service →
        </div>
      </div>
    </div>
  </Link>
))}
      </div>
    </div>
  </div>
)}
        {/* CONTACT */}
  

      </div>
    </div>
  );
}