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
import { HiSun, HiMoon } from 'react-icons/hi2';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Hero setActiveTab={setActiveTab} isDarkMode={isDarkMode} />;
      case 'about': return <About setActiveTab={setActiveTab} isDarkMode={isDarkMode} />;
      case 'qualification': return <Qualification isDarkMode={isDarkMode} />;
      case 'skills': return <Skills isDarkMode={isDarkMode} />;
      case 'works': return <RecentWorks isDarkMode={isDarkMode} />;
      case 'services': return <Services isDarkMode={isDarkMode} />;
      case 'contact': return <Contact isDarkMode={isDarkMode} />;
      default: return <Hero setActiveTab={setActiveTab} isDarkMode={isDarkMode} />;
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className={`h-screen overflow-hidden relative flex transition-colors duration-500 ${
      isDarkMode ? 'bg-[#0b0c10] text-gray-100' : 'bg-gray-50 text-zinc-900'
    }`}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-lg ${
          isDarkMode ? 'bg-zinc-900 border-zinc-800 text-yellow-400 hover:border-yellow-400/40' : 'bg-white border-gray-200 text-purple-600 hover:border-purple-600/40'
        }`}
      >
        {isDarkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
      </button>

      <div className="flex-1 xl:pl-20 h-screen flex flex-col justify-between relative">
        {/* شيلنا الـ padding الزيادة من الـ main عشان الـ Hero يقفل مع الحواف بالظبط */}
        <main className="w-full flex-grow overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              // 👈 تنظيف الكلاسات هنا: شيلنا max-w-5xl و mx-auto
              className="w-full min-h-full flex items-center justify-center"
            >
              {/* 👈 تنظيف الحاوية هنا لتصبح كاملة العرض */}
              <div className="w-full">{renderContent()}</div>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer isDarkMode={isDarkMode} />
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: ${isDarkMode ? '#0b0c10' : '#f9fafb'}; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${isDarkMode ? '#1f2937' : '#e5e7eb'}; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #e11d48; }
      `}</style>
    </div>
  );
}