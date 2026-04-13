"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-white-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://ariellebeltran.github.io/main/images/testlogo-thick.png"
            alt="AB Logo"
            width={32}
            height={32}
            className="rounded"
          />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
        >
          &#9776;
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg text-gray-600 dark:text-white-400">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {/* <Link href="/about" className="hover:text-blue-600">About</Link> */}
          {/* <Link href="/projects" className="hover:text-blue-600">Projects</Link> */}
          <a
            href="https://1drv.ms/w/c/F1EDBC7B01B473B9/IQAIizPQJVjeRaFb6cgjWzByARgvjU4cC3EY9v5YPSAzVWA?e=r8xdCk"
            target="_blank"
            className="hover:text-blue-600"
          >
            Resume
          </a>
          <button
            onClick={() => navigator.clipboard.writeText("arielle-beltran@outlook.com")}
            className="hover:text-blue-600"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-white-900 shadow-inner px-6 py-4 flex flex-col gap-4 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <a
            href="https://1drv.ms/w/c/F1EDBC7B01B473B9/IQAIizPQJVjeRaFb6cgjWzByARgvjU4cC3EY9v5YPSAzVWA?e=r8xdCk"
            target="_blank"
          >
            Resume
          </a>
          <button
            onClick={() => navigator.clipboard.writeText("arielle-beltran@outlook.com")}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}