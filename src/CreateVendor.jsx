import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const API = "https://singspacebackend.onrender.com";

// 🔐 Cloudinary
const CLOUD_NAME = "dincfzdau";
const UPLOAD_PRESET = "pridecenters";

const VENDOR_TYPES = [
  "Merchandise",
  "Arts and Crafts",
  "Wellness or Beauty",
  "Travel or Tourism Agency",
  "Food and Beverage",
  "Community Service or Nonprofit",
  "Political or Activism",
];
const STATUS_OPTIONS = [
  "pending",
  "approved",
  "confirmed",
  "declined",
  "cancelled",
];

export default function CreateVendor() {
  const { token, prideId } = useAuth();

const [form, setForm] = useState({
  company_name: "",
  vendor_type: "",
  contact_name: "",
  contact_email: "",
  websites: [""],   // 🔥 NEW
  socials: [""],    // 🔥 NEW
  image_url: "",
  start_time: "",
  end_time: "",
  status: "pending",
});

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ───────────────────────────── */
  /* 📤 Cloudinary Upload */
  /* ───────────────────────────── */
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        data
      );

      setForm((prev) => ({
        ...prev,
        image_url: res.data.secure_url,
      }));

      toast.success("📸 Image uploaded!");
    } catch (err) {
      console.error(err);
      toast.error("❌ Image upload failed");
    }
  };
const updateListItem = (type, index, value) => {
  setForm((prev) => {
    const updated = [...prev[type]];
    updated[index] = value;
    return { ...prev, [type]: updated };
  });
};

const addListItem = (type) => {
  setForm((prev) => ({
    ...prev,
    [type]: [...prev[type], ""],
  }));
};

const removeListItem = (type, index) => {
  setForm((prev) => ({
    ...prev,
    [type]: prev[type].filter((_, i) => i !== index),
  }));
};
  /* ───────────────────────────── */
  /* 🚀 Submit */
  /* ───────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
     await axios.post(
  `${API}/api/pride/${prideId}/vendors`,
  {
    ...form,

    website_url: form.websites
      .filter((w) => w && w.trim())
      .join(","),

    social_links: form.socials
      .filter((s) => s && s.trim())
      .join(","),

    start_time: form.start_time || null,
    end_time: form.end_time || null,
  },
  { headers: { Authorization: `Bearer ${token}` } }
);

      toast.success("🏳️‍🌈 Vendor added successfully!");

    setForm({
  company_name: "",
  vendor_type: "",
  contact_name: "",
  contact_email: "",
  websites: [""],
  socials: [""],
  image_url: "",
  start_time: "",
  end_time: "",
  status: "pending",
});
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add vendor");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-extrabold text-yellow-300 mb-4 border-b border-yellow-400">
        ➕ Add Pride Vendor
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-black/60 border border-yellow-500/30 rounded-xl p-6 shadow-lg"
      >
        {/* Company Name */}
        <input
          name="company_name"
          value={form.company_name}
          onChange={handleChange}
          placeholder="Company / Organization Name"
          required
          className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
        />

        {/* Vendor Type */}
        <select
          name="vendor_type"
          value={form.vendor_type}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
        >
          <option value="">Select vendor type</option>
          {VENDOR_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="contact_name"
            value={form.contact_name}
            onChange={handleChange}
            placeholder="Contact Name"
            required
            className="px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
          />

          <input
            type="email"
            name="contact_email"
            value={form.contact_email}
            onChange={handleChange}
            placeholder="Contact Email"
            required
            className="px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
          />
        </div>

        {/* Website */}
<div className="space-y-2">
  <label className="text-sm font-bold text-yellow-200">
    🌐 Websites
  </label>

  {form.websites.map((site, i) => (
    <div key={i} className="flex gap-2">
      <input
        value={site}
        onChange={(e) =>
          updateListItem("websites", i, e.target.value)
        }
        placeholder="https://yourwebsite.com"
        className="flex-1 px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
      />

      {form.websites.length > 1 && (
        <button
          type="button"
          onClick={() => removeListItem("websites", i)}
          className="px-3 bg-red-600 text-white rounded"
        >
          ✕
        </button>
      )}
    </div>
  ))}

  <button
    type="button"
    onClick={() => addListItem("websites")}
    className="text-xs text-yellow-300 hover:underline"
  >
    ➕ Add Website
  </button>
</div>
<div className="space-y-2">
  <label className="text-sm font-bold text-yellow-200">
    📱 Social Links
  </label>

  {form.socials.map((social, i) => (
    <div key={i} className="flex gap-2">
      <input
        value={social}
        onChange={(e) =>
          updateListItem("socials", i, e.target.value)
        }
        placeholder="https://instagram.com/..."
        className="flex-1 px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
      />

      {form.socials.length > 1 && (
        <button
          type="button"
          onClick={() => removeListItem("socials", i)}
          className="px-3 bg-red-600 text-white rounded"
        >
          ✕
        </button>
      )}
    </div>
  ))}

  <button
    type="button"
    onClick={() => addListItem("socials")}
    className="text-xs text-yellow-300 hover:underline"
  >
    ➕ Add Social
  </button>
</div>

        {/* 🖼 Vendor Image */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-yellow-200">
            Vendor Image (optional)
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full text-yellow-100"
          />

          <input
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
            placeholder="Or paste image URL"
            className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
          />

          {form.image_url && (
            <img
              src={form.image_url}
              alt="Preview"
              className="mt-2 h-32 rounded shadow object-cover"
            />
          )}
        </div>

        {/* Event Times */}
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="datetime-local"
            name="start_time"
            value={form.start_time}
            onChange={handleChange}
            className="px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
          />

          <input
            type="datetime-local"
            name="end_time"
            value={form.end_time}
            onChange={handleChange}
            className="px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
          />
        </div>

        {/* Status */}
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400/40"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 font-bold rounded
            bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600
            text-black hover:brightness-110 transition"
        >
          {submitting ? "Saving…" : "Save Vendor"}
        </button>
      </form>
    </div>
  );
}
