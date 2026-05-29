'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, skillIcons } from '@/data/portfolioData';
import Image from 'next/image';

type Category = 'frontend' | 'backend' | 'database' | 'tools';

export interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('frontend');
  const { skillsCategories } = portfolioData;

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools & DevOps' },
  ] as const;

  // قائمة المهارات التي تحتاج عكس الألوان في الوضع الداكن
  const invertedSkills = ['GitHub', 'Axios', 'Git', 'Yup', 'Joi', 'Zod', 'Formik', 'React Hook Form'];

  return (
    <section
      id="skills"
      className={`py-20 px-6 max-w-6xl mx-auto transition-colors duration-500 ${
        isDarkMode
          ? ' text-gray-100'
          : 'bg-white text-zinc-900'
      }`}
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs font-bold uppercase tracking-widest text-rose-500"
        >
          Abilities
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-3xl md:text-4xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}
        >
          Technical Skills
        </motion.h2>
        <p className={`mt-3 text-sm max-w-md mx-auto ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
          Technologies and tools I use to build exceptional digital experiences.
        </p>
      </div>

      {/* Tabs Navigation - Centered */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === tab.id
                ? 'bg-rose-600 border-rose-600 text-white shadow-lg shadow-rose-500/20 scale-105'
                : isDarkMode
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                  : 'bg-gray-50 border-gray-200 text-zinc-600 hover:bg-gray-100 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className={`border rounded-2xl p-6 md:p-8 ${
        isDarkMode
          ? 'bg-zinc-900/30 border-zinc-800'
          : 'bg-gray-50 border-gray-100'
      }`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {skillsCategories[activeCategory].map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                key={skill}
                className={`group flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-zinc-900/40 border-zinc-800 hover:border-rose-500/50 hover:bg-zinc-900/80'
                    : 'bg-white border-gray-100 hover:border-rose-500/40 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="w-10 h-10 mb-3 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {skillIcons[skill] ? (
                    <Image
                      width={32}
                      height={32}
                      src={skillIcons[skill]}
                      alt={skill}
                      className={`w-full h-full object-contain ${
                        isDarkMode && invertedSkills.includes(skill) ? 'invert' : ''
                      }`}
                      unoptimized={true}
                    />
                  ) : (
                    <div className={`w-full h-full rounded-lg flex items-center justify-center font-bold text-xs ${
                      isDarkMode ? 'bg-rose-500/20 text-rose-300' : 'bg-rose-100 text-rose-600'
                    }`}>
                      {skill.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <span
                  className={`text-xs font-semibold text-center transition-colors ${
                    isDarkMode ? 'text-zinc-300 group-hover:text-white' : 'text-zinc-700'
                  }`}
                >
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}