import React from 'react';
import { ArrowRight, Activity, Heart, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Veterinary Care"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <span className="h-px w-12 bg-amber-500 inline-block"></span>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Premier Veterinary Center</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-shadow-lg">
            생명을 존중하는 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              최상의 진료
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
            365일 24시간, 우리 아이가 아플 때 언제나 곁에 있겠습니다.
            대학병원급 최첨단 장비와 분야별 전문 의료진이 함께합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg shadow-amber-900/20"
            >
              진료 예약하기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-white/20 transition-all"
            >
              진료 과목 보기
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
             <div className="text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                   <Activity className="text-amber-500" size={20} />
                   <span className="font-bold text-lg">24h</span>
                </div>
                <p className="text-sm text-slate-400">365일 응급진료</p>
             </div>
             <div className="text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                   <ShieldCheck className="text-amber-500" size={20} />
                   <span className="font-bold text-lg">Specialist</span>
                </div>
                <p className="text-sm text-slate-400">분과별 전문의</p>
             </div>
             <div className="text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                   <Heart className="text-amber-500" size={20} />
                   <span className="font-bold text-lg">Care</span>
                </div>
                <p className="text-sm text-slate-400">환자 중심 케어</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;