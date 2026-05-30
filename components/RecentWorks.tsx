'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, Project } from '@/data/portfolioData';
import ProjectDetails from './ProjectDetails';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

interface RecentWorksProps {
  isDarkMode: boolean;
}

export default function RecentWorks({ isDarkMode }: RecentWorksProps) {
  const { lang } = useLanguage(); // الحصول على اللغة الحالية
  const [filter, setFilter] = useState<
    'All' | 'Full Stack' | 'Backend' | 'Frontend' | 'Dashboard'
  >('All');

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = portfolioData.projects.filter((project) =>
    filter === 'All' ? true : project.category.includes(filter),
  );

  // نصوص ثابتة للترجمة
  const staticText = {
    en: {
      subtitle: 'My Portfolio',
      title: 'Recent Works',
      viewDetails: 'View Details',
    },
    ar: {
      subtitle: 'أعمالي',
      title: 'المشاريع الحديثة',
      viewDetails: 'عرض التفاصيل',
    },
  };

  const text = staticText[lang];

  // تعريف التبويبات مع الترجمة
  const tabs = [
    { id: 'All', label_en: 'All', label_ar: 'الكل' },
    { id: 'Full Stack', label_en: 'Full Stack', label_ar: 'Full Stack' },
    { id: 'Backend', label_en: 'Backend', label_ar: 'Backend' },
    { id: 'Frontend', label_en: 'Frontend', label_ar: 'Frontend' },
    { id: 'Dashboard', label_en: 'Dashboards', label_ar: 'لوحات تحكم' },
  ] as const;

  return (
    <section
      id="works"
      className={`py-20 px-6 max-w-7xl mx-auto transition-all duration-700 ${
        isDarkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* العناوين الأساسية */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
          {text.subtitle}
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {text.title}
        </h2>
      </div>

      {/* أزرار الفلترة والتنقل */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => {
          // اختيار نص الزر بناءً على اللغة
          const label = lang === 'ar' ? tab.label_ar : tab.label_en;

          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-500/30'
                  : isDarkMode
                    ? 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-cyan-400 border border-slate-800'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-cyan-600 border border-slate-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* شبكة عرض كروت المشاريع */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project) => {
            // اختيار النصوص بناءً على اللغة
            const title = lang === 'ar' ? project.title_ar : project.title;
            const description =
              lang === 'ar' ? project.description_ar : project.description;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 ${
                  isDarkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/20'
                    : 'bg-white border-slate-100 text-slate-900 shadow-sm hover:shadow-xl hover:border-cyan-300'
                }`}
              >
                {/* حاوية صورة البانر للمشروع */}
                <div
                  className={`h-48 relative flex items-center justify-center overflow-hidden transition-colors duration-500 ${
                    isDarkMode
                      ? 'bg-slate-800 text-slate-500'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {/* يمكن إضافة Image هنا إذا كانت الصور متوفرة */}
                  <span className="text-xs font-medium uppercase tracking-wider">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                    />
                  </span>
                </div>

                {/* تفاصيل الكرت */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wider">
                    {project.category.join(' • ')}{' '}
                  </span>
                  <h3
                    className={`text-xl font-bold mt-1 mb-2 group-hover:text-cyan-500 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm line-clamp-2 mb-4 transition-colors duration-500 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {description}
                  </p>

                  <button
                    type="button"
                    className="inline-flex items-center text-sm font-medium text-cyan-500 group-hover:text-sky-600 transition-colors"
                  >
                    {text.viewDetails} &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* الـ Overlay / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            isDarkMode={isDarkMode}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
