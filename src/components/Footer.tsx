'use client';

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks: NavLink[] = [
    { label: 'דף הבית', href: '/' },
    { label: 'אודות', href: '/about' },
    { label: 'תפריט', href: '/menu' },
    { label: 'שירותים', href: '/services' },
    { label: 'גלריה', href: '/gallery' },
    { label: 'צור קשר', href: '/contact' },
  ];
  
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook />, href: 'https://facebook.com', ariaLabel: 'פייסבוק' },
    { icon: <FaInstagram />, href: 'https://instagram.com', ariaLabel: 'אינסטגרם' },
    { icon: <FaTwitter />, href: 'https://twitter.com', ariaLabel: 'טוויטר' },
    { icon: <FaWhatsapp />, href: 'https://whatsapp.com', ariaLabel: 'וואטסאפ' },
  ];
  
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'רחוב הרצל 123, תל אביב', ariaLabel: 'כתובת' },
    { icon: <FaPhone />, text: '03-1234567', ariaLabel: 'טלפון' },
    { icon: <FaEnvelope />, text: 'info@deltacafe.co.il', ariaLabel: 'אימייל' },
  ];
  
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-md border-t border-white/20 shadow-inner rtl" dir="rtl">
      {/* Glass effect container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and about section */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800">בית קפה דלתא</h2>
              <div className="h-1 w-20 bg-primary rounded-full mt-2"></div>
            </div>
            <p className="text-gray-600 mb-6">
              בית קפה דלתא מציע חוויית קפה ייחודית עם תפריט עשיר ואווירה נעימה. אנו מתמחים בקפה איכותי, מאפים טריים ומנות גורמה.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="neumorphic-social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">ניווט מהיר</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="ml-2">›</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">צור קשר</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="neumorphic-icon ml-3">
                    {item.icon}
                  </div>
                  <span className="text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4">שעות פעילות</h4>
              <div className="space-y-2 text-gray-600">
                <p>ראשון - חמישי: 08:00 - 22:00</p>
                <p>שישי: 08:00 - 16:00</p>
                <p>שבת: 10:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-12 mb-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">הירשמו לניוזלטר שלנו</h3>
            <p className="text-gray-600 mb-4">קבלו עדכונים על מבצעים, אירועים ומנות חדשות!</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="הזינו את כתובת האימייל שלכם"
                className="neumorphic-input flex-grow px-4 py-3 rounded-lg"
                aria-label="כתובת אימייל לניוזלטר"
              />
              <motion.button
                type="submit"
                className="neumorphic-button bg-primary text-white px-6 py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                הרשמה
              </motion.button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} בית קפה דלתא. כל הזכויות שמורות.
          </p>
          <div className="flex space-x-6 space-x-reverse text-sm">
            <a href="/privacy" className="text-gray-500 hover:text-primary transition-colors">מדיניות פרטיות</a>
            <a href="/terms" className="text-gray-500 hover:text-primary transition-colors">תנאי שימוש</a>
            <a href="/accessibility" className="text-gray-500 hover:text-primary transition-colors">נגישות</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;