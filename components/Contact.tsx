
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-black text-white rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4A825] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 className="text-6xl font-black uppercase mb-8 leading-none">
              Let's craft <br /> <span className="text-[#F4A825]">Magic</span> together.
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether it's a feature film, a commercial project, or a creative collaboration, my lens is ready to capture your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#F4A825]" />
                </div>
                <span className="text-xl font-medium">hello@visualpoetry.art</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#F4A825]" />
                </div>
                <span className="text-xl font-medium">+1 (234) 567-890</span>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="FULL NAME" 
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:border-[#F4A825] focus:outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:border-[#F4A825] focus:outline-none transition-all"
              />
            </div>
            <textarea 
              rows={5} 
              placeholder="YOUR MESSAGE" 
              className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:border-[#F4A825] focus:outline-none transition-all resize-none"
            ></textarea>
            <button className="w-full bg-[#F4A825] text-black font-black uppercase tracking-widest py-6 rounded-3xl hover:bg-white hover:scale-[1.02] transition-all transform active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
