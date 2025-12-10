import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { IMPACT_RESOURCES } from '../constants';

const ImpactMakers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Academic & Government');
  
  const filteredResources = IMPACT_RESOURCES.filter(r => r.category === activeCategory);

  return (
    <div className="py-20 bg-white">
      {/* Orange Banner */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="bg-elsevier-orange text-white rounded-none overflow-hidden relative min-h-[300px] flex items-center">
            <div className="absolute inset-0 z-0">
                 <img 
                    src="https://picsum.photos/seed/garden/1200/400" 
                    alt="Sustainability" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-50"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-elsevier-orange via-elsevier-orange/90 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-16 w-full md:w-2/3">
                <h2 className="text-4xl md:text-5xl font-serif mb-8">Championing inclusion & sustainability</h2>
                <p className="text-xl font-serif italic mb-8">Advancing human progress together</p>
                <div className="flex items-center gap-4">
                     <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition">
                        Find out more <ArrowRight className="w-4 h-4" />
                     </button>
                     <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <span className="sr-only">Pause</span>
                         <div className="flex gap-1">
                             <div className="w-1 h-4 bg-white"></div>
                             <div className="w-1 h-4 bg-white"></div>
                         </div>
                     </button>
                </div>
            </div>
        </div>
      </div>

      {/* Impact Makers Content */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-serif mb-10 text-gray-900">Resources for impact makers</h2>
        
        {/* Tab-like Filters */}
        <div className="flex border-b border-gray-300 mb-8">
            {['Academic & Government', 'Health', 'Industry'].map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`pb-4 px-1 mr-8 text-sm font-bold uppercase tracking-wider transition-all border-b-2 
                        ${activeCategory === cat ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((res, idx) => (
                <div key={idx} className="bg-[#F4F4F4] p-8 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer group min-h-[280px]">
                    <div>
                        <div className="flex items-center gap-3 mb-4 text-gray-800">
                             {/* Icons would be dynamic based on role, using generic for now */}
                             <span className="p-2 bg-white rounded-full"><Play className="w-4 h-4" /></span>
                             <span className="font-bold">{res.role}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            {res.description}
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                             <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactMakers;
