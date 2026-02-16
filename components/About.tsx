
import React from 'react';
import { Target, Heart, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { icon: Target, title: "Hard Work", text: "Success is a byproduct of relentless dedication and refined craft." },
    { icon: Heart, title: "Humanity", text: "Behind every lens is a story that breathes life and shared emotion." },
    { icon: Shield, title: "Ethics", text: "Integrity is the foundation of every collaboration and frame." },
    { icon: Zap, title: "Growth", text: "Stagnation is the enemy of art. We evolve with every capture." }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="relative z-10 rounded-[3rem] overflow-hidden h-[600px] border-8 border-[#F5F5F3] group">
               <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000" 
                alt="Working photographer" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative crosshairs with subtle animation */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-black animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-black animate-pulse"></div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-black uppercase mb-8 leading-none reveal">
              Modern yet <span className="text-[#F4A825]">Timeless</span>.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed reveal delay-100">
              I believe in the power of visual storytelling to bridge the gap between abstract ideas and human reality. My work is a testament to the belief that consistency and kindness are the strongest tools in a creative's arsenal.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div key={i} className={`group hover:bg-[#F5F5F3] p-6 rounded-3xl transition-all duration-500 reveal delay-${(i + 2) * 100}`}>
                  <v.icon className="w-8 h-8 mb-4 text-[#F4A825] group-hover:scale-125 transition-transform duration-500" />
                  <h3 className="text-xl font-bold mb-2 uppercase group-hover:translate-x-1 transition-transform">{v.title}</h3>
                  <p className="text-gray-500 leading-snug">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
