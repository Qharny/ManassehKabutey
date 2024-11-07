'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg sm:text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4 lg:space-x-8">
              <li>
                <Link
                  href="/skills"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Experience
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu (you'll need to add state management for this) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
            Skills
          </Link>
          <Link href="/projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
            Projects
          </Link>
          <Link href="/experience" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
            Experience
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
