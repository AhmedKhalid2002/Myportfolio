'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData, skillIcons } from '@/data/portfolioData';
import Image from 'next/image';

type Category = 'frontend' | 'backend' | 'database';

export interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('frontend');
  const { skillsCategories } = portfolioData;

  const tabs = [
    { id: 'frontend', label: 'Frontend Developer', sub: 'More than 2 years' },
    { id: 'backend', label: 'Backend Developer', sub: 'More than 1 year' },
    { id: 'database', label: 'Database & Tools', sub: 'Core management' },
  ] as const;

  return (
    <section
      id="skills"
      className={`py-12 px-6 max-w-6xl mx-auto border-b transition-colors duration-500 ${
        isDarkMode
          ? 'border-zinc-900 text-gray-100'
          : 'border-gray-200 text-zinc-900'
      }`}
    >
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
          Abilities
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}
        >
          Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-600/10'
                  : isDarkMode
                    ? 'bg-zinc-900/50 border-zinc-800 hover:border-rose-500/30 text-zinc-400'
                    : 'bg-gray-100 border-gray-200 hover:border-rose-500/30 text-zinc-600'
              }`}
            >
              <div className="font-bold text-sm md:text-base">{tab.label}</div>
              <div
                className={`text-xs mt-0.5 ${activeCategory === tab.id ? 'text-rose-200' : 'opacity-70'}`}
              >
                {tab.sub}
              </div>
            </button>
          ))}
        </div>

        <div
          className={`md:col-span-2 border rounded-2xl p-8 min-h-[300px] transition-all duration-500 ${
            isDarkMode
              ? 'bg-zinc-900/30 border-zinc-800/80'
              : 'bg-gray-50 border-gray-200/60 shadow-inner'
          }`}
        >
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skillsCategories[activeCategory].map((skill) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={skill}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border hover:border-rose-500/40 transition-all duration-300 group ${
                  isDarkMode
                    ? 'bg-zinc-900 border-zinc-800'
                    : 'bg-white border-gray-150 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="w-10 h-10 mb-3 relative group-hover:scale-110 transition-transform duration-300">
                  {skillIcons[skill] ? (
                    <Image
                      width={32}
                      height={32}
                      src={skillIcons[skill]}
                      alt={skill}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded flex items-center justify-center bg-gray-100 text-rose-500 font-bold text-xs">
                      {skill.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <span
                  className={`text-xs font-semibold text-center ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}
                >
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
