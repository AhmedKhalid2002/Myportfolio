'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

interface ServicesProps {
  isDarkMode: boolean;
}

export default function Services({ isDarkMode }: ServicesProps) {
  const { lang, t } = useLanguage();
  const { services } = portfolioData;

  return (
    <section
      id="services"
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isDarkMode
          ? 'bg-slate-950 text-slate-100'
          : 'bg-white text-slate-900'
      }`}
    >
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
          {t('services_subtitle')}
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {t('services_title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
           // اختيار النصوص بناءً على اللغة
          const title = lang === 'ar' ? service.title_ar : service.title;
          const desc = lang === 'ar' ? service.desc_ar : service.desc;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl border transition-all duration-500 group ${
                isDarkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/40'
                  : 'bg-slate-50 border-slate-100 text-slate-900 shadow-sm hover:shadow-md hover:border-cyan-300'
              }`}
            >
              <div className="text-3xl text-cyan-500 mb-4 group-hover:scale-110 transition-transform inline-block">⚡</div>
              
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>
                {title}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}