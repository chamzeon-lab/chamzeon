import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ReviewItem } from '../types';

const reviews: ReviewItem[] = [
  {
    id: 1,
    title: "노령견 슬개골 탈구 수술, 정말 감사합니다",
    content: "13살이라 수술이 걱정되었는데, 마취과 전문의 선생님 덕분에 안전하게 수술받고 지금은 산책도 잘 다녀요.",
    petName: "초코",
    petType: "푸들 (13세)",
    treatmentType: "정형외과",
    date: "2024.02.15"
  },
  {
    id: 2,
    title: "새벽 응급 내원, 생명을 구해주셨어요",
    content: "갑자기 호흡곤란이 와서 새벽 3시에 달려갔는데, 신속한 응급처치로 위기를 넘겼습니다. 24시라 너무 다행이에요.",
    petName: "루이",
    petType: "브리티쉬 숏헤어 (4세)",
    treatmentType: "응급의학과",
    date: "2024.03.02"
  },
  {
    id: 3,
    title: "심장병 관리 1년차, 건강하게 유지중입니다",
    content: "심장 전문 원장님의 꼼꼼한 진료 덕분에 약물 관리하며 삶의 질이 훨씬 좋아졌습니다.",
    petName: "마루",
    petType: "말티즈 (9세)",
    treatmentType: "심장내과",
    date: "2024.01.20"
  }
];

const ReviewSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-3 block">Real Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              보호자님들의 소중한 <br />
              <span className="text-amber-600 decoration-amber-200 underline decoration-4 underline-offset-4">치료 후기</span>
            </h2>
          </div>
          <a href="#" className="text-slate-500 hover:text-amber-600 font-medium flex items-center gap-2 group transition-colors">
            후기 더보기 
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {review.treatmentType}
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-1 group-hover:text-amber-700 transition-colors">
                {review.title}
              </h3>
              
              <div className="mb-6 relative flex-grow">
                <Quote className="absolute -top-2 -left-2 text-slate-100 w-8 h-8 -z-10" />
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {review.content}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-auto">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-lg">
                  🐶
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.petName}</p>
                  <p className="text-xs text-slate-500">{review.petType}</p>
                </div>
                <span className="ml-auto text-xs text-slate-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;