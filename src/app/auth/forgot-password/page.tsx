'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '../_components/AuthLayout';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API request to trigger password reset email
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your account email and we'll send you a secure link to get back into your account."
      footerText="Remembered your password?"
      footerLinkText="Log in"
      footerHref="/auth/login"
    >
      {isSubmitted ? (
        /* Success Confirmation View */
        <div className="space-y-4 text-center py-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white">Check your inbox</h3>
            <p className="text-xs text-slate-400 leading-relaxed px-2">
              We&apos;ve sent password reset instructions to <span className="text-slate-200 font-medium">{email}</span>.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setEmail('');
            }}
            className="w-full mt-2 py-3 bg-slate-950/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80 font-bold text-xs rounded-2xl transition duration-200 cursor-pointer"
          >
            Didn&apos;t receive the email? Try again
          </button>
        </div>
      ) : (
        /* Reset Form View */
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 text-base sm:text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"

            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3.5 bg-linear-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 active:scale-[0.98] text-slate-950 font-extrabold text-xs rounded-2xl shadow-lg shadow-emerald-500/25 transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending Link...' : 'Send Reset Link'}
          </button>
        </form>
      )}
    </AuthLayout>
  );
}
