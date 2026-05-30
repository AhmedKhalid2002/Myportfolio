'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext'; // استيراد هوك اللغة
import { useFloatingAnimation } from '@/hooks/useFloatingAnimation';

interface AboutProps {
  isDarkMode: boolean;
  setActiveTab: (tab: string) => void;
}

export default function About({ isDarkMode, setActiveTab }: AboutProps) {
  const { lang, t } = useLanguage(); // الحصول على اللغة الحالية ودالة الترجمة
  const { profile } = portfolioData;
  const { floatingRotateVariants } = useFloatingAnimation();

  // اختيار النصوص بناءً على اللغة الحالية
  const name = lang === 'ar' ? profile.name_ar : profile.name;
  const bio = lang === 'ar' ? profile.bio_ar : profile.bio;

  // ترجمة جملة "مطور مقيم في مصر" (بما أنها ليست في الـ Context، تمت ترجمتها محلياً)
  const locationText =
    lang === 'ar'
      ? 'مطور MERN Stack مقيم في مصر.'
      : 'A MERN Stack Developer based in Egypt.';

  return (
    <section
      id="about"
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isDarkMode
          ? 'bg-slate-950 text-slate-100'
          : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
      }`}
    >
      {/* العنوان العلوي للقسم */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
          {t('about_subtitle')} {/* Biography */}
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {t('about_title')} {/* About Me */}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* إطار وحاوية الصورة الشخصية */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          variants={floatingRotateVariants}
          animate="animate"
          className={`relative max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border p-2 backdrop-blur-xl transition-all duration-500 ${
            isDarkMode
              ? 'bg-white/5 border-white/10 shadow-2xl shadow-cyan-900/20'
              : 'bg-white/70 border-white/50 shadow-xl'
          }`}
        >
          <div
            className={`aspect-[3/4] rounded-2xl overflow-hidden flex items-center justify-center transition-colors duration-500 ${
              isDarkMode ? 'bg-slate-900' : 'bg-slate-50'
            }`}
          >
            <Image
              src={profile.myImage}
              alt={name || ''}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* النصوص والبيانات الترحيبية */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-start" // استخدام text-start لدعم RTL
        >
          <h3
            className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}
          >
            {t('hero_greeting')}{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
              {name}
            </span>{' '}
            &ndash; {locationText}
          </h3>

          <p
            className={`leading-relaxed mb-8 transition-colors duration-500 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {bio}
          </p>

          {/* كروت الـ Stats الإحصائية */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div
              className={`p-4 rounded-xl border text-center transition-all duration-500 group ${
                isDarkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-600/30'
                  : 'bg-white border-slate-100 shadow-sm hover:border-cyan-200 hover:shadow-md'
              }`}
            >
              <span className="block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
                {profile.experienceYears}
              </span>
              <span
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {t('stats_experience')}
              </span>
            </div>

            <div
              className={`p-4 rounded-xl border text-center transition-all duration-500 group ${
                isDarkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-600/30'
                  : 'bg-white border-slate-100 shadow-sm hover:border-cyan-200 hover:shadow-md'
              }`}
            >
              <span className="block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
                {profile.completedProjects}
              </span>
              <span
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {t('stats_projects')}
              </span>
            </div>

            <div
              className={`p-4 rounded-xl border text-center transition-all duration-500 group ${
                isDarkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-600/30'
                  : 'bg-white border-slate-100 shadow-sm hover:border-cyan-200 hover:shadow-md'
              }`}
            >
              <span className="block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
                {profile.happyClients}
              </span>
              <span
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {t('stats_clients')}
              </span>
            </div>
          </div>

          {/* زر التواصل */}
          <button
            onClick={() => setActiveTab('contact')}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-lg font-semibold overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-sky-500/40 transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10">{t('about_btn_talk')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
