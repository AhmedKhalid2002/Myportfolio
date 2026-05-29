import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ahmed Khalid | Portfolio',
  description: 'MERN Stack & Next.js Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* تم تحديث الخلفية الافتراضية لتكون من عائلة slate */}
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 antialiased">
       {children}
      </body>
    </html>
  );
}