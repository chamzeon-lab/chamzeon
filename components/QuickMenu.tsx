import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, ArrowUp, MonitorPlay } from 'lucide-react';

const QuickMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed right-4 md:right-8 bottom-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 flex flex-col gap-2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Kakao Consult */}
      <a 
        href="#" 
        className="flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#FEE500] hover:bg-[#FDD835] text-slate-900 rounded-full md:rounded-xl shadow-lg transition-transform hover:scale-110 group relative"
        aria-label="카카오톡 상담"
      >
        <MessageCircle size={24} className="mb-0.5" />
        <span className="text-[10px] font-bold hidden md:block">Kakao</span>
        
        {/* Tooltip for Desktop */}
        <span className="absolute right-full mr-3 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          카카오톡 상담
        </span>
      </a>

      {/* Blog */}
      <a 
        href="#" 
        className="hidden md:flex flex-col items-center justify-center w-16 h-16 bg-[#03C75A] hover:bg-[#02b150] text-white rounded-xl shadow-lg transition-transform hover:scale-110 group relative"
        aria-label="네이버 블로그"
      >
        <span className="font-black text-xl mb-0.5">N</span>
        <span className="text-[10px] font-bold">Blog</span>
         <span className="absolute right-full mr-3 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          진료 케이스
        </span>
      </a>

      {/* Youtube */}
      <a 
        href="#" 
        className="hidden md:flex flex-col items-center justify-center w-16 h-16 bg-[#FF0000] hover:bg-[#D30000] text-white rounded-xl shadow-lg transition-transform hover:scale-110 group relative"
        aria-label="유튜브 채널"
      >
        <MonitorPlay size={24} className="mb-0.5" />
        <span className="text-[10px] font-bold">TV</span>
         <span className="absolute right-full mr-3 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          노블 TV
        </span>
      </a>

      {/* Location */}
      <a 
        href="#contact" 
        className="hidden md:flex flex-col items-center justify-center w-16 h-16 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl shadow-lg transition-transform hover:scale-110 group relative"
        aria-label="오시는 길"
      >
        <MapPin size={24} className="mb-0.5 text-amber-600" />
        <span className="text-[10px] font-bold">Map</span>
         <span className="absolute right-full mr-3 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          오시는 길
        </span>
      </a>

      {/* Call (Mobile Only additional button, though header has one) */}
      <a 
        href="tel:02-1234-5678" 
        className="md:hidden flex flex-col items-center justify-center w-14 h-14 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="전화 연결"
      >
        <Phone size={24} />
      </a>

      {/* Top Button */}
      <button 
        onClick={scrollToTop}
        className="flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate-800 hover:bg-slate-700 text-white rounded-full md:rounded-xl shadow-lg transition-transform hover:scale-110 mt-2"
        aria-label="맨 위로"
      >
        <ArrowUp size={24} />
        <span className="text-[10px] font-bold hidden md:block">TOP</span>
      </button>

    </div>
  );
};

export default QuickMenu;