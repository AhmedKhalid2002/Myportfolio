'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';

interface QualificationProps {
  isDarkMode: boolean;
}

export default function Qualification({ isDarkMode }: QualificationProps) {
  return (
    <section
      id="qualification"
      className={`py-12 px-6 max-w-6xl mx-auto border-b transition-colors duration-500 ${
        isDarkMode
          ? 'border-zinc-900 text-gray-100'
          : 'border-gray-200 text-zinc-900'
      }`}
    >
      {/* العناوين الأساسية */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
          My Journey
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          Qualification
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* عمود التعليم (Education Timeline) */}
        <div>
          <h3
            className={`text-xl font-bold mb-8 flex items-center gap-2 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-zinc-800'
            }`}
          >
            <span className="text-rose-500">🎓</span> Education
          </h3>
          <div
            className={`space-y-8 border-l-2 pl-6 ml-2 transition-colors duration-500 ${
              isDarkMode ? 'border-zinc-800' : 'border-gray-200'
            }`}
          >
            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* النقطة الذكية المتجاوبة مع لون الخلفية */}
                <div
                  className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-rose-500 border-4 transition-colors duration-500 ${
                    isDarkMode ? 'border-[#0b0c10]' : 'border-gray-50'
                  }`}
                />
                <h4
                  className={`text-lg font-bold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}
                >
                  {edu.degree}
                </h4>
                <p
                  className={`text-sm mb-2 transition-colors duration-500 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
                >
                  {edu.font}
                </p>
                <span
                  className={`text-xs px-2 py-0.5 border font-medium rounded transition-all duration-500 ${
                    isDarkMode
                      ? 'bg-zinc-900 border-zinc-800 text-rose-400'
                      : 'bg-gray-100 border-gray-200 text-rose-600'
                  }`}
                >
                  {edu.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* عمود الخبرة العملي (Experience Timeline) */}
        <div>
          <h3
            className={`text-xl font-bold mb-8 flex items-center gap-2 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-zinc-800'
            }`}
          >
            <span className="text-rose-500">💼</span> Experience
          </h3>
          <div
            className={`space-y-8 border-l-2 pl-6 ml-2 transition-colors duration-500 ${
              isDarkMode ? 'border-zinc-800' : 'border-gray-200'
            }`}
          >
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* النقطة الذكية المتجاوبة مع لون الخلفية */}
                <div
                  className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-rose-500 border-4 transition-colors duration-500 ${
                    isDarkMode ? 'border-[#0b0c10]' : 'border-gray-50'
                  }`}
                />
                <h4
                  className={`text-lg font-bold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}
                >
                  {exp.role}
                </h4>
                <p
                  className={`text-sm mb-2 transition-colors duration-500 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
                >
                  {exp.company}
                </p>
                <p
                  className={`text-sm mb-3 leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-500'}`}
                >
                  {exp.desc}
                </p>
                <span
                  className={`text-xs px-2 py-0.5 border font-medium rounded transition-all duration-500 ${
                    isDarkMode
                      ? 'bg-zinc-900 border-zinc-800 text-rose-400'
                      : 'bg-gray-100 border-gray-200 text-rose-600'
                  }`}
                >
                  {exp.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
