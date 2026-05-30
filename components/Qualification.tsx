'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { useRouter } from 'next/navigation';
import { HiOutlineEye } from 'react-icons/hi2';
import { useLanguage } from '@/context/LanguageContext';

interface QualificationProps {
  isDarkMode: boolean;
}

// تحديث الواجهات لتشمل الحقول العربية
interface ExperienceItem {
  id?: string;
  role: string;
  role_ar?: string;
  company: string;
  company_ar?: string;
  duration: string;
  desc: string;
  desc_ar?: string;
  stats?: { value: string; label: string; label_ar?: string }[];
  proofImages?: string[];
}

interface EducationItem {
  id?: string;
  degree: string;
  degree_ar?: string;
  major: string;
  major_ar?: string;
  duration: string;
  proofImages?: string[];
}

export default function Qualification({ isDarkMode }: QualificationProps) {
  const router = useRouter();
  const { lang, t } = useLanguage(); // الحصول على اللغة الحالية ودالة الترجمة

  const handleNavigate = (id: string | undefined, type: 'exp' | 'edu') => {
    if (id) {
      router.push(`/proofs/${id}?type=${type}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  // نصوص ثابتة للترجمة (يمكن نقلها للـ Context إذا أحببت، لكن هنا للسرعة)
  const staticText = {
    en: {
      journey: 'My Journey',
      qual: 'Qualification',
      edu: 'Education',
      exp: 'Experience',
    },
    ar: { journey: 'مسيرتي', qual: 'المؤهلات', edu: 'التعليم', exp: 'الخبرات' },
  };

  const text = staticText[lang];

  return (
    <section
      id="qualification"
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isDarkMode
          ? 'bg-slate-950 text-slate-100'
          : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
      }`}
    >
      {/* العناوين */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
          {text.journey}
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
        >
          {text.qual}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* التعليم */}
        <div>
          <h3
            className={`text-xl font-bold mb-8 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
          >
            <span className="text-2xl">🎓</span>
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
              {text.edu}
            </span>
          </h3>

          <motion.div
            className={`space-y-8 border-l-2 pl-6 ml-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {portfolioData.education.map((edu: EducationItem, idx) => {
              const hasProof = edu.proofImages && edu.proofImages.length > 0;
              // اختيار النص بناءً على اللغة
              const degree = lang === 'ar' ? edu.degree_ar : edu.degree;
              const major = lang === 'ar' ? edu.major_ar : edu.major;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  onClick={() => hasProof && handleNavigate(edu.id, 'edu')}
                  className={`relative group transition-all duration-300 ${
                    hasProof
                      ? 'cursor-pointer p-4 rounded-xl border-2 scale-[1.02] shadow-xl'
                      : 'cursor-default'
                  } ${
                    hasProof
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-slate-900 to-cyan-950/40 border-cyan-500/30 hover:border-cyan-400 shadow-cyan-500/10'
                        : 'bg-gradient-to-r from-white to-cyan-50 border-cyan-200 hover:border-cyan-400 shadow-lg'
                      : ''
                  }`}
                >
                  <div
                    className={`absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-4 shadow-[0_0_10px_rgba(6,182,212,0.5)] ${
                      isDarkMode ? 'border-slate-950' : 'border-white'
                    }`}
                  />

                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4
                        className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
                      >
                        {degree}
                      </h4>
                      <p
                        className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
                      >
                        {major}
                      </p>
                    </div>

                    {hasProof && (
                      <div
                        className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all duration-300 ${
                          isDarkMode
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'bg-cyan-100 text-cyan-700'
                        }`}
                      >
                        <HiOutlineEye size={18} />
                      </div>
                    )}
                  </div>

                  <span
                    className={`inline-block text-xs px-3 py-1 border font-medium rounded-full ${
                      isDarkMode
                        ? 'bg-cyan-900/20 border-cyan-800/30 text-cyan-300'
                        : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                    }`}
                  >
                    {edu.duration}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* الخبرة */}
        <div>
          <h3
            className={`text-xl font-bold mb-8 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
          >
            <span className="text-2xl">💼</span>
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
              {text.exp}
            </span>
          </h3>

          <motion.div
            className={`space-y-8 border-l-2 pl-6 ml-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {portfolioData.experience.map((exp: ExperienceItem, idx) => {
              const hasProof = exp.proofImages && exp.proofImages.length > 0;
              // اختيار النصوص بناءً على اللغة
              const role = lang === 'ar' ? exp.role_ar : exp.role;
              const company = lang === 'ar' ? exp.company_ar : exp.company;
              const desc = lang === 'ar' ? exp.desc_ar : exp.desc;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  onClick={() => hasProof && handleNavigate(exp.id, 'exp')}
                  className={`relative group transition-all duration-300 ${
                    hasProof
                      ? 'cursor-pointer p-4 rounded-xl border-2 scale-[1.02] shadow-xl'
                      : 'cursor-default'
                  } ${
                    hasProof
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-slate-900 to-cyan-950/40 border-cyan-500/30 hover:border-cyan-400 shadow-cyan-500/10'
                        : 'bg-gradient-to-r from-white to-cyan-50 border-cyan-200 hover:border-cyan-400 shadow-lg'
                      : ''
                  }`}
                >
                  <div
                    className={`absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-4 shadow-[0_0_10px_rgba(6,182,212,0.5)] ${
                      isDarkMode ? 'border-slate-950' : 'border-white'
                    }`}
                  />

                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4
                        className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
                      >
                        {role}
                      </h4>
                      <p className="text-sm mb-1 font-medium text-cyan-500">
                        {company}
                      </p>
                    </div>

                    {hasProof && (
                      <div
                        className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all duration-300 ${
                          isDarkMode
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'bg-cyan-100 text-cyan-700'
                        }`}
                      >
                        <HiOutlineEye size={18} />
                      </div>
                    )}
                  </div>

                  <p
                    className={`text-sm mb-3 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}
                  >
                    {desc}
                  </p>

                  {/* الإحصائيات */}
                  {exp.stats && (
                    <div className="flex flex-wrap gap-3 mb-3">
                      {exp.stats.map((stat, index) => {
                        // ترجمة اسم الإحصائية
                        const label =
                          lang === 'ar' ? stat.label_ar : stat.label;

                        return (
                          <div
                            key={index}
                            className={`flex flex-col items-center px-3 py-1.5 rounded-lg border ${
                              isDarkMode
                                ? 'bg-slate-900 border-slate-700 text-white'
                                : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                            }`}
                          >
                            <span className="text-base font-bold text-cyan-500">
                              {stat.value}
                            </span>
                            <span
                              className={`text-[10px] uppercase font-medium ${
                                isDarkMode ? 'text-slate-400' : 'text-slate-500'
                              }`}
                            >
                              {label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <span
                    className={`inline-block text-xs px-3 py-1 border font-medium rounded-full ${
                      isDarkMode
                        ? 'bg-cyan-900/20 border-cyan-800/30 text-cyan-300'
                        : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                    }`}
                  >
                    {exp.duration}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
