import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute top-[-20px] left-[-20px] w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
             <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
             
             <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/400/500?random=1" alt="Hospital Interior" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
               <img src="https://picsum.photos/400/500?random=2" alt="Surgery Room" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
             </div>
          </div>

          <div>
            <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              반려동물의 평생 주치의, <br />
              <span className="text-amber-600">노블 동물의료센터</span>입니다.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              단순한 치료를 넘어, 반려동물과 보호자의 마음까지 치유합니다. 
              최고의 시설에서 이뤄지는 전문적인 의료 서비스와 따뜻한 케어를 경험해보세요.
            </p>

            <ul className="space-y-4">
              {[
                "24시간 수의사 상주 응급 시스템",
                "대학병원 출신 분과별 전문 의료진",
                "High-End급 최신 의료 장비 보유",
                "보호자 전용 프라이빗 대기실 운영"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-600 flex-shrink-0" size={20} />
                  <span className="text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a href="#team" className="text-amber-700 font-bold hover:text-amber-900 inline-flex items-center gap-2 border-b-2 border-amber-200 pb-1 hover:border-amber-600 transition-colors">
                의료진 소개 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;