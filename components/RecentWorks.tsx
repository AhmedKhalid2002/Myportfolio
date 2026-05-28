'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, Project } from '@/data/portfolioData';
import ProjectDetails from './ProjectDetails'; // استدعاء مودال التفاصيل الجديد هنا

interface RecentWorksProps {
  isDarkMode: boolean;
}

export default function RecentWorks({ isDarkMode }: RecentWorksProps) {
  const [filter, setFilter] = useState<
    'All' | 'Full Stack' | 'Backend' | 'Frontend' | 'Dashboards'
  >('All');

  // ستيت لتخزين المشروع المحدد الذي سيتم فتح تفاصيله
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = portfolioData.projects.filter((project) =>
    filter === 'All' ? true : project.category === filter,
  );

  return (
    <section id="works" className="py-12 px-6 max-w-7xl mx-auto relative">
      {/* العناوين الأساسية */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
          My Portfolio
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          Recent Works
        </h2>
      </div>

      {/* أزرار الفلترة والتنقل الذكية */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {(
          ['All', 'Full Stack', 'Backend', 'Frontend', 'Dashboards'] as const
        ).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              filter === tab
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/10'
                : isDarkMode
                  ? 'bg-zinc-900 text-zinc-400 hover:bg-rose-600/10 hover:text-rose-400'
                  : 'bg-gray-200/60 text-zinc-600 hover:bg-rose-50 hover:text-rose-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* شبكة عرض كروت المشاريع المتحركة */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              // جعل الكارت كاملاً قابل للضغط لفتح التفاصيل بسهولة
              onClick={() => setSelectedProject(project)}
              className={`group rounded-xl overflow-hidden border cursor-pointer transition-all duration-500 ${
                isDarkMode
                  ? 'bg-zinc-900 border-zinc-800/80 text-gray-100 hover:shadow-xl shadow-black/20 hover:border-zinc-700'
                  : 'bg-white border-gray-100 text-zinc-900 shadow-md hover:shadow-xl hover:border-gray-200'
              }`}
            >
              {/* حاوية صورة البانر للمشروع */}
              <div
                className={`h-48 relative flex items-center justify-center transition-colors duration-500 ${
                  isDarkMode
                    ? 'bg-zinc-800 text-zinc-500'
                    : 'bg-gray-100 text-zinc-400'
                }`}
              >
                <span className="text-xs font-medium">
                  {project.title} Banner Image
                </span>
              </div>

              {/* تفاصيل الكرت داخلياً */}
              <div className="p-6">
                <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3
                  className={`text-xl font-bold mt-1 mb-2 group-hover:text-rose-500 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-zinc-800'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm line-clamp-2 mb-4 transition-colors duration-500 ${
                    isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
                  }`}
                >
                  {project.description}
                </p>

                {/* استبدال الـ Link القديم بزر تفاعلي يفتح المودال فوراً */}
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-rose-500 group-hover:text-rose-600 group-hover:underline transition-colors"
                >
                  View Details &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* الـ Overlay / Modal الخاص بتفاصيل المشروع المختار بأنيميشن الخروج والدخول */}
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
