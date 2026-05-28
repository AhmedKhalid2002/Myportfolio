'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  // كروت التواصل الأساسية (الإيميل والهاتف)
  const directMethods = [
    {
      icon: <HiOutlineEnvelope size={28} />,
      title: 'Email',
      value: 'ahmedokab2002@gmail.com',
      link: 'mailto:ahmedokab2002@gmail.com',
      actionText: 'Send an email',
    },
    {
      icon: <HiOutlinePhone size={28} />,
      title: 'Phone',
      value: '+20 103 157 1508',
      link: 'tel:+201031571508',
      actionText: 'Call directly',
    },
  ];

  // روابط السوشيال ميديا المفصلة
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
      className={`py-16 px-6 max-w-6xl mx-auto border-b transition-colors duration-500 ${
        isDarkMode ? 'border-zinc-900 text-gray-100' : 'border-gray-200 text-zinc-900'
      }`}
    >
      {/* العناوين الأساسية */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
          Get In Touch
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          Let&apos;s Talk
        </h2>
        <p
          className={`text-sm mt-3 max-w-md mx-auto transition-colors duration-500 ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        >
          Feel free to reach out through any of these channels. I am always open
          to discussing new projects or opportunities!
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
            className={`p-8 rounded-2xl border text-center flex flex-col items-center justify-center group transition-all duration-500 active:scale-98 ${
              isDarkMode
                ? 'bg-zinc-900/40 border-zinc-800 hover:border-rose-500/40 text-gray-100'
                : 'bg-white border-gray-150 text-zinc-900 shadow-sm hover:shadow-md hover:border-rose-500/30'
            }`}
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-rose-500 mb-4 group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode ? 'bg-zinc-900' : 'bg-rose-50'
              }`}
            >
              {method.icon}
            </div>

            <h3 className={`text-lg font-bold mb-1 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-zinc-800'
            }`}>
              {method.title}
            </h3>

            <p className={`text-sm mb-4 transition-colors duration-500 font-medium ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              {method.value}
            </p>

            <span className="text-xs font-semibold uppercase tracking-wider text-rose-500 group-hover:text-rose-600 flex items-center gap-1 transition-colors">
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
          className={`p-8 rounded-2xl border text-center flex flex-col items-center justify-center transition-all duration-500 ${
            isDarkMode
              ? 'bg-zinc-900/40 border-zinc-800 text-gray-100'
              : 'bg-white border-gray-150 text-zinc-900 shadow-sm'
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-rose-500 mb-4 ${
              isDarkMode ? 'bg-zinc-900' : 'bg-rose-50'
            }`}
          >
            <HiOutlineChatBubbleLeftRight size={28} />
          </div>

          <h3 className={`text-lg font-bold mb-1 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-zinc-800'
          }`}>
            Social Media
          </h3>

          <p className={`text-sm mb-4 transition-colors duration-500 font-medium ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            LinkedIn / GitHub
          </p>

          {/* أزرار الانتقال المباشرة للحسابات */}
          <div className="flex gap-2 w-full justify-center">
            {socialLinks.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-sm shadow-rose-600/10 active:scale-95"
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