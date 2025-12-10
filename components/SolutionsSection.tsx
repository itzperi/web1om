import React from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  return (
    <div className="bg-white py-20 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-gray-900">
          Innovative solutions that help advance human progress
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Academic & Government - Text Heavy */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold border-l-4 border-black pl-4">Academic & Government</h3>
            <p className="text-gray-700">
              Ensuring quality research to accelerate progress for the benefit of all.
            </p>
            <div className="inline-block p-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="pt-8 space-y-4">
              <h4 className="font-bold text-lg">Discover our products</h4>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-elsevier-orange flex-shrink-0"></div>
                <span className="text-lg text-gray-800 group-hover:text-elsevier-blue group-hover:underline">ScienceDirect</span>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-elsevier-orange flex-shrink-0"></div>
                <span className="text-lg text-gray-800 group-hover:text-elsevier-blue group-hover:underline">Scopus</span>
              </div>
            </div>
          </div>

          {/* Health - Image Card */}
          <div className="relative group cursor-pointer h-full min-h-[400px] overflow-hidden">
            <h3 className="text-xl font-bold mb-6">Health</h3>
            <div className="bg-sky-100 h-full relative overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/health/600/800" 
                    alt="Health Professional" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                     <p className="text-white text-lg font-medium mb-4">Shaping a healthier and sustainable future for the benefit of every patient.</p>
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600">
                         <ArrowRight className="w-4 h-4" />
                     </div>
                </div>
                 {/* Decorative geometric shape overlay */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-teal-500 opacity-80 mix-blend-multiply clip-triangle"></div>
            </div>
          </div>

          {/* Industry - Image Card */}
           <div className="relative group cursor-pointer h-full min-h-[400px] overflow-hidden">
            <h3 className="text-xl font-bold mb-6">Industry</h3>
             <div className="bg-gray-100 h-full relative overflow-hidden">
                 <img 
                    src="https://picsum.photos/seed/industry/600/800" 
                    alt="Industry Professional" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                     <p className="text-white text-lg font-medium mb-4">Transforming complexity into scientific insight with trusted content, data and tools.</p>
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600">
                         <ArrowRight className="w-4 h-4" />
                     </div>
                </div>
                 {/* Decorative geometric shape overlay */}
                 <div className="absolute bottom-0 right-0 flex">
                     <div className="w-12 h-24 bg-green-700 opacity-80"></div>
                     <div className="w-12 h-24 bg-green-900 opacity-80"></div>
                 </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
