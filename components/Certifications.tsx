
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    { id: '01', title: "Professional Video Production", issuer: "Adobe Certified Expert", date: "Jan 2024" },
    { id: '02', title: "Advanced Color Grading", issuer: "Blackmagic Design", date: "Oct 2023" },
    { id: '03', title: "Cinematography Masterclass", issuer: "Global Film Institute", date: "Aug 2023" },
    { id: '04', title: "Motion Graphics Specialist", issuer: "School of Motion", date: "May 2023" },
  ];

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-0 divide-y divide-gray-200">
        {certifications.map((c) => (
          <div key={c.id} className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:px-8 transition-all duration-500 cursor-default">
            <div className="flex items-start gap-12">
              <span className="text-sm font-bold opacity-30 mt-1">{c.id}</span>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-12 h-12 bg-[#F4A825]/10 rounded-xl items-center justify-center">
                   <Award className="w-6 h-6 text-[#F4A825]" />
                </div>
                <h4 className="text-4xl font-black uppercase italic leading-none group-hover:text-[#F4A825] transition-colors">
                  {c.title}
                </h4>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {c.issuer} • {c.date}
              </span>
              <button className="flex items-center gap-2 px-8 py-3 border border-black rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all transform hover:scale-105 active:scale-95">
                Verify <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
