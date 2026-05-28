'use client';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer
      className={`w-full border-t py-8 px-6 text-center text-xs flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto gap-4 transition-colors duration-500 ${
        isDarkMode
          ? 'border-zinc-900/80 text-zinc-500'
          : 'border-gray-200 text-zinc-400'
      }`}
    >
      {/* اسم البراند الصغير سفلي */}
      <div
        className={`font-bold text-sm transition-colors duration-500 ${
          isDarkMode ? 'text-white' : 'text-zinc-900'
        }`}
      >
        Ahmed <span className="text-rose-500">.</span>
      </div>

      <div className="font-medium">
        &copy; 2026 Ahmed Khalid. All rights reserved.
      </div>
    </footer>
  );
}
