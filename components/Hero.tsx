'use client';

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import dynamic from 'next/dynamic';
import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
});

interface HeroProps {
  isDarkMode: boolean;
  setActiveTab: (tab: string) => void;
}

export default function Hero({ isDarkMode, setActiveTab }: HeroProps) {
  const { profile } = portfolioData;

  return (
    <section
      className={`relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden z-0 transition-all duration-700 ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950' // خلفية داكنة بلمسة زرقاء
          : 'bg-gradient-to-br from-slate-50 via-white to-cyan-50' // خلفية فاتحة مثلجة
      }`}
    >
      {/* استدعاء الخلفية */}
      <ParticlesBackground />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 relative py-20">
        
        {/* الجزء النصفي - التفاصيل */}
        <motion.div
          className="lg:col-span-7 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* عنوان فرعي صغير */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md ${
              isDarkMode
                ? 'bg-cyan-900/20 border-cyan-800/30 text-cyan-300'
                : 'bg-cyan-100/50 border-cyan-200 text-cyan-700'
            }`}
          >
            Welcome to my Portfolio
          </motion.div>

          <h1
            className={`text-4xl md:text-6xl font-bold tracking-tight leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div
            className={`text-xl md:text-2xl font-medium flex items-center gap-2 justify-center lg:justify-start ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span>I am a</span>
            <span className="text-cyan-500 font-bold">
              <Typewriter
                options={{
                  strings: profile.roles,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </div>

          <p
            className={`max-w-lg mx-auto lg:mx-0 leading-relaxed text-base ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {profile.bio}
          </p>

          {/* أزرار الأكشن */}
          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-lg font-semibold overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-sky-500/40 transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <a
              href={profile.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3.5 border-2 rounded-lg font-semibold transition-all duration-300 active:scale-95 ${
                isDarkMode
                  ? 'border-cyan-700/50 text-cyan-300 hover:bg-cyan-900/20 hover:border-cyan-600'
                  : 'border-cyan-300 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-400'
              }`}
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* الجزء النصفي - الصورة (تأثير الزجاج المثلج) */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'backOut' }}
        >
          <div className="relative">
            {/* تأثير التوهج خلف الصورة */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-sky-400 rounded-3xl blur-2xl opacity-20 dark:opacity-30" />
            
            {/* إطار الصورة */}
            <div
              className={`relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden p-1 backdrop-blur-xl border transition-all duration-500 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 shadow-2xl shadow-cyan-900/20'
                  : 'bg-white/70 border-white/50 shadow-xl'
              }`}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image
                  src={profile.myImage}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* تراكب لوني خفيف للستايل */}
                <div className={`absolute inset-0 mix-blend-multiply ${isDarkMode ? 'bg-cyan-900/10' : 'bg-transparent'}`} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}