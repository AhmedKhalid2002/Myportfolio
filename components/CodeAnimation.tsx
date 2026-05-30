'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CodeSnippet {
  code: string;
  language: string;
}

const codeSnippets: CodeSnippet[] = [
  {
    code: `const buildDreams = () => {
  return ✨ Amazing Projects ✨;
};`,
    language: 'javascript',
  },
  {
    code: `function createMagic() {
  let passion = 100;
  return passion.map(code => love);
}`,
    language: 'javascript',
  },
  {
    code: `export const MySkills = {
  frontend: ['React', 'Next.js', 'TypeScript'],
  backend: ['Node.js', 'Express', 'MongoDB'],
  mindset: 'Never Stop Learning'
};`,
    language: 'javascript',
  },
  {
    code: `<Component>
  <Innovation>
    <Passion>
      <Code />
    </Passion>
  </Innovation>
</Component>`,
    language: 'jsx',
  },
  {
    code: `async function developSolutions() {
  const ideas = await brainstorm();
  const built = ideas.map(code);
  return deployed.live();
}`,
    language: 'javascript',
  },
  {
    code: `interface Developer {
  name: "Ahmed Khalid";
  passion: "Web Development";
  goal: "Build Amazing Apps";
}`,
    language: 'typescript',
  },
];

const colors = [
  '#06b6d4', // cyan-500
  '#0ea5e9', // sky-500
  '#ec4899', // pink-500
  '#8b5cf6', // violet-500
  '#6366f1', // indigo-500
];

export default function CodeAnimation() {
  const [displayedCode, setDisplayedCode] = useState<string>('');
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const currentSnippet = codeSnippets[currentSnippetIndex].code;
    const typingSpeed = isDeleting ? 20 : 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentSnippet.length) {
          setDisplayedCode(currentSnippet.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          // الانتظار قبل الحذف
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentCharIndex > 0) {
          setDisplayedCode(currentSnippet.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentSnippetIndex]);

  const CodeLine = ({ text, delay }: { text: string; delay: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="text-sm font-mono leading-relaxed"
      >
        {text}
      </motion.div>
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* خلفية متحركة من الأكواد */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [50, -50],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              delay: index * 0.5,
            }}
            className="relative text-xs md:text-sm font-mono p-3 rounded-lg border backdrop-blur-sm"
            style={{
              borderColor: colors[index % colors.length],
              color: colors[index % colors.length],
              backgroundColor: `${colors[index % colors.length]}10`,
            }}
          >
            <div className="line-clamp-4">
              {
                [
                  'const hero = ∞',
                  'function create() {}',
                  'return <App />',
                  'while(learning) {}',
                  'export default Code',
                  'async function() {}',
                ][index]
              }
            </div>
          </motion.div>
        ))}
      </div>

      {/* الكود الرئيسي المتحرك في الوسط */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xl rounded-xl border border-cyan-500/20 p-6 md:p-8 bg-gradient-to-br from-slate-900/30 to-slate-900/10"
        >
          {/* رأس الكود */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* محتوى الكود المكتوب */}
          <div className="font-mono text-xs md:text-sm text-cyan-400 space-y-2 min-h-[120px]">
            {displayedCode.split('\n').map((line, index) => (
              <div key={index} className="flex">
                <span className="text-cyan-600 mr-3 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  style={{
                    color:
                      line.includes('const') || line.includes('function')
                        ? '#c084fc'
                        : line.includes('return')
                          ? '#34d399'
                          : '#06b6d4',
                  }}
                >
                  {line}
                </span>
                {index === displayedCode.split('\n').length - 1 &&
                  !isDeleting && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 text-cyan-400"
                    >
                      |
                    </motion.span>
                  )}
              </div>
            ))}
          </div>

          {/* شريط سفلي */}
          <div className="mt-4 pt-4 border-t border-cyan-500/20 text-right text-xs text-cyan-600">
            &gt; Code is Poetry
          </div>
        </motion.div>
      </div>

      {/* جزيئات طائرة */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: colors[index % colors.length],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
