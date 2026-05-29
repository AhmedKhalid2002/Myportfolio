'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';

interface AboutProps {
  isDarkMode: boolean;
  setActiveTab: (tab: string) => void;
}

export default function About({ isDarkMode, setActiveTab }: AboutProps) {
  const { profile } = portfolioData;

  return (
    <section
      id="about"
      className={`py-12 px-6 max-w-6xl mx-auto border-b transition-colors duration-500 ${
        isDarkMode
          ? 'border-zinc-900 text-gray-100'
          : 'border-gray-200 text-zinc-900'
      }`}
    >
      {/* العنوان العلوي للقسم */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
          Biography
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* إطار وحاوية الصورة الشخصية */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`relative max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border p-3 transition-colors duration-500 ${
            isDarkMode
              ? 'border-zinc-800 bg-zinc-950'
              : 'border-gray-200 bg-white shadow-md'
          }`}
        >
          <div
            className={`aspect-[3/4] rounded-xl flex items-center justify-center transition-colors duration-500 ${
              isDarkMode
                ? 'bg-zinc-900 text-zinc-600'
                : 'bg-gray-100 text-zinc-400'
            }`}
          >
            <Image
              src={profile.myImage2}
              alt={profile.name}
              width={500}
              height={500}
              className="w-full h-full  object-cover"
            />{' '}
          </div>
        </motion.div>

        {/* النصوص والبيانات الترحيبية */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-zinc-800'
            }`}
          >
            Hi, I&apos;m <span className="text-rose-500">{profile.name}</span> –
            A MERN Stack Developer based in Egypt.
          </h3>

          <p
            className={`leading-relaxed mb-8 transition-colors duration-500 ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {profile.bio}
          </p>

          {/* كروت الـ Stats الإحصائية المتوافقة مع الـ 2 Modes */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div
              className={`p-4 rounded-xl border text-center transition-all duration-500 ${
                isDarkMode
                  ? 'bg-zinc-900/50 border-zinc-800'
                  : 'bg-gray-100 border-gray-200 shadow-sm'
              }`}
            >
              <span className="block text-2xl md:text-3xl font-extrabold text-rose-500">
                {profile.experienceYears}
              </span>
              <span
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                }`}
              >
                Experience
              </span>
            </div>

            <div
              className={`p-4 rounded-xl border text-center transition-all duration-500 ${
                isDarkMode
                  ? 'bg-zinc-900/50 border-zinc-800'
                  : 'bg-gray-100 border-gray-200 shadow-sm'
              }`}
            >
              <span className="block text-2xl md:text-3xl font-extrabold text-rose-500">
                {profile.completedProjects}
              </span>
              <span
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                }`}
              >
                Projects
              </span>
            </div>

            <div
              className={`p-4 rounded-xl border text-center transition-all duration-500 ${
                isDarkMode
                  ? 'bg-zinc-900/50 border-zinc-800'
                  : 'bg-gray-100 border-gray-200 shadow-sm'
              }`}
            >
              <span className="block text-2xl md:text-3xl font-extrabold text-rose-500">
                {profile.happyClients}
              </span>
              <span
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                }`}
              >
                Clients
              </span>
            </div>
          </div>

          {/* زر التواصل */}
          <button
            onClick={() => setActiveTab('contact')}
            className="inline-block px-6 py-3 bg-rose-600 text-white rounded font-medium hover:bg-rose-700 transition shadow-lg shadow-rose-600/10 active:scale-98"
          >
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
