'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData, Certificate } from '@/data/portfolioData';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useLanguage } from '@/context/LanguageContext';
import { useFloatingAnimation } from '@/hooks/useFloatingAnimation';

interface CertificatesProps {
  isDarkMode: boolean;
}

export default function Certificates({ isDarkMode }: CertificatesProps) {
  const { lang } = useLanguage(); // الحصول على اللغة الحالية
  const { certificates } = portfolioData;
  const { slowFloatingVariants } = useFloatingAnimation();

  // State للتحكم في الـ Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // نصوص ثابتة للترجمة
  const staticText = {
    en: {
      subtitle: 'Achievements',
      title: 'Certificates',
      clickToView: 'Click to View',
      viewCertificate: 'View Certificate',
      verify: 'Verify',
    },
    ar: {
      subtitle: 'الإنجازات',
      title: 'الشهادات',
      clickToView: 'اضغط للعرض',
      viewCertificate: 'عرض الشهادة',
      verify: 'التحقق',
    },
  };

  const text = staticText[lang];

  return (
    <>
      <section
        id="certificates"
        className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
          isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
        }`}
      >
        {/* العناوين */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
            {text.subtitle}
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mt-2 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {text.title}
          </h2>
        </div>

        {/* شبكة الشهادات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert: Certificate, idx: number) => {
            // اختيار النصوص بناءً على اللغة
            const title = lang === 'ar' ? cert.title_ar : cert.title;
            const issuer = lang === 'ar' ? cert.issuer_ar : cert.issuer;
            const description =
              lang === 'ar' ? cert.description_ar : cert.description;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                variants={slowFloatingVariants}
                animate="animate"
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-cyan-500/50'
                    : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* صورة الشهادة - قابلة للنقر */}
                <div
                  className="relative h-52 w-full overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <Image
                    src={cert.image}
                    alt={title || ''}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* طبقة التظليل عند التحويم */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                      {text.clickToView}
                    </span>
                  </div>
                </div>

                {/* محتوى النص */}
                <div className="p-5 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">
                      {issuer}
                    </span>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}
                    >
                      {cert.date}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
                  >
                    {title}
                  </h3>

                  {/* وصف الشهادة النصي */}
                  {description && (
                    <p
                      className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                      {description}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-dashed border-slate-700/50">
                    <button
                      onClick={() => openLightbox(idx)}
                      className={`text-xs font-medium transition-colors ${
                        isDarkMode
                          ? 'text-cyan-400 hover:text-cyan-300'
                          : 'text-cyan-600 hover:text-cyan-500'
                      }`}
                    >
                      {text.viewCertificate}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* مكون الـ Lightbox لعرض الصور بالكامل */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={certificates.map((cert) => ({ src: cert.image }))}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </>
  );
}
