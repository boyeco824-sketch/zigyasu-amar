
import React from 'react';

const Exhibitions: React.FC = () => {
  const events = [
    { id: '01', title: "Cinematic Visions Unveiled", location: "Madrid Gallery, Spain", date: "21 Nov 2023" },
    { id: '02', title: "Frames in Motion", location: "Manchester Museum, UK", date: "20 Nov 2023" },
    { id: '03', title: "Journey Through Time", location: "Milan Gallery, Italy", date: "19 Nov 2023" },
    { id: '04', title: "Experimental Narratives", location: "Paris Museum, France", date: "18 Nov 2023" },
  ];

  return (
    <section id="exhibitions" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-0 divide-y divide-gray-200">
        {events.map((e) => (
          <div key={e.id} className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:px-8 transition-all duration-500 cursor-default">
            <div className="flex items-start gap-12">
              <span className="text-sm font-bold opacity-30 mt-1">{e.id}</span>
              <div>
                <h4 className="text-4xl font-black uppercase italic leading-none group-hover:text-[#F4A825] transition-colors">
                  {e.title}
                </h4>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {e.location}, {e.date}
              </span>
              <button className="px-8 py-3 border border-black rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all transform hover:scale-105 active:scale-95">
                Buy Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exhibitions;
