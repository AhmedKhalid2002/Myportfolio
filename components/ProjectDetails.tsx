'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiXMark,
  HiGlobeAlt,
  HiCodeBracket,
  HiTag,
  HiCheckCircle,
} from 'react-icons/hi2';
import { Project } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
}

// كائن ترجمة محلي للنصوص الثابتة داخل المودال
const modalTranslations = {
  en: {
    techTitle: 'Technologies & Tools',
    showLess: 'Show Less',
    more: 'More',
    overview: 'Project Overview',
    features: 'Key Features',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
  },
  ar: {
    techTitle: 'التقنيات والأدوات',
    showLess: 'عرض أقل',
    more: 'المزيد',
    overview: 'نظرة عامة على المشروع',
    features: 'الميزات الرئيسية',
    liveDemo: 'عرض مباشر',
    sourceCode: 'الكود المصدري',
  },
};

// كومبوننت فرعي للتحكم في عرض التقنيات
function TechnologiesSection({
  tags,
  isDarkMode,
  lang,
}: {
  tags: string[];
  isDarkMode: boolean;
  lang: 'en' | 'ar';
}) {
  const [showAll, setShowAll] = useState(false);
  const initialLimit = 3;
  const t = modalTranslations[lang];

  const displayedTags = showAll ? tags : tags.slice(0, initialLimit);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500">
          {t.techTitle}
        </h3>
        {tags.length > initialLimit && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors ${
              isDarkMode
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {showAll ? t.showLess : `+${tags.length - initialLimit} ${t.more}`}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {displayedTags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-xs font-semibold rounded-lg tracking-wide transition-all duration-300 ${
              isDarkMode
                ? 'bg-slate-800 text-cyan-400 border border-slate-700/40'
                : 'bg-cyan-50 text-cyan-600 border border-cyan-200/80 shadow-sm'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetails({
  project,
  onClose,
  isDarkMode,
}: ProjectDetailsProps) {
  const { lang } = useLanguage(); // الحصول على اللغة الحالية
  const [activeImage, setActiveImage] = useState<string>('');
  const t = modalTranslations[lang];

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  if (!project) return null;

  // اختيار المحتوى بناءً على اللغة
  const title =
    lang === 'ar' && project.title_ar ? project.title_ar : project.title;
  const description =
    lang === 'ar' && project.description_ar
      ? project.description_ar
      : project.description;
  const longDescription =
    lang === 'ar' && project.longDescription_ar
      ? project.longDescription_ar
      : project.longDescription;
  // استخدام الميزات العربية إذا كانت موجودة وغير فارغة
  const features =
    lang === 'ar' && project.features_ar && project.features_ar.length > 0
      ? project.features_ar
      : project.features;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 260, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
  };

  const allImages = [project.image, ...(project.subImages || [])].slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        className="absolute inset-0"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      />

      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`relative w-full max-w-7xl h-[90vh] md:h-[80vh] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-colors duration-500 ${
          isDarkMode
            ? 'bg-slate-900 border border-slate-800 text-slate-100'
            : 'bg-white border border-slate-100 text-slate-900'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shadow-md ${
            isDarkMode
              ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500'
              : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-cyan-500'
          }`}
        >
          <HiXMark size={20} />
        </button>

        {/* النصف الأيسر: الصور */}
        <div
          className={`p-5 md:p-6 md:col-span-5 flex flex-col gap-4 justify-center border-b md:border-b-0 md:border-r ${
            isDarkMode
              ? 'border-slate-800 bg-slate-950/30'
              : 'border-slate-150 bg-slate-50/50'
          }`}
        >
          <div
            className={`relative w-full aspect-video md:h-72 rounded-xl overflow-hidden flex items-center justify-center shadow-inner ${isDarkMode ? 'bg-slate-950' : 'bg-slate-100'}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.25 }}
                onClick={() => window.open(`${activeImage}`, '_blank')}
                className="absolute inset-0 bg-cover bg-center object-cover cursor-pointer object-top"
                style={{ backgroundImage: `url(${activeImage})` }}
              />
            </AnimatePresence>
            <div className="absolute bottom-3 left-3 z-10">
              <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 text-white flex items-center gap-1 shadow-md uppercase">
                <HiTag size={12} /> {project.category}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {allImages.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 relative ${
                  activeImage === imgUrl
                    ? 'border-cyan-500 scale-95 shadow-md'
                    : isDarkMode
                      ? 'border-slate-800 hover:border-slate-700'
                      : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${imgUrl})` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* النصف الأيمن: النصوص */}
        <div className="md:col-span-7 p-6 md:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2.5">
              {title}
            </h2>
            <p
              className={`text-sm md:text-base font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {description}
            </p>
          </div>

          <div
            className={`h-[1px] w-full mb-5 flex-shrink-0 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-150'}`}
          />

          <div className="flex-1 flex flex-col gap-6 pr-1">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">
                {t.overview}
              </h3>
              <p
                className={`text-sm leading-relaxed font-normal ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {longDescription}
              </p>
            </div>

            {features && features.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-3">
                  {t.features}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className={`text-sm flex items-start gap-2.5 font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                    >
                      <HiCheckCircle
                        size={18}
                        className="text-cyan-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <TechnologiesSection
              tags={project.tags || []}
              isDarkMode={isDarkMode}
              lang={lang}
            />
          </div>

          <div
            className={`mt-6 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-shrink-0 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-150'}`}
          >
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-cyan-600/20 text-sm tracking-wide"
              >
                <HiGlobeAlt size={18} /> {t.liveDemo}
              </a>
            )}
            {!project.rights ? (
              <div
                className={`w-full py-3 px-4 border rounded-xl text-center text-sm ${
                  isDarkMode
                    ? 'border-slate-700 text-slate-400 bg-slate-800/50'
                    : 'border-slate-200 text-slate-600 bg-slate-50'
                }`}
              >
                🔒 Source code is private and cannot be shared due to ownership
                and confidentiality agreements.
              </div>
            ) : (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 border font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-sm tracking-wide ${
                  isDarkMode
                    ? 'border-slate-700 text-slate-300 bg-slate-800/50 hover:bg-slate-800'
                    : 'border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <HiCodeBracket size={18} /> {t.sourceCode}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
