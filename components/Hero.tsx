'use client';

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import dynamic from 'next/dynamic';
import { portfolioData } from '@/data/portfolioData';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
});

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const { profile } = portfolioData;

  return (
    <section
      className={`relative min-h-[calc(100vh-100px)] w-full flex items-center justify-center px-4 overflow-hidden transition-colors duration-500 z-0 ${
        isDarkMode ? 'bg-zinc-900' : 'bg-gray-50/50'
      }`}
    >
      {/* استدعاء الخلفية المحدثة بالمراقب الديناميكي */}
      <ParticlesBackground />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* الجزء النصفي الأيسر - النصوص */}
        <motion.div
          className="pointer-events-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 tracking-tight transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            Hi, I am <span className="text-rose-600">{profile.name}</span>
          </h1>

          <div className={`text-xl md:text-2xl font-semibold mb-6 flex gap-2 transition-colors duration-500 ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            I am a
            <span className="text-rose-600">
              <Typewriter
                options={{
                  strings: profile.roles,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </div>

          <p className={`mb-8 max-w-lg leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
          }`}>
            {profile.bio}
          </p>

          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-rose-600 text-white rounded font-medium hover:bg-rose-700 transition shadow-lg shadow-rose-600/20 active:scale-98">
              Contact Me
            </a>
            <a href={profile.cvLink} className={`px-6 py-3 border rounded font-medium transition active:scale-98 ${
              isDarkMode ? 'border-rose-600 text-rose-400 hover:bg-rose-600/10' : 'border-rose-500 text-rose-600 hover:bg-rose-50/50'
            }`}>
              Download CV
            </a>
          </div>
        </motion.div>

        {/* الجزء النصفي الأيمن - الصورة */}
        <motion.div
          className="flex justify-center pointer-events-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={`relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-2xl ${
            isDarkMode ? 'border-rose-600/30 bg-zinc-900' : 'border-rose-500/20 bg-white'
          }`}>
            <div className={`w-full h-full flex items-center justify-center transition-colors duration-500 ${
              isDarkMode ? 'text-zinc-600 bg-zinc-900/50' : 'text-zinc-400 bg-gray-100'
            }`}>
              [Image: Ahmed Khalid Profile]
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}