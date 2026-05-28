'use client';

import { HiOutlineHome, HiOutlineUser, HiOutlineAcademicCap, HiOutlineCpuChip, HiOutlineBriefcase, HiOutlineCommandLine, HiOutlineEnvelope } from 'react-icons/hi2';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

export default function Navigation({ activeTab, setActiveTab, isDarkMode }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: <HiOutlineHome size={22} /> },
    { id: 'about', label: 'About', icon: <HiOutlineUser size={22} /> },
    { id: 'qualification', label: 'Journey', icon: <HiOutlineAcademicCap size={22} /> },
    { id: 'skills', label: 'Skills', icon: <HiOutlineCpuChip size={22} /> },
    { id: 'works', label: 'Works', icon: <HiOutlineBriefcase size={22} /> },
    { id: 'services', label: 'Services', icon: <HiOutlineCommandLine size={22} /> },
    { id: 'contact', label: 'Contact', icon: <HiOutlineEnvelope size={22} /> },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen w-20 hidden xl:flex flex-col items-center justify-between py-8 border-r backdrop-blur-md z-50 transition-all duration-500 ${
      isDarkMode 
        ? 'border-zinc-900 bg-[#0b0c10]/80' 
        : 'border-gray-200 bg-white/80 shadow-sm'
    }`}>
      {/* الشعار الشخصي العلوي */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-rose-500/20">
        A
      </div>

      {/* قائمة أزرار التنقل */}
      <nav className="flex flex-col gap-5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`group relative w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${
              activeTab === item.id
                ? 'bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-600/20'
                : isDarkMode
                  ? 'bg-zinc-900/50 border-zinc-800/60 text-zinc-400 hover:text-rose-500 hover:bg-zinc-900'
                  : 'bg-gray-100 border-gray-200/80 text-zinc-500 hover:text-rose-600 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            
            {/* التلميح الجانبي التوضيحي البسيط والمريح بدون تعقيد */}
            <span className="absolute left-16 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-left px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold tracking-wider whitespace-nowrap pointer-events-none shadow-md shadow-rose-600/10">
              {item.label}
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-rose-600" />
            </span>
          </button>
        ))}
      </nav>

      {/* مؤشر الحالة السفلي المتحرك */}
      <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
    </aside>
  );
}