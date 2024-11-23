"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header({ showHomeLink = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open/close state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full max-w-3xl mx-auto flex justify-between items-center pb-6 border-b border-[#2a2e43] px-4 mt-12 relative">
      {/* Flex container to align Bergasoft and hamburger icon */}
      <div className="flex justify-between items-center w-full">
        {/* Bergasoft logo (aligned left) */}
        <Link href="/" className="text-3xl font-extrabold text-[#ff007f] hover:text-[#e6006f] transition-colors">
          Bergasoft
        </Link>

        {/* Hamburger Icon (Mobile) - aligned right */}
        <button 
          className="sm:hidden text-[#ff007f] hover:text-[#e6006f] transition-colors absolute top-4 right-4 z-10 w-8 h-8"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (for smaller screens) */}
      <div 
        className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-[#000000] p-6 bg-opacity-90 rounded-lg`}>
        <nav className="flex flex-col items-center gap-4 text-lg">
          {showHomeLink && (
            <Link href="/" className="hover:text-[#00c8ff] transition-colors py-2">
              Home
            </Link>
          )}
          <Link href="/services" className="hover:text-[#00c8ff] transition-colors py-2">
            Services
          </Link>
          <Link href="/projects" className="hover:text-[#00c8ff] transition-colors py-2">
            Projects
          </Link>
          <Link href="/about" className="hover:text-[#00c8ff] transition-colors py-2">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#00c8ff] transition-colors py-2">
            Contact
          </Link>
        </nav>
      </div>

      {/* Desktop Menu (for larger screens) */}
      <nav className="hidden sm:flex gap-6 text-lg">
        {showHomeLink && (
          <Link href="/" className="hover:text-[#00c8ff] transition-colors">
            Home
          </Link>
        )}
        <Link href="/services" className="hover:text-[#00c8ff] transition-colors">
          Services
        </Link>
        <Link href="/projects" className="hover:text-[#00c8ff] transition-colors">
          Projects
        </Link>
        <Link href="/about" className="hover:text-[#00c8ff] transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#00c8ff] transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
}
