import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      {/* Map Section */}
      <div className="w-full h-80 bg-slate-800 relative group overflow-hidden">
        {/* Placeholder for Map - In production use Google Maps API or Kakao Maps */}
        <img 
            src="https://picsum.photos/1920/400?grayscale" 
            alt="Map Location" 
            className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <a 
                href="https://map.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/90 backdrop-blur text-slate-900 px-6 py-3 rounded-full shadow-lg font-bold hover:bg-amber-500 hover:text-white transition-colors flex items-center gap-2"
            >
                <MapPin size={18} />
                지도에서 병원 위치 보기
            </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">NOBLE</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              노블 24시 동물의료센터는 생명을 존중하는 마음으로 최상의 진료 서비스를 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm">서울시 강남구 도산대로 123<br/>노블타워 1-3층</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-500 flex-shrink-0" size={18} />
                <span className="text-sm">02-1234-5678</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="text-amber-500 mt-1 flex-shrink-0" size={18} />
                <div className="text-sm">
                  <strong className="text-white block mb-1">365일 24시간 응급진료</strong>
                  <span className="block mb-2">연중무휴</span>
                  <strong className="text-white block mb-1">일반 진료</strong>
                  <span>오전 10:00 - 오후 09:00</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">병원 소개</a></li>
              <li><a href="#team" className="hover:text-amber-400 transition-colors">의료진 소개</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">진료 과목</a></li>
              <li><a href="#stats" className="hover:text-amber-400 transition-colors">수술 센터</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">비급여 진료비 안내</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500">
          <p>© 2024 Noble Animal Medical Center. All rights reserved.</p>
          <p className="mt-2">사업자등록번호: 123-45-67890 | 대표: 김노블</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;