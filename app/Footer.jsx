// components/Footer.jsx
import Link from 'next/link';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center">
                <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">Dern-Support</span>
            </Link>
            <p className="mt-4 text-base text-gray-400">
              Trusted IT repair and technical support for individuals and businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/support#support-request" className="text-base text-gray-400 hover:text-white">
                  Submit a Request
                </Link>
              </li>
              <li>
                <Link href="/support#booking-request" className="text-base text-gray-400 hover:text-white">
                  Schedule a Repair
                </Link>
              </li>
              <li>
                <Link href="/individuals" className="text-base text-gray-400 hover:text-white">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="text-base text-gray-400 hover:text-white">
                  For Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/knowladge" className="text-base text-gray-400 hover:text-white">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/support#support-request" className="text-base text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-base text-gray-400 hover:text-white">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-gray-400 hover:text-white">
                  Terms & Policies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Dern-Support. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
