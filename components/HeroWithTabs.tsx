import React, { useState } from 'react';
import { HERO_TABS } from '../constants';
import { ArrowRight } from 'lucide-react';

const HeroWithTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('publish');

  const activeContent = HERO_TABS.find(t => t.id === activeTab)?.content || [];

  return (
    <div className="relative bg-[#F4F4F4]">
      {/* Hero Section */}
      <div className="relative bg-[#1f1f1f] text-white overflow-hidden min-h-[500px] flex flex-col">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-60">
           <img 
            src="https://picsum.photos/seed/science/1920/800" 
            alt="Scientific Research" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20 pb-40">
          <div className="max-w-2xl">
            {/* Carousel Dots */}
            <div className="flex gap-2 mb-6">
              <div className="w-8 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-light leading-tight mb-4">
              Move from curiosity to discovery faster
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Advancing human progress together
            </p>
            <button className="bg-elsevier-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-colors">
              Discover LeapSpace <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Bar - Positioned at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-[#363636] text-gray-300">
            <div className="container mx-auto px-4 md:px-8">
              <div className="flex flex-wrap md:flex-nowrap">
                {HERO_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex-1 flex items-center justify-center gap-3 py-4 px-4 text-sm font-medium transition-all
                        ${isActive 
                          ? 'bg-[#F4F4F4] text-gray-900 border-t-4 border-t-transparent' 
                          : 'hover:bg-[#4a4a4a] hover:text-white border-t-4 border-t-transparent hover:border-t-elsevier-orange'}
                      `}
                    >
                      <span className={`${isActive ? 'text-elsevier-orange' : 'text-gray-400'}`}>
                        {tab.icon}
                      </span>
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="bg-[#F4F4F4] py-12 md:py-16 min-h-[400px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeContent.map((card, idx) => (
              <div key={idx} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 font-sans group-hover:text-elsevier-blue transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-4">
                  <div className="w-8 h-8 rounded-full border border-elsevier-blue flex items-center justify-center text-elsevier-blue group-hover:bg-elsevier-blue group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithTabs;
