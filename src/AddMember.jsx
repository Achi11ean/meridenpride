import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const API_BASE = "https://singspacebackend.onrender.com";

export default function AddMember({ committeeId, onMemberAdded }) {
  const { prideId, token, isAdmin } = useAuth();
const ROLE_OPTIONS = [
  "Admin",
  "Director",
  "Coordinator",
  "Event Lead",
  "Volunteer Manager",
  "Software Engineer",
  "Marketing",
  "Finance",
  "Community Outreach",
  "Executive Director",
  "Program Director",
  "Operations Manager",
  "Volunteer Coordinator",
  "Web Designer",
  "Community Outreach Coordinator",
  "Events Coordinator",
  "Fundraising Manager",
  "Development Director",
  "Communications Manager",
  "Marketing & Social Media",
  "Grant Writer",
  "Finance Manager",
  "Office Administrator",
  "Board Member",
  "Intern",
  "Volunteer",
  "Support Staff",
];
  const [memberType, setMemberType] = useState("staff"); // staff | admin
  const [members, setMembers] = useState([]); // selectable admins/staff
  const [selectedMemberId, setSelectedMemberId] = useState("");
  const [roleTitle, setRoleTitle] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Load available members (admins or staff) for this Pride
  useEffect(() => {
    if (!prideId || !memberType) return;

    const fetchMembers = async () => {
      setLoading(true);
      setError(null);
      try {
        const endpoint =
  memberType === "admin"
    ? `/api/pride/${prideId}/admins`
    : memberType === "staff"
    ? `/api/pride/${prideId}/staff`
    : `/api/pride/${prideId}/volunteer-spotlights`;


        const res = await axios.get(`${API_BASE}${endpoint}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setMembers(res.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load available members");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [memberType, prideId, token]);

  if (!isAdmin) {
    return (
      <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded">
        Only Pride admins can add committee members.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!committeeId) {
      setError("Missing committee ID");
      return;
    }

    if (!selectedMemberId) {
      setError("Please select a member to add");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${API_BASE}/api/pride-committees/${committeeId}/members`,
        {
          member_type: memberType,
          member_id: Number(selectedMemberId),
          role_title: roleTitle || null,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSuccess("Member added to committee");
      setSelectedMemberId("");
      setRoleTitle("");

      if (onMemberAdded) onMemberAdded();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to add member");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black/50 border border-yellow-500/30 rounded p-4 space-y-4">
      <h4 className="text-lg font-bold text-yellow-300">➕ Add Member</h4>

      {error && (
        <div className="p-2 bg-red-100 border border-red-300 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="p-2 bg-green-100 border border-green-300 text-green-700 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Member Type */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-yellow-200">
            Member Type
          </label>
        <select
  value={memberType}
  onChange={(e) => {
    setMemberType(e.target.value);
    setSelectedMemberId("");
  }}
  className="w-full p-2 rounded bg-black text-yellow-200 border border-yellow-500/40"
>
  <option value="staff">Staff</option>
  <option value="admin">Admin</option>
  <option value="volunteer">Volunteer</option>
</select>

        </div>

        {/* Member Select */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-yellow-200">
            Select Member
          </label>
          <select
            value={selectedMemberId}
            onChange={(e) => setSelectedMemberId(e.target.value)}
            className="w-full p-2 rounded bg-black text-yellow-200 border border-yellow-500/40"
          >
            <option value="">-- Choose --</option>
           {members.map((m) => (
  <option key={m.id} value={m.id}>
    {memberType === "admin" && m.name}
    {memberType === "staff" && `${m.first_name} ${m.last_name}`}
    {memberType === "volunteer" && m.name}
    {m.role ? ` (${m.role})` : ""}
  </option>
))}

          </select>
        </div>

        {/* Role Title */}
<div>
  <label className="block text-sm font-semibold mb-1 text-yellow-200">
    Committee Role (optional)
  </label>

  <select
    value={roleTitle}
    onChange={(e) => setRoleTitle(e.target.value)}
    className="w-full p-2 rounded bg-black text-yellow-200 border border-yellow-500/40"
  >
    <option value="">-- Select Role --</option>

    {ROLE_OPTIONS.map((role) => (
      <option key={role} value={role}>
        {role}
      </option>
    ))}
  </select>
</div>
{!ROLE_OPTIONS.includes(roleTitle) && roleTitle && (
  <p className="text-xs text-yellow-300 mt-1">
    Custom role selected
  </p>
)}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded bg-yellow-400 text-black font-bold hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? "Adding…" : "Add Member"}
          </button>
        </div>
      </form>
    </div>
  );
}
