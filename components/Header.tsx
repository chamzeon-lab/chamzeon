import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: '병원소개', href: '#about' },
  { label: '진료안내', href: '#services' },
  { label: '수술센터', href: '#stats' },
  { label: '의료진', href: '#team' },
  { label: '오시는길', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                 isScrolled ? 'border-primary text-primary' : 'border-white text-white'
               }`}>
                 <span className="font-serif font-bold text-xl">N</span>
               </div>
               <div className="flex flex-col">
                 <span className={`text-xl font-bold tracking-tight transition-colors ${
                   isScrolled ? 'text-primary' : 'text-white'
                 }`}>
                   NOBLE
                 </span>
                 <span className={`text-xs tracking-widest transition-colors ${
                   isScrolled ? 'text-slate-600' : 'text-slate-200'
                 }`}>
                   ANIMAL MEDICAL CENTER
                 </span>
               </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? 'text-slate-800' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="tel:02-1234-5678"
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                isScrolled 
                  ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-primary'
              }`}
            >
              <Phone size={16} />
              <span className="text-sm font-bold">24시 응급콜</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t">
          <div className="flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-6 py-3 text-slate-800 hover:bg-slate-50 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-6 py-3">
              <a 
                href="tel:02-1234-5678"
                className="flex justify-center items-center gap-2 w-full bg-primary text-white py-3 rounded-md"
              >
                <Phone size={18} />
                24시 응급 상담전화
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;