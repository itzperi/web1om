import React from 'react';
import { Search, Globe } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="font-sans">
      {/* Top Feedback Bar */}
      <div className="bg-[#1f1f1f] text-white text-xs py-2 px-4 md:px-8 border-b border-gray-700">
        <p>We'd appreciate your feedback. <a href="#" className="text-blue-400 hover:underline">Tell us what you think!</a></p>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 100 100" className="w-10 h-10 fill-elsevier-orange">
              {/* Simplified tree icon representation */}
              <path d="M50 90 C 20 90 20 70 30 50 C 10 40 10 20 30 10 C 50 20 70 10 90 20 C 80 40 80 50 70 60 C 90 70 80 90 50 90 Z" fill="#FF6400" />
            </svg>
            <span className="text-2xl font-serif font-bold text-elsevier-orange tracking-wide">ELSEVIER</span>
          </div>

          {/* Nav Links & Tools */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
              {NAV_LINKS.map((link) => (
                <a key={link} href="#" className="hover:text-elsevier-orange hover:border-b-2 hover:border-elsevier-orange pb-1 transition-colors">
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button className="bg-elsevier-blue hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-5 rounded-full transition-colors hidden md:block">
                Publish with us
              </button>
              <button className="text-gray-700 hover:text-elsevier-orange">
                <Search className="w-6 h-6" />
              </button>
              <button className="text-gray-700 hover:text-elsevier-orange">
                <Globe className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
