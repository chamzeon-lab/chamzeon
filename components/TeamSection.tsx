import React from 'react';
import { DoctorProfile } from '../types';

const doctors: DoctorProfile[] = [
  {
    name: "김노블 대표원장",
    position: "Chief of Surgery",
    specialty: "일반외과 / 정형외과 / 신경외과",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "이청담 원장",
    position: "Head of Internal Medicine",
    specialty: "내과 심화진료 / 심장내과 / 노령견 케어",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-33318b703199?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "박수의 과장",
    position: "Veterinary Specialist",
    specialty: "영상의학 / 고양이 전문 클리닉",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-3 block">Medical Team</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            최고의 실력을 갖춘 <br className="md:hidden" />
            <span className="text-serif italic text-amber-700">전문 의료진</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
             각 분야의 대학병원 출신 전문 수의사들이 아이들의 건강을 위해 끊임없이 연구하고 진료합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor, index) => (
            <div key={index} className="group relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-slate-100 mb-6 relative">
                 <img 
                   src={doctor.imageUrl} 
                   alt={doctor.name} 
                   className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm font-light">
                       "생명 존중을 최우선 가치로 여기며, <br/>정직하고 정확한 진료를 약속합니다."
                    </p>
                 </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-amber-700 font-medium text-sm mb-2 uppercase tracking-wider">{doctor.position}</p>
                <div className="w-8 h-px bg-slate-200 mx-auto my-3"></div>
                <p className="text-slate-500 text-sm">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <a href="#contact" className="inline-block border border-slate-900 text-slate-900 px-8 py-3 hover:bg-slate-900 hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-widest">
                 의료진 전체보기
             </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;