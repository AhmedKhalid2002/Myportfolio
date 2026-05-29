'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';

interface QualificationProps {
  isDarkMode: boolean;
}

export default function Qualification({ isDarkMode }: QualificationProps) {
  // 1. إعدادات الأنيميشن للحاوية (تجعل الأبناء يظهرون واحد تلو الآخر)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // المدة الفاصلة بين ظهور كل عنصر والذي يليه
      },
    },
  };

  // 2. إعدادات أنيميشن العنصر الفردي
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // يبدأ من الأسفل بشفافية صفر
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="qualification"
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isDarkMode
          ? 'bg-slate-950 text-slate-100'
          : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
      }`}
    >
      {/* العناوين الأساسية */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
          My Journey
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Qualification
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* عمود التعليم (Education Timeline) */}
        <div>
          <h3
            className={`text-xl font-bold mb-8 flex items-center gap-2 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}
          >
            <span className="text-2xl">🎓</span>
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
              Education
            </span>
          </h3>

          {/* تم إضافة motion.div كحاوية مع الـ variants */}
          <motion.div
            className={`space-y-8 border-l-2 pl-6 ml-2 transition-colors duration-500 ${
              isDarkMode ? 'border-slate-800' : 'border-slate-200'
            }`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="relative"
                variants={itemVariants} // تطبيق أنيميشن العنصر الفردي
              >
                {/* النقطة المتجاولة */}
                <div
                  className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-4 transition-colors duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] ${
                    isDarkMode ? 'border-slate-950' : 'border-white'
                  }`}
                />
                <h4
                  className={`text-lg font-bold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
                >
                  {edu.degree}
                </h4>
                <p
                  className={`text-sm mb-2 transition-colors duration-500 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
                >
                  {edu.major}
                </p>
                <span
                  className={`inline-block text-xs px-3 py-1 border font-medium rounded-full transition-all duration-500 ${
                    isDarkMode
                      ? 'bg-cyan-900/20 border-cyan-800/30 text-cyan-300'
                      : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                  }`}
                >
                  {edu.duration}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* عمود الخبرة العملي (Experience Timeline) */}
        <div>
          <h3
            className={`text-xl font-bold mb-8 flex items-center gap-2 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}
          >
            <span className="text-2xl">💼</span>
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h3>

          {/* تم إضافة motion.div كحاوية مع الـ variants */}
          <motion.div
            className={`space-y-8 border-l-2 pl-6 ml-2 transition-colors duration-500 ${
              isDarkMode ? 'border-slate-800' : 'border-slate-200'
            }`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative"
                variants={itemVariants} // تطبيق أنيميشن العنصر الفردي
              >
                {/* النقطة المتجاولة */}
                <div
                  className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-4 transition-colors duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] ${
                    isDarkMode ? 'border-slate-950' : 'border-white'
                  }`}
                />
                <h4
                  className={`text-lg font-bold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
                >
                  {exp.role}
                </h4>
                <p
                  className={`text-sm mb-1 transition-colors duration-500 font-medium text-cyan-500`}
                >
                  {exp.company}
                </p>
                <p
                  className={`text-sm mb-3 leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}
                >
                  {exp.desc}
                </p>
                <span
                  className={`inline-block text-xs px-3 py-1 border font-medium rounded-full transition-all duration-500 ${
                    isDarkMode
                      ? 'bg-cyan-900/20 border-cyan-800/30 text-cyan-300'
                      : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                  }`}
                >
                  {exp.duration}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
