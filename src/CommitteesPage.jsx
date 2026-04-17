import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://singspacebackend.onrender.com";
const PRIDE_ID = 3;

export default function CommitteesPage() {
  const [committees, setCommittees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/pride-committees/pride/${PRIDE_ID}`)
      .then(res => setCommittees(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black">

      {/* HERO */}
      <div
        className="relative h-[400px] flex mt-30 items-center justify-center"
        style={{
          backgroundImage: "url('https://nordic-minds.com/blog/wp-content/uploads/2023/07/blog-solo-fighter-1024x768-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-[Aspire] text-blue-300 drop-shadow-xl">
            Pride Committees
          </h1>

          <p className="mt-4 text-blue-200 max-w-2xl mx-auto text-lg">
            Meet the teams working together to build an unforgettable Pride experience.
          </p>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500" />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {loading && (
          <div className="text-center text-blue-300 text-lg animate-pulse">
            Loading committees…
          </div>
        )}

        {!loading && committees.length === 0 && (
          <div className="text-center text-blue-200">
            No committees found.
          </div>
        )}

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {committees.map(c => (
            <div
              key={c.id}
              className="
                relative group overflow-hidden
                rounded-3xl border border-blue-500/30
                bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]
                shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                p-8
                transition-all duration-500
                hover:scale-[1.04]
                hover:border-blue-400
              "
            >

              {/* Glow overlay */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20
              " />

              {/* Content */}
              <div className="relative z-10">

                <h2 className="
                  text-4xl font-[Aspire] text-blue-300 mb-3
                  group-hover:text-white transition
                ">
                  {c.name}
                </h2>

                <p className="text-blue-200 italic mb-6 line-clamp-4">
                  {c.mission_statement}
                </p>

                {c.contact_email && (
                  <p className="text-sm text-blue-300 mb-6">
                    📧 {c.contact_email}
                  </p>
                )}

                <button
                  onClick={() => navigate(`/committee/${c.slug}`)}
                  className="
                    px-6 py-3 rounded-full font-bold text-white
                    bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
                    shadow-lg shadow-blue-500/40
                    hover:scale-105 transition-all duration-300
                  "
                >
                  Explore Committee →
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}