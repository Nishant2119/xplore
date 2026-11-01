'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

  const handleGoogleSignup = () => {
    console.log('Google direct signup clicked');
  };

  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 font-sans relative overflow-hidden">
      
      {/* Background ambient lighting matching the app aesthetic */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Glass Card Container */}
      <div className="relative w-full max-w-md bg-slate-900/80 backdrop-blur-2xl border border-white/15 rounded-[36px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-6 z-10">
        
        {/* Header / Branding */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-linear-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-slate-950 font-black text-xl mb-3">
            AI
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            Join the platform to unlock hidden spots and track your explorations.
          </p>
        </div>

        {/* Google Direct Signup Button */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center space-x-3 bg-slate-950/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-bold py-3.5 px-4 rounded-2xl transition duration-200 shadow-lg active:scale-[0.99]"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.4l3.7 2.9C6.5 7.3 9 5 12 5z"
            />
            <path
              fill="#4285F4"
              d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
            />
            <path
              fill="#FBBC05"
              d="M5.6 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.9 6.4C.7 8.8 0 11.3 0 14s.7 5.2 1.9 7.6l3.7-2.9z"
            />
            <path
              fill="#34A853"
              d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.8 7.5 23 12 23z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-2">
          <div className="grow border-t border-slate-800" />
          <span className="px-3 text-[10px] text-slate-500 uppercase tracking-widest font-bold">Or with email</span>
          <div className="grow border-t border-slate-800" />
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Username Field */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">Username</label>
            <input
              type="text"
              name="username"
              required
              placeholder="alex_explorer"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
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
              className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
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
              className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 py-3.5 bg-linear-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-extrabold text-xs rounded-2xl shadow-lg shadow-emerald-500/25 transition duration-200 active:scale-[0.99]"
          >
            Create Explorer Account
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-400 pt-1">
          Already exploring?{' '}
          <Link href="/login" className="text-emerald-400 hover:underline font-bold">
            Log in
          </Link>
        </p>

      </div>
    </main>
  );
}
