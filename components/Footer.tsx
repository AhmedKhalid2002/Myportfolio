'use client';

import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // بيانات التواصل والسوشيال ميديا
  const contactInfo = [
    { icon: <HiOutlineEnvelope size={18} />, label: 'Email', value: 'kmalahmdkhald927@gmail.com', link: 'mailto:kmalahmdkhald927@gmail.com' },
    { icon: <HiOutlinePhone size={18} />, label: 'Phone', value: '+20 103 157 1508', link: 'tel:+201031571508' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/ahmed-khalid-5166b324b/' },
    { icon: <FaGithub size={20} />, label: 'GitHub', link: 'https://github.com/AhmedKhalid2002' },
    { icon: <FaWhatsapp size={20} />, label: 'WhatsApp', link: 'https://wa.me/201031571508' },
  ];

  return (
    <footer
      className={`w-full border-t py-12 px-6 transition-all duration-700 ${
        isDarkMode
          ? 'bg-slate-950 border-slate-800 text-slate-400'
          : 'bg-white border-slate-100 text-slate-500'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        
        {/* القسم الأول: العلامة التجارية */}
        <div className="flex flex-col items-start">
          <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Ahmed <span className="text-cyan-500">.</span>
          </h3>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A passionate MERN Stack Developer dedicated to building scalable and modern web applications.
          </p>
        </div>

        {/* القسم الثاني: معلومات الاتصال */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className={`text-lg font-bold mb-4 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Contact Info
          </h4>
          <div className="space-y-3">
            {contactInfo.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link}
                className={`flex items-center gap-3 text-sm group transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                }`}
              >
                <span className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/10' : 'bg-slate-100 text-cyan-500 group-hover:bg-cyan-100'
                }`}>
                  {item.icon}
                </span>
                <span>{item.value}</span>
              </a>
            ))}
          </div>
        </div>

        {/* القسم الثالث: السوشيال ميديا */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className={`text-lg font-bold mb-4 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Follow Me
          </h4>
          <div className="flex gap-3">
            {socialLinks.map((soc, idx) => (
              <a
                key={idx}
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                className={`p-3 rounded-xl border transition-all duration-300 group ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-slate-800' 
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-400 hover:bg-white shadow-sm'
                }`}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* خط فاصل وحقوق الملكية */}
      <div className={`pt-8 mt-8 border-t text-center text-xs ${
        isDarkMode ? 'border-slate-800' : 'border-slate-100'
      }`}>
        <p>
          &copy; {currentYear} <span className="font-semibold text-cyan-500">Ahmed Khalid</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}