'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, skillIcons } from '@/data/portfolioData';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext'; // استيراد هوك اللغة
import { useFloatingAnimation } from '@/hooks/useFloatingAnimation';

type Category = 'frontend' | 'backend' | 'database' | 'tools';

export interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const { lang, t } = useLanguage(); // الحصول على اللغة الحالية ودالة الترجمة
  const [activeCategory, setActiveCategory] = useState<Category>('frontend');
  const { skillsCategories } = portfolioData;
  const { fastFloatingVariants } = useFloatingAnimation();

  // تعريف التبويبات مع الترجمة
  const tabs = [
    { id: 'frontend', label_en: 'Frontend', label_ar: 'تطوير الواجهات' },
    { id: 'backend', label_en: 'Backend', label_ar: 'تطوير الخلفية' },
    { id: 'database', label_en: 'Database', label_ar: 'قواعد البيانات' },
    { id: 'tools', label_en: 'Tools & DevOps', label_ar: 'الأدوات' },
  ] as const;

  // قائمة المهارات التي تحتاج عكس الألوان في الوضع الداكن
  const invertedSkills = [
    'GitHub',
    'Axios',
    'Git',
    'Yup',
    'Joi',
    'Zod',
    'Formik',
    'React Hook Form',
    'Class Validator',
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs font-bold uppercase tracking-widest text-cyan-500"
        >
          {t('skills_subtitle')} {/* Abilities */}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-3xl md:text-4xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
        >
          {t('skills_title')} {/* Technical Skills */}
        </motion.h2>
        <p
          className={`mt-3 text-sm max-w-md mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}
        >
          {t('skills_desc')} {/* Description */}
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        {tabs.map((tab) => {
          // اختيار النص بناءً على اللغة
          const label = lang === 'ar' ? tab.label_ar : tab.label_en;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-600 border-transparent text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : isDarkMode
                    ? 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 hover:border-slate-300'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid Container */}
      <div
        className={`border rounded-2xl p-6 md:p-8 ${
          isDarkMode
            ? 'bg-slate-900/30 border-slate-800'
            : 'bg-slate-50 border-slate-100'
        }`}
      >
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
                variants={fastFloatingVariants}
                whileInView="animate"
                key={skill}
                className={`group flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80'
                    : 'bg-white border-slate-100 hover:border-cyan-400 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="w-10 h-10 mb-3 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {skillIcons[skill] ? (
                    <Image
                      width={32}
                      height={32}
                      src={skillIcons[skill]}
                      alt={skill}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        isDarkMode && invertedSkills.includes(skill)
                          ? 'brightness-0 invert'
                          : ''
                      }`}
                      unoptimized={true}
                    />
                  ) : (
                    <div
                      className={`w-full h-full rounded-lg flex items-center justify-center font-bold text-xs ${
                        isDarkMode
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-cyan-100 text-cyan-600'
                      }`}
                    >
                      {skill.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <span
                  className={`text-xs font-semibold text-center transition-colors ${
                    isDarkMode
                      ? 'text-slate-300 group-hover:text-white'
                      : 'text-slate-700'
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
