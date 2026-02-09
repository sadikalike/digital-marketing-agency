"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between rounded-2xl bg-gray-900 px-4 border border-gray-700">

          {/* LEFT : Logo */}
          <Logo />

          {/* CENTER : Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            <li><Link href="/#about" className="text-sm text-gray-300 hover:text-white">About</Link></li>
            <li><Link href="/#services" className="text-sm text-gray-300 hover:text-white">Services</Link></li>
            <li><Link href="/#work" className="text-sm text-gray-300 hover:text-white">Work</Link></li>
            <li><Link href="/#contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
          </ul>

          {/* RIGHT : Login + Mobile Icon */}
          <div className="flex items-center gap-3">
            {/* Desktop buttons */}
            <div className="hidden md:flex gap-3">
              <Link href="/signin" className="px-4 py-1.5 text-sm text-white hover:bg-gray-800 rounded-lg">
                Sign In
              </Link>
              <Link href="/signup" className="px-4 py-1.5 text-sm text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg">
                Register
              </Link>
            </div>

            {/* Mobile Hamburger - LAST (RIGHT) */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-3 rounded-xl bg-gray-900 border border-gray-700 p-4 space-y-3">
            <Link href="/#about" className="block text-gray-300">About</Link>
            <Link href="/#services" className="block text-gray-300">Services</Link>
            <Link href="/#work" className="block text-gray-300">Work</Link>
            <Link href="/#contact" className="block text-gray-300">Contact</Link>
            <Link href="/signin" className="block text-gray-300">Sign In</Link>
            <Link href="/signup" className="block text-indigo-400">Register</Link>
          </div>
        )}
      </div>
    </header>
  );
}
