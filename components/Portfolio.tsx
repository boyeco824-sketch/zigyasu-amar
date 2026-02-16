
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { id: 1, title: "Modernist Curves", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", span: "row-span-2" },
    { id: 2, title: "Urban Isolation", img: "https://images.unsplash.com/photo-1518005020480-1097c02f09ee?auto=format&fit=crop&q=80&w=800", span: "" },
    { id: 3, title: "Symmetry", img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=800", span: "" },
    { id: 4, title: "Perspective", img: "https://images.unsplash.com/photo-1515542706396-224a1571d701?auto=format&fit=crop&q=80&w=800", span: "col-span-1" },
    { id: 5, title: "The Golden Leaf", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800", span: "row-span-1", accent: true },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="relative mb-16 reveal">
        <h2 className="text-8xl md:text-[14rem] font-black uppercase text-center opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          Portfolio
        </h2>
        <div className="relative z-10 text-center">
          <h3 className="text-5xl font-black uppercase">Recent Creations</h3>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Exploring the intersection of architecture, emotion, and motion through a minimalist lens.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((p, i) => (
          <div 
            key={p.id} 
            className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-100 ${p.span} transition-all duration-700 hover:shadow-2xl reveal delay-${(i % 3) * 100}`}
          >
            <img 
              src={p.img} 
              alt={p.title} 
              className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ${p.accent ? 'grayscale-0' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0">
               <span className="text-[#F4A825] text-xs font-bold tracking-widest uppercase mb-2 block transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">Videography</span>
               <h4 className="text-white text-2xl font-black uppercase italic transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">{p.title}</h4>
               <button className="mt-4 w-fit bg-white text-black text-xs font-bold px-6 py-2 rounded-full hover:bg-[#F4A825] transition-all transform hover:scale-105 active:scale-95 opacity-0 group-hover:opacity-100 delay-300">
                  View Case Study
               </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
