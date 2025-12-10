import React from 'react';
import { ArrowRight } from 'lucide-react';

const InsightsSection: React.FC = () => {
  return (
    <div className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-serif mb-12 text-gray-900">Insights for better outcomes</h2>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Featured Insight */}
            <div className="lg:w-1/2 relative group cursor-pointer overflow-hidden bg-gray-900 text-white min-h-[500px]">
                 <img 
                    src="https://picsum.photos/seed/researcher/800/800" 
                    alt="Researcher" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8 md:p-12">
                     <h3 className="text-3xl font-bold mb-4 leading-tight">
                         Shaping the Researcher of the Future: Confidence, collaboration and AI
                     </h3>
                     <p className="mb-8 text-gray-200">
                         Global researchers adapt to change and embrace AI to advance knowledge and impact society.
                     </p>
                     <div className="flex items-center gap-2 text-white font-bold hover:underline">
                         Read now <ArrowRight className="w-5 h-5" />
                     </div>
                 </div>
            </div>

            {/* Side List */}
            <div className="lg:w-1/2 flex flex-col gap-6">
                
                {/* Item 1 */}
                <div className="flex gap-6 items-center group cursor-pointer">
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                         <img src="https://picsum.photos/seed/woman/200/200" alt="Connect" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">Connect</span>
                        <h4 className="text-lg font-medium text-gray-900 group-hover:text-elsevier-blue transition-colors mb-2">
                            If you want your research to have impact, don't underestimate the power of communication
                        </h4>
                        <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mt-2">
                             <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                 {/* Item 2 */}
                 <div className="flex gap-6 items-center group cursor-pointer">
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                         <img src="https://picsum.photos/seed/meeting/200/200" alt="Connect" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">Connect</span>
                        <h4 className="text-lg font-medium text-gray-900 group-hover:text-elsevier-blue transition-colors mb-2">
                            Helping early career researchers with essential publishing skills
                        </h4>
                        <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mt-2">
                             <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                 {/* Item 3 */}
                 <div className="flex gap-6 items-center group cursor-pointer">
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                         <img src="https://picsum.photos/seed/man/200/200" alt="Connect" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">Connect</span>
                        <h4 className="text-lg font-medium text-gray-900 group-hover:text-elsevier-blue transition-colors mb-2">
                            With the rise of LLMs, what should we really be concerned about?
                        </h4>
                        <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mt-2">
                             <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
