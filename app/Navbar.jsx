"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-transparent lg:h-16 sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center">
                <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">Dern-Support</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/knowladge" className="text-gray-300 hover:text-white px-3 py-2">
              Knowledge Base
            </Link>
            <Link href="/individuals" className="text-gray-300 hover:text-white px-3 py-2">
              For Individuals
            </Link>
            <Link href="/businesses" className="text-gray-300 hover:text-white px-3 py-2">
              For Businesses
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-white px-3 py-2">
              Submit Request
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="bg-gradient-to-r from-blue-500 to-green-600 px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-gray-800`}>
        <div className="px-4 pt-4 pb-6 space-y-1">
          <Link href="/knowledge-base" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">
            Knowledge Base
          </Link>
          <Link href="/individual-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">
            For Individuals
          </Link>
          <Link href="/business-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">
            For Businesses
          </Link>
          <Link href="/support-request" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">
            Submit Request
          </Link>
          <Link
            href="/login"
            className="block mt-4 px-3 py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-green-600"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
