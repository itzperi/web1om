import React from 'react';
import { ArrowRight } from 'lucide-react';

const CareerSection: React.FC = () => {
  return (
    <div className="bg-[#121212] py-20 relative overflow-hidden text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-black to-black"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                        Help shape human progress with a career at Elsevier
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Join Elsevier and thrive in a workplace where your work makes a difference, you grow every day and you collaborate with caring colleagues.
                    </p>
                    <button className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-colors">
                        Explore careers at Elsevier <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="lg:w-1/2 relative">
                    {/* Stylized Image container */}
                    <div className="relative z-10 p-4 bg-yellow-500/10 backdrop-blur-sm rounded-lg transform translate-x-4 translate-y-4"></div>
                    <div className="relative overflow-hidden shadow-2xl">
                         {/* Using a jagged polygon clip path to simulate the design in the screenshot */}
                        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 absolute -inset-4 opacity-50 blur-xl"></div>
                        <img 
                            src="https://picsum.photos/seed/happy-team/600/400" 
                            alt="Elsevier Team" 
                            className="relative z-10 w-full h-auto object-cover" 
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CareerSection;
