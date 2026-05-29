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
        isDarkMode ? 'border-zinc-900 bg-[#0b0c10]/80' : 'border-gray-200 bg-white/80'
      }`}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center font-black text-white text-lg">A</div>
        <nav className="flex flex-col gap-5">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`group relative w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${
              activeTab === item.id ? 'bg-rose-600 border-rose-500 text-white' : isDarkMode ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400' : 'bg-gray-100 border-gray-200 text-zinc-500'
            }`}>
              {item.icon}
              <span className="absolute left-16 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold whitespace-nowrap shadow-md">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
        <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
      </aside>

      {/* --- الشاشات الصغيرة (Bottom Navbar) --- */}
      <nav className={`xl:hidden fixed bottom-4 left-4 right-4 rounded-2xl border backdrop-blur-md z-50 p-3 flex justify-around items-center transition-all duration-500 ${
        isDarkMode ? 'bg-[#0b0c10]/90 border-zinc-800' : 'bg-white/90 border-gray-200 shadow-xl'
      }`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`p-3 rounded-xl transition-all ${
              activeTab === item.id ? 'text-rose-500 bg-rose-500/10' : isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </>
  );
}