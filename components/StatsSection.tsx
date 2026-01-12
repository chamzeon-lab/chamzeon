import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { StatItem } from '../types';

const statsData: StatItem[] = [
  { id: 1, label: "재활 치료 케이스", value: 8900, suffix: "+" },
  { id: 2, label: "고난이도 수술 성공률", value: 99, suffix: "%" },
  { id: 3, label: "보유 첨단 의료장비", value: 45, suffix: "종" },
];

const Counter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ value, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = Math.max(duration / end, 5); 
      
      const timer = setInterval(() => {
        // Dynamic increment for large numbers to ensure it finishes in time
        const jump = Math.ceil(end / (duration / 20));
        start += jump;
        
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix && <span className="text-lg md:text-2xl ml-1 align-top">{suffix}</span>}
    </span>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
         <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-blue-900 blur-3xl mix-blend-screen"></div>
         <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-amber-900 blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-3 block">Noble Medical Record</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            숫자로 증명하는 <span className="text-amber-400 italic">탁월함</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            수만 건의 임상 경험을 바탕으로 반려동물에게 가장 안전하고 정확한 치료를 약속합니다.
          </p>
        </div>

        {/* Hero Stat: Cumulative Surgeries */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 relative"
        >
            <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full transform scale-75"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/30 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden group hover:border-amber-500/60 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
                
                <h3 className="text-amber-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Total Surgery Cases</h3>
                <div className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight flex justify-center items-start gap-2">
                   <Counter value={25483} duration={2500} />
                   <span className="text-amber-500 text-4xl md:text-6xl mt-2">+</span>
                </div>
                <p className="text-slate-300 text-lg md:text-xl font-light">
                    안전한 마취와 정확한 수술로 쌓아온 <br className="md:hidden"/> <strong className="text-white font-medium">누적 수술 건수</strong>
                </p>
                
                {/* Decorative sheen effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine transition-all"></div>
            </div>
        </motion.div>

        {/* Secondary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl text-center hover:bg-slate-800 transition-all group"
            >
              <div className="mb-4 font-serif text-4xl md:text-5xl font-bold text-amber-100 group-hover:text-amber-400 transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="h-px w-8 bg-slate-600 mx-auto mb-4 group-hover:w-16 group-hover:bg-amber-500 transition-all duration-300"></div>
              <h3 className="text-base font-medium text-slate-400 group-hover:text-white transition-colors">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;