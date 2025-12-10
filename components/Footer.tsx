import React from 'react';
import { ArrowRight, Linkedin, X, Facebook, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-white pt-16 pb-8 border-t border-gray-800 text-sm">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* More from Elsevier */}
        <div className="mb-20">
            <h2 className="text-3xl font-serif mb-8 text-white">More from Elsevier</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Promo Card 1 */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden h-64 group cursor-pointer">
                    <img src="https://picsum.photos/seed/doctor/600/300" alt="ClinicalKey" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6 max-w-xs">Your journey matters. That's why we're investing in your practice-readiness.</h3>
                        <button className="self-start bg-white text-gray-900 font-bold py-2 px-4 rounded-full flex items-center gap-2 text-sm hover:bg-gray-200 transition">
                            Get ClinicalKey AI free <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                {/* Promo Card 2 */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden h-64 group cursor-pointer">
                    <img src="https://picsum.photos/seed/library/600/300" alt="Books" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent p-8 flex flex-col justify-center">
                         <h3 className="text-2xl font-bold mb-6 max-w-xs">Discover +50,000 books, e-journals and journals</h3>
                        <button className="self-start bg-white text-gray-900 font-bold py-2 px-4 rounded-full flex items-center gap-2 text-sm hover:bg-gray-200 transition">
                            Visit Elsevier shop <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-bold mb-4 text-white">Useful links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Submit your paper <span className="text-xs">↗</span></a></li>
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Shop Books & Journals <span className="text-xs">↗</span></a></li>
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Open access <span className="text-xs">↗</span></a></li>
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">View all products <span className="text-xs">↗</span></a></li>
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Elsevier Connect <span className="text-xs">↗</span></a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">About</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">About Elsevier <span className="text-xs">↗</span></a></li>
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Careers <span className="text-xs">↗</span></a></li>
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Global Press Office <span className="text-xs">↗</span></a></li>
              <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Advertising, reprints & supplements <span className="text-xs">↗</span></a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
               <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Customer support <span className="text-xs">↗</span></a></li>
               <li><a href="#" className="hover:text-blue-400 flex items-center gap-1">Resource center <span className="text-xs">↗</span></a></li>
            </ul>
          </div>
          <div>
             {/* Empty column for spacing or future use if needed, handled by grid */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 gap-6">
           <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex gap-2 items-center">
                    <Globe className="w-4 h-4" />
                    <span>India | English</span>
                </div>
           </div>
           
           <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"><X className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"><Youtube className="w-4 h-4" /></a>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end mt-12 gap-6">
            <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-2">
                     <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                        <path d="M50 90 C 20 90 20 70 30 50 C 10 40 10 20 30 10 C 50 20 70 10 90 20 C 80 40 80 50 70 60 C 90 70 80 90 50 90 Z" />
                    </svg>
                    <span className="text-xl font-serif font-bold text-white tracking-wide">ELSEVIER</span>
                 </div>
                 <p className="text-gray-500 text-xs max-w-2xl">
                    Copyright © 2025 Elsevier, its licensors, and contributors. All rights are reserved, including those for text and data mining, AI training, and similar technologies.
                 </p>
                 <div className="flex flex-wrap gap-4 text-xs text-white">
                    <a href="#" className="hover:underline">Terms & Conditions ↗</a>
                    <a href="#" className="hover:underline">Privacy policy ↗</a>
                    <a href="#" className="hover:underline">Accessibility ↗</a>
                    <a href="#" className="hover:underline">Cookie settings ↗</a>
                 </div>
            </div>
            
            <div className="flex items-center gap-2">
                 <span className="text-orange-500 font-bold text-xl">RELX™</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;