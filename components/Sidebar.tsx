'use client';

import { HiOutlineHome, HiOutlineUser, HiOutlineAcademicCap, HiOutlineCpuChip, HiOutlineBriefcase, HiOutlineCommandLine, HiOutlineEnvelope } from 'react-icons/hi2';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

export const navItems = [
 { id: 'home', label: 'Home', icon: <HiOutlineHome size={22} /> },
 { id: 'about', label: 'About', icon: <HiOutlineUser size={22} /> },
 { id: 'qualification', label: 'Journey', icon: <HiOutlineAcademicCap size={22} /> },
 { id: 'skills', label: 'Skills', icon: <HiOutlineCpuChip size={22} /> },
 { id: 'works', label: 'Works', icon: <HiOutlineBriefcase size={22} /> },
 { id: 'services', label: 'Services', icon: <HiOutlineCommandLine size={22} /> },
 { id: 'contact', label: 'Contact', icon: <HiOutlineEnvelope size={22} /> },
];

export default function Navigation({ activeTab, setActiveTab, isDarkMode }: NavigationProps) {

  return (
    <>
      {/* --- الشاشات الكبيرة (Side Navbar) --- */}
      <aside className={`fixed left-0 top-0 h-screen w-20 hidden xl:flex flex-col items-center justify-between py-8 border-r backdrop-blur-md z-50 transition-all duration-500 ${
        isDarkMode ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-white/80'
      }`}>
        {/* الشعار */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-cyan-500/20">
          A
        </div>
        
        <nav className="flex flex-col gap-5">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveTab(item.id)} 
              className={`group relative w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-600 border-transparent text-white shadow-lg shadow-cyan-500/30' 
                  : isDarkMode 
                    ? 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-600/30' 
                    : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-300'
              }`}
            >
              {item.icon}
              {/* Tooltip */}
              <span className={`absolute left-16 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 px-3 py-1.5 rounded-lg text-white text-xs font-bold whitespace-nowrap shadow-md transition-all duration-300 ${
                isDarkMode ? 'bg-cyan-600' : 'bg-gradient-to-r from-cyan-500 to-sky-600'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
        
        {/* نقطة الوميض السفلية */}
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
      </aside>

      {/* --- الشاشات الصغيرة (Bottom Navbar) --- */}
      <nav className={`xl:hidden fixed bottom-4 left-4 right-4 rounded-2xl border backdrop-blur-md z-50 p-3 flex justify-around items-center transition-all duration-500 ${
        isDarkMode ? 'bg-slate-950/90 border-slate-800 shadow-xl shadow-cyan-900/10' : 'bg-white/90 border-slate-200 shadow-xl'
      }`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              activeTab === item.id 
              ? 'text-cyan-500 bg-cyan-500/10 shadow-inner' 
              : isDarkMode 
                ? 'text-slate-500 hover:text-cyan-400' 
                : 'text-slate-400 hover:text-cyan-600'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </>
  );
}