import React from 'react';
import { Stethoscope, Siren, Bone, Microscope, HeartPulse, ScanEye } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "24시 응급센터",
    description: "365일 24시간 언제나 열려있는 응급의료 시스템. 골든타임을 지킵니다.",
    icon: <Siren className="w-8 h-8" />,
  },
  {
    title: "외과 수술센터",
    description: "정형외과, 신경외과, 일반외과 등 분과별 전문의의 정밀한 수술 집도.",
    icon: <Bone className="w-8 h-8" />,
  },
  {
    title: "내과 심화진료",
    description: "심장내과, 신장내과, 내분비내과 등 만성질환 및 노령동물 전문 케어.",
    icon: <Stethoscope className="w-8 h-8" />,
  },
  {
    title: "영상 의학센터",
    description: "CT, MRI, 초음파 등 최상급 영상 장비를 통한 정확한 진단.",
    icon: <ScanEye className="w-8 h-8" />,
  },
  {
    title: "임상 병리센터",
    description: "원내 자체 임상병리실 운영으로 신속하고 정확한 검사 결과 제공.",
    icon: <Microscope className="w-8 h-8" />,
  },
  {
    title: "심장 전문센터",
    description: "심장 초음파 및 심전도 모니터링을 통한 전문적인 심장 질환 관리.",
    icon: <HeartPulse className="w-8 h-8" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            전문 진료 과목
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            각 분야 최고의 전문 의료진이 협진 시스템을 통해 정확하게 진단하고 치료합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;