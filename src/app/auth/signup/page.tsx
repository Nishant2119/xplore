'use client';

import React, { useState } from 'react';
import AuthLayout from '../_components/AuthLayout';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up submitted:', formData);
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join the platform to unlock hidden spots and track your explorations."
      footerText="Already exploring?"
      footerLinkText="Log in"
      footerHref="/auth/login"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Field */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">Name</label>
          <input
            type="text"
            name="username"
            required
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 text-base sm:text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"

          />
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="alex@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 text-base sm:text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"

          />
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 text-base sm:text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"

          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 py-3.5 bg-linear-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 active:scale-[0.98] text-slate-950 font-extrabold text-xs rounded-2xl shadow-lg shadow-emerald-500/25 transition duration-200 cursor-pointer"
        >
          Create Explorer Account
        </button>
      </form>
    </AuthLayout>
  );
}

