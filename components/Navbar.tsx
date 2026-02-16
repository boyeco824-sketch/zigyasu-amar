
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Portfolio', 'Certifications', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 flex justify-between items-center ${
        isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700">
          <span className="text-white font-black text-xs">ZA</span>
        </div>
        <span className="font-heading font-bold hidden sm:inline uppercase tracking-widest transition-colors group-hover:text-[#F4A825]">ZIGYASU AMAR</span>
      </div>

      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-sm font-medium hover:text-[#F4A825] transition-colors relative group py-1"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A825] transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs font-medium">
        <button className="bg-[#F4A825] text-black px-6 py-2.5 rounded-full font-bold hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-lg shadow-[#F4A825]/20">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
