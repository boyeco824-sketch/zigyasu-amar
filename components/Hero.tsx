
import React from 'react';
import { Youtube, Instagram, Facebook, Twitter, ArrowUpRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Image Section */}
        <div className="relative order-1 lg:order-1 reveal">
          <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] bg-gray-200 shadow-2xl group">
             <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000" 
              alt="Zigyasu Amar Portrait"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
            />
            {/* Overlay badge with pulse effect */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center animate-pulse">
              <Globe className="w-6 h-6 text-white" />
            </div>
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F4A825]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Floating Elements with Animation */}
          <div className="absolute -right-8 bottom-1/4 flex flex-col gap-4 z-20 animate-float">
            <div className="w-16 h-16 rounded-3xl overflow-hidden border-4 border-[#F5F5F3] shadow-xl hover:scale-110 transition-transform cursor-pointer">
               <img src="https://picsum.photos/id/64/200" alt="Work 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 rounded-3xl overflow-hidden border-4 border-[#F5F5F3] shadow-xl hover:scale-110 transition-transform cursor-pointer">
               <img src="https://picsum.photos/id/65/200" alt="Work 2" className="w-full h-full object-cover" />
            </div>
            <button className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:bg-[#F4A825] hover:text-black">
              <ArrowUpRight className="w-8 h-8" />
            </button>
          </div>

          {/* Decorative SVG */}
          <div className="absolute -top-10 right-10 opacity-10 pointer-events-none rotate-12">
             <svg width="240" height="120" viewBox="0 0 200 100" fill="none">
                <path d="M10 50Q50 10 90 50T170 50" stroke="black" strokeWidth="2" fill="none" />
             </svg>
          </div>
        </div>

        {/* Text Section */}
        <div className="relative z-10 order-2 lg:order-2">
          <div className="hero-title-mask mb-2">
            <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85] tracking-tight uppercase">
              <span className="hero-title-part" style={{ animationDelay: '0.1s' }}>zigyasu</span>
            </h1>
          </div>
          <div className="hero-title-mask mb-8">
            <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85] tracking-tight uppercase">
              <span className="hero-title-part text-[#F4A825]" style={{ animationDelay: '0.3s' }}>amar</span>
            </h1>
          </div>
          
          <div className="max-w-md ml-auto md:ml-0 md:pl-2 reveal delay-500">
             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I believe that true success is built on a foundation of relentless hard work and genuine human kindness. My journey is defined by the discipline of consistency and the warmth of empathy, creating a professional path that values people as much as results.
            </p>
            
            <div className="flex gap-4 mb-12">
              {[Youtube, Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-[#F4A825] hover:border-[#F4A825] hover:text-black transition-all transform hover:-translate-y-1">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="flex gap-16">
              <div className="group">
                <span className="block text-4xl font-black italic group-hover:text-[#F4A825] transition-colors">+250k</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest leading-tight block mt-1">
                  Videos reaching a global audience with lasting impact
                </span>
              </div>
              <div className="group">
                <span className="block text-4xl font-black italic group-hover:text-[#F4A825] transition-colors">+800k</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest leading-tight block mt-1">
                  Hours watched, engaging storytelling that resonates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
