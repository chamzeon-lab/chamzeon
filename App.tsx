import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import AboutSection from './components/AboutSection';
import ReviewSection from './components/ReviewSection';
import QuickMenu from './components/QuickMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900 relative">
      <Header />
      <QuickMenu />
      <main>
        <Hero />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <TeamSection />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;