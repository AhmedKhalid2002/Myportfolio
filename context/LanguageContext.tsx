'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string; // دالة لترجمة الكلمات الثابتة
  dir: 'rtl' | 'ltr';
}

// قاموس الكلمات الثابتة (أزرار، عناوين)
const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_qualification: 'Journey',
    nav_skills: 'Skills',
    nav_works: 'Works',
    nav_services: 'Services',
    nav_contact: 'Contact',
    hero_greeting: 'Hi, I am',
    hero_role_prefix: 'I am a',
    btn_contact: 'Contact Me',
    btn_download_cv: 'Download CV',
    about_title: 'About Me',
    about_subtitle: 'Biography',
    about_btn_talk: "Let's Talk",
    stats_experience: 'Experience',
    stats_projects: 'Projects',
    stats_clients: 'Clients',
    skills_title: 'Technical Skills',
    skills_subtitle: 'Abilities',
    skills_desc:
      'Technologies and tools I use to build exceptional digital experiences.',
    services_title: 'What I Offer',
    services_subtitle: 'Services',
    contact_title: "Let's Talk",
    contact_subtitle: 'Get In Touch',
    contact_desc:
      'Feel free to reach out through any of these channels. I am always open to discussing new projects or opportunities!',
    footer_rights: 'All Rights Reserved.',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'عني',
    nav_qualification: 'المسيرة',
    nav_skills: 'المهارات',
    nav_works: 'الأعمال',
    nav_services: 'الخدمات',
    nav_contact: 'تواصل',
    hero_greeting: 'مرحباً، أنا',
    hero_role_prefix: 'أنا',
    btn_contact: 'تواصل معي',
    btn_download_cv: 'تحميل السيرة الذاتية',
    about_title: 'عني',
    about_subtitle: 'السيرة الذاتية',
    about_btn_talk: 'لنتحدث',
    stats_experience: 'خبرة',
    stats_projects: 'مشاريع',
    stats_clients: 'عملاء',
    skills_title: 'المهارات التقنية',
    skills_subtitle: 'القدرات',
    skills_desc: 'التقنيات والأدوات التي أستخدمها لبناء تجارب رقمية استثنائية.',
    services_title: 'ما أقدمه',
    services_subtitle: 'الخدمات',
    contact_title: 'لنتحدث',
    contact_subtitle: 'تواصل معي',
    contact_desc:
      'لا تتردد في التواصل من خلال أي من هذه القنوات. أنا دائماً منفتح لمناقشة المشاريع الجديدة أو الفرص!',
    footer_rights: 'جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const t = (key: string): string => {
    return translations[lang][key as keyof (typeof translations)['en']] || key;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    // تحديث اتجاه الـ body أيضاً لضمان التوافق
    document.body.dir = dir;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
