import React from 'react';
import Head from 'next/head';
import { Inter, Heebo } from 'next/font/google';
import clsx from 'clsx';

// Hebrew font configuration
const heebo = Heebo({
  subsets: ['hebrew'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

// Fallback font for Latin characters
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'בית קפה דלתא - קפה איכותי בסביבה נעימה',
  description = 'בית קפה דלתא מציע קפה איכותי, מאפים טריים ואווירה נעימה. בואו לבקר אותנו!',
}: LayoutProps) {
  return (
    <div className={clsx(heebo.variable, inter.variable, 'min-h-screen')}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#4ECDC4" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="בית קפה דלתא" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* RTL Support */}
        <html lang="he" dir="rtl" />
      </Head>
      
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-background-light to-background">
        <header className="sticky top-0 z-50 w-full">
          <div className="glass-nav flex items-center justify-between px-6 py-4">
            <div className="neumorphic-logo font-heebo text-2xl font-bold text-primary">
              בית קפה דלתא
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6 space-x-reverse">
                {['ראשי', 'תפריט', 'אודות', 'אירועים', 'צור קשר'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item}`} 
                      className="neumorphic-link font-heebo text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button 
              className="md:hidden neumorphic-button p-2 rounded-full"
              aria-label="תפריט"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="glass-footer mt-auto py-8 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-heebo text-xl font-bold text-primary mb-4">בית קפה דלתא</h3>
                <p className="font-heebo text-secondary">מקום מושלם ליהנות מקפה איכותי ואווירה נעימה</p>
              </div>
              <div>
                <h3 className="font-heebo text-xl font-bold text-primary mb-4">שעות פתיחה</h3>
                <p className="font-heebo text-secondary">ראשון - חמישי: 08:00 - 22:00</p>
                <p className="font-heebo text-secondary">שישי: 08:00 - 14:00</p>
                <p className="font-heebo text-secondary">שבת: סגור</p>
              </div>
              <div>
                <h3 className="font-heebo text-xl font-bold text-primary mb-4">צור קשר</h3>
                <p className="font-heebo text-secondary">רחוב הדקל 123, תל אביב</p>
                <p className="font-heebo text-secondary">טלפון: 03-1234567</p>
                <p className="font-heebo text-secondary">דוא"ל: info@delta-cafe.co.il</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200/20 text-center">
              <p className="font-heebo text-secondary text-sm">
                &copy; {new Date().getFullYear()} בית קפה דלתא. כל הזכויות שמורות.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}