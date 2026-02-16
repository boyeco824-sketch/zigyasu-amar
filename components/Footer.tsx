
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
        <div className="flex items-center gap-2">
           <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-black text-lg italic">ZA</span>
          </div>
          <span className="font-heading font-black text-2xl tracking-tighter uppercase">ZIGYASU AMAR</span>
        </div>

        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#home" className="hover:text-[#F4A825] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#F4A825] transition-colors">About</a>
          <a href="#portfolio" className="hover:text-[#F4A825] transition-colors">Portfolio</a>
          <a href="#certifications" className="hover:text-[#F4A825] transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-[#F4A825] transition-colors">Contact</a>
        </div>
      </div>

      <div className="relative">
        <h2 className="text-[12vw] md:text-[22vw] font-black uppercase text-center leading-[0.7] opacity-[0.05] mb-[-4vw] select-none pointer-events-none tracking-tighter">
          vidéaste
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-medium text-gray-400 gap-4 pt-12 border-t border-gray-100">
        <p>© 2024 ZIGYASU AMAR. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 uppercase tracking-widest">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
