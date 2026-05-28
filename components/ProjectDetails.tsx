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

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
}

// كومبوننت فرعي للتحكم في عرض التقنيات
function TechnologiesSection({ tags, isDarkMode }: { tags: string[], isDarkMode: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const initialLimit = 3;

  const displayedTags = showAll ? tags : tags.slice(0, initialLimit);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-rose-500">
          Technologies & Tools
        </h3>
        {tags.length > initialLimit && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors ${
              isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            {showAll ? 'Show Less' : `+${tags.length - initialLimit} More`}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {displayedTags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-xs font-semibold rounded-lg tracking-wide transition-all duration-300 ${
              isDarkMode
                ? 'bg-zinc-800 text-rose-400 border border-zinc-700/40'
                : 'bg-gray-50 text-rose-600 border border-gray-200/80 shadow-sm'
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
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  if (!project) return null;

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
      transition: { type: 'spring', stiffness: 260, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
  };

  const allImages = [project.image, ...(project.subImages || [])].slice(0, 5);

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
        className={`relative w-full max-w-5xl h-[90vh] md:h-[80vh] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-colors duration-500 ${
          isDarkMode
            ? 'bg-zinc-900 border border-zinc-800 text-gray-100'
            : 'bg-white border border-gray-100 text-zinc-900'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shadow-md ${
            isDarkMode
              ? 'bg-zinc-800 border-zinc-700 text-gray-400 hover:text-white hover:border-rose-500'
              : 'bg-white border-gray-200 text-zinc-500 hover:text-zinc-900 hover:border-rose-500'
          }`}
        >
          <HiXMark size={20} />
        </button>

        {/* النصف الأيسر: الصور */}
        <div className={`p-5 md:p-6 md:col-span-5 flex flex-col gap-4 justify-center border-b md:border-b-0 md:border-r ${
          isDarkMode ? 'border-zinc-800 bg-zinc-950/30' : 'border-gray-150 bg-gray-50/50'
        }`}>
          <div className={`relative w-full aspect-video md:h-72 rounded-xl overflow-hidden flex items-center justify-center shadow-inner ${isDarkMode ? 'bg-zinc-950' : 'bg-gray-100'}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activeImage})` }}
              />
            </AnimatePresence>
            <div className="absolute bottom-3 left-3 z-10">
              <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-md bg-rose-600 text-white flex items-center gap-1 shadow-md uppercase">
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
                    ? 'border-rose-500 scale-95 shadow-md' 
                    : isDarkMode ? 'border-zinc-800 hover:border-zinc-700' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgUrl})` }} />
              </div>
            ))}
          </div>
        </div>

        {/* النصف الأيمن: النصوص */}
        <div className="md:col-span-7 p-6 md:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2.5">{project.title}</h2>
            <p className={`text-sm md:text-base font-medium leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {project.description}
            </p>
          </div>

          <div className={`h-[1px] w-full mb-5 flex-shrink-0 ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-150'}`} />

          <div className="flex-1 flex flex-col gap-6 pr-1">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">Project Overview</h3>
              <p className={`text-sm leading-relaxed font-normal ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {project.longDescription}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className={`text-sm flex items-start gap-2.5 font-medium ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      <HiCheckCircle size={18} className="text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <TechnologiesSection tags={project.tags || []} isDarkMode={isDarkMode} />
          </div>

          <div className={`mt-6 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-shrink-0 border-t ${isDarkMode ? 'border-zinc-800' : 'border-gray-150'}`}>
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-rose-600/10 text-sm tracking-wide">
                <HiGlobeAlt size={18} /> Live Demo
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`w-full py-3 px-4 border font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-sm tracking-wide ${isDarkMode ? 'border-zinc-700 text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800' : 'border-gray-200 text-zinc-700 bg-gray-50 hover:bg-gray-100'}`}>
                <HiCodeBracket size={18} /> Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}