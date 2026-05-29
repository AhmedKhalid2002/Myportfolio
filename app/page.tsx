'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Sidebar'; // تأكد من صحة المسار
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

      {/* زر تبديل الوضع */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-md ${
          isDarkMode
            ? 'bg-slate-900/80 border-slate-800 text-yellow-400 hover:border-cyan-500/50'
            : 'bg-white/80 border-slate-200 text-cyan-600 hover:border-cyan-400/50'
        }`}
      >
        {isDarkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
      </button>

      <div className="flex-1 xl:pl-20 h-screen flex flex-col justify-between relative">
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
        } /* slate-950 / slate-50 */
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? '#1e293b' : '#e2e8f0'};
          border-radius: 10px;
        } /* slate-800 / slate-200 */
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #06b6d4;
        } /* cyan-500 */
      `}</style>
    </div>
  );
}
