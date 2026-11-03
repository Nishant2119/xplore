'use client';

import React from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerHref,
  children,
}: AuthLayoutProps) {
  const handleGoogleAuth = () => {
    console.log('Google direct auth clicked');
  };

  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 font-sans relative overflow-hidden select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Glass Card Container (Mobile Priority) */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-slate-900/80 backdrop-blur-2xl border border-white/15 rounded-4xl sm:rounded-[36px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-5 sm:space-y-6 z-10">
        
        {/* Header / Branding */}
        <div className="text-center space-y-2">
          <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto rounded-2xl bg-linear-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-slate-950 font-black text-lg sm:text-xl mb-3">
            AI
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-slate-400 font-medium leading-relaxed px-2">
            {subtitle}
          </p>
        </div>

        {/* Google Direct Auth Button */}
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center space-x-3 bg-slate-950/80 hover:bg-slate-800 active:bg-slate-800/90 text-slate-200 border border-slate-700/80 text-xs font-bold py-3.5 px-4 rounded-2xl transition duration-200 shadow-lg active:scale-[0.98] cursor-pointer"
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

        {/* Form Slot */}
        {children}

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-400 pt-1">
          {footerText}{' '}
          <Link href={footerHref} className="text-emerald-400 hover:underline font-bold transition">
            {footerLinkText}
          </Link>
        </p>

      </div>
    </main>
  );
}
