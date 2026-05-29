'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Qualification from '@/components/Qualification';
import Skills from '@/components/Skills';
import RecentWorks from '@/components/RecentWorks';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certificates from '@/components/Certificates';
import {
  HiSun,
  HiMoon,
  HiLanguage,
  HiChatBubbleLeftRight,
} from 'react-icons/hi2'; // 2. إضافة أيقونة الدردشة
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { lang, setLang, dir } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero setActiveTab={setActiveTab} isDarkMode={isDarkMode} />;
      case 'about':
        return <About setActiveTab={setActiveTab} isDarkMode={isDarkMode} />;
      case 'qualification':
        return <Qualification isDarkMode={isDarkMode} />;
      case 'skills':
        return <Skills isDarkMode={isDarkMode} />;
      case 'works':
        return <RecentWorks isDarkMode={isDarkMode} />;
      case 'certificates':
        return <Certificates isDarkMode={isDarkMode} />;
      case 'services':
        return <Services isDarkMode={isDarkMode} />;
      case 'contact':
        return <Contact isDarkMode={isDarkMode} />;
      default:
        return <Hero setActiveTab={setActiveTab} isDarkMode={isDarkMode} />;
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div
      className={`h-screen overflow-hidden relative flex transition-colors duration-700 ${
        isDarkMode
          ? 'bg-slate-950 text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
      />

      {/* حاوية الأزرار العلوية */}
      <div
        className={`fixed top-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 flex items-center gap-3`}
      >
       

        {/* زر تبديل اللغة */}
        <button
          onClick={toggleLanguage}
          className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-md ${
            isDarkMode
              ? 'bg-slate-900/80 border-slate-800 text-cyan-400 hover:border-cyan-500/50'
              : 'bg-white/80 border-slate-200 text-cyan-600 hover:border-cyan-400/50'
          }`}
          title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
          <HiLanguage size={22} />
        </button>

        {/* زر تبديل الوضع الداكن */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-md ${
            isDarkMode
              ? 'bg-slate-900/80 border-slate-800 text-yellow-400 hover:border-cyan-500/50'
              : 'bg-white/80 border-slate-200 text-cyan-600 hover:border-cyan-400/50'
          }`}
        >
          {isDarkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
        </button>
      </div>

      

      {/* تعديل الـ Padding بناءً على الاتجاه */}
      <div
        className={`flex-1 ${dir === 'rtl' ? 'xl:pr-20' : 'xl:pl-20'} h-screen flex flex-col justify-between relative`}
      >
        <main className="w-full grow overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full min-h-full flex items-center justify-center"
            >
              <div className="w-full">{renderContent()}</div>
            </motion.div>
          </AnimatePresence>
          <Footer isDarkMode={isDarkMode} />
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#020617' : '#f8fafc'};
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? '#1e293b' : '#e2e8f0'};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #06b6d4;
        }
      `}</style>
    </div>
  );
}
