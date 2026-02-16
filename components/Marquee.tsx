
import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 border-y border-gray-200 flex select-none">
      <div className={`flex animate-marquee ${reverse ? 'flex-row-reverse animate-marquee-reverse' : ''}`}>
        <span className="text-8xl md:text-[10rem] font-black uppercase italic tracking-tighter mx-4 opacity-10">
          {text}
        </span>
        <span className="text-8xl md:text-[10rem] font-black uppercase italic tracking-tighter mx-4 opacity-10">
          {text}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
