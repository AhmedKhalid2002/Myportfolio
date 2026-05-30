'use client';

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import dynamic from 'next/dynamic';
import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useFloatingAnimation } from '@/hooks/useFloatingAnimation';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
});

interface HeroProps {
  isDarkMode: boolean;
  setActiveTab: (tab: string) => void;
}

export default function Hero({ isDarkMode, setActiveTab }: HeroProps) {
  const { lang, t } = useLanguage();
  const { profile } = portfolioData;
  const { floatingVariants, slowFloatingVariants } = useFloatingAnimation();

  // اختيار البيانات بناءً على اللغة
  const name = lang === 'ar' ? profile.name_ar : profile.name;
  const roles = lang === 'ar' ? profile.roles_ar : profile.roles;
  const bio = lang === 'ar' ? profile.bio_ar : profile.bio;

  return (
    <section
      className={`relative min-h-[calc(100vh-100px)] w-full flex items-center justify-center px-4 overflow-hidden transition-colors duration-500 z-0 ${
        isDarkMode ? 'bg-slate-950' : 'bg-slate-50/50'
      }`}
    >
      <ParticlesBackground />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
        <motion.div
          className="pointer-events-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-4xl md:text-6xl font-bold mb-4 tracking-tight transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t('hero_greeting')}{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          <div
            className={`text-xl md:text-2xl font-semibold mb-6 flex gap-2 transition-colors duration-500 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {t('hero_role_prefix')}
            <span className="text-cyan-500">
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </div>

          <p
            className={`mb-8 max-w-lg leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {bio}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-lg font-semibold overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-sky-500/40 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10">{t('btn_contact')}</span>
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
              {t('btn_download_cv')}
            </a>
          </div>
        </motion.div>

        {/* ... Image Section remains the same ... */}
        <motion.div
          className="flex justify-center pointer-events-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={slowFloatingVariants}
          whileInView="animate"
        >
          <div
            className={`relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden p-1 backdrop-blur-xl border transition-all duration-500 shadow-2xl ${
              isDarkMode
                ? 'bg-white/5 border-white/10 shadow-cyan-900/20'
                : 'bg-white/70 border-white/50 shadow-xl'
            }`}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <Image
                src={profile.myImage}
                alt={name || ''}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
