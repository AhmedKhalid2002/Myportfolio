'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext'; // استيراد هوك اللغة
import { useFloatingAnimation } from '@/hooks/useFloatingAnimation';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const { lang, t } = useLanguage(); // الحصول على اللغة الحالية ودالة الترجمة
  const { fastFloatingVariants, floatingVariants } = useFloatingAnimation();

  // نصوص البطاقات (Card Text)
  const cardText = {
    en: {
      emailTitle: 'Email',
      emailAction: 'Send an email',
      phoneTitle: 'Phone',
      phoneAction: 'Call directly',
      socialTitle: 'Social Media',
      socialSub: 'LinkedIn / GitHub',
    },
    ar: {
      emailTitle: 'البريد الإلكتروني',
      emailAction: 'إرسال بريد',
      phoneTitle: 'الهاتف',
      phoneAction: 'اتصال مباشر',
      socialTitle: 'وسائل التواصل',
      socialSub: 'لينكد إن / جيت هب',
    },
  };

  const text = cardText[lang];

  // بيانات التواصل
  const directMethods = [
    {
      icon: <HiOutlineEnvelope size={28} />,
      title: text.emailTitle,
      value: 'kmalahmdkhald927@gmail.com',
      link: 'mailto:kmalahmdkhald927@gmail.com',
      actionText: text.emailAction,
    },
    {
      icon: <HiOutlinePhone size={28} />,
      title: text.phoneTitle,
      value: '+20 103 157 1508',
      link: 'tel:+201031571508',
      actionText: text.phoneAction,
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-khalid-5166b324b/',
      icon: <FaLinkedin size={18} />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AhmedKhalid2002',
      icon: <FaGithub size={18} />,
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* العناوين الأساسية */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
          {t('contact_subtitle')} {/* Get In Touch */}
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {t('contact_title')} {/* Let's Talk */}
        </h2>
        <p
          className={`text-sm mt-3 max-w-md mx-auto transition-colors duration-500 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {t('contact_desc')} {/* Description */}
        </p>
      </div>

      {/* شبكة عرض كروت التواصل المباشرة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* كروت الاتصال والإيميل المباشرة */}
        {directMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={fastFloatingVariants}
            animate="animate"
            className={`p-8 rounded-2xl border text-center flex flex-col items-center justify-center group transition-all duration-500 active:scale-98 ${
              isDarkMode
                ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 text-slate-100'
                : 'bg-slate-50 border-slate-100 text-slate-900 shadow-sm hover:shadow-md hover:border-cyan-300'
            }`}
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode ? 'bg-slate-800' : 'bg-cyan-50'
              }`}
            >
              {method.icon}
            </div>

            <h3
              className={`text-lg font-bold mb-1 transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}
            >
              {method.title}
            </h3>

            <p
              className={`text-sm mb-4 transition-colors duration-500 font-medium ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
              dir="ltr" // ضمان اتجاه النص من اليسار لليمين للبيانات
            >
              {method.value}
            </p>

            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 group-hover:text-sky-400 flex items-center gap-1 transition-colors">
              {method.actionText} &rarr;
            </span>
          </motion.a>
        ))}

        {/* كارت السوشيال ميديا التفاعلي المتعدد */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={floatingVariants}
          animate="animate"
          className={`p-8 rounded-2xl border text-center flex flex-col items-center justify-center transition-all duration-500 ${
            isDarkMode
              ? 'bg-slate-900/50 border-slate-800 text-slate-100'
              : 'bg-slate-50 border-slate-100 text-slate-900 shadow-sm'
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-cyan-500 mb-4 ${
              isDarkMode ? 'bg-slate-800' : 'bg-cyan-50'
            }`}
          >
            <HiOutlineChatBubbleLeftRight size={28} />
          </div>

          <h3
            className={`text-lg font-bold mb-1 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}
          >
            {text.socialTitle}
          </h3>

          <p
            className={`text-sm mb-4 transition-colors duration-500 font-medium ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
            dir="ltr"
          >
            {text.socialSub}
          </p>

          {/* أزرار الانتقال المباشرة للحسابات */}
          <div className="flex gap-2 w-full justify-center">
            {socialLinks.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-sky-600 text-white hover:from-sky-500 hover:to-cyan-500 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
              >
                {soc.icon}
                {soc.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
