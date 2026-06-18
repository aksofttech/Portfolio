'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 md:px-8 pointer-events-none">
      <nav className="pointer-events-auto bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center md:justify-between w-full max-w-4xl h-12 shadow-lg relative px-2 md:px-0 mx-auto">
        
        {/* Mobile menu button */}
        <div className="absolute left-3 md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Left Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center justify-center gap-6 lg:gap-10 text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-gray-300 uppercase">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
          </ul>
        </div>
        
        {/* Center Logo */}
        <div className="relative flex-shrink-0 z-10 flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-200">
          <Link href="/" className="bg-[#6366f1] h-10 md:h-16 px-4 md:px-6 rounded-full shadow-lg border border-white/20 flex items-center justify-center">
            <span className="text-white font-extrabold text-[12px] sm:text-sm md:text-xl tracking-tight mr-1">AK</span>
            <span className="text-white font-bold text-[12px] sm:text-sm md:text-xl tracking-tight">SOFT-TECH</span>
          </Link>
        </div>

        {/* Desktop Right Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center justify-center gap-6 lg:gap-10 text-[11px] font-bold tracking-[0.15em] text-gray-300 uppercase">
            <li><Link href="/technologies" className="hover:text-white transition-colors">Technologies</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="pointer-events-auto md:hidden mt-4 w-[90%] max-w-sm bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-6 text-sm font-bold tracking-[0.15em] text-gray-300 uppercase animate-in fade-in slide-in-from-top-4 duration-200">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full text-center py-2">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full text-center py-2">About Us</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full text-center py-2">Services</Link>
          <Link href="/technologies" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full text-center py-2">Technologies</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full text-center py-2">Projects</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full text-center py-2">Contact</Link>
        </div>
      )}
    </div>
  );
}
