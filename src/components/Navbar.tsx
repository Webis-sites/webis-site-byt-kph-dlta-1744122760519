'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';
import clsx from 'clsx';

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive, onClick }) => {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      className={clsx(
        'relative px-4 py-2 mx-2 text-lg font-medium transition-all duration-300 cursor-pointer',
        'hover:text-primary rounded-xl',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
        'neumorphic-nav-item',
        isActive && 'text-primary font-bold'
      )}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
          layoutId="activeNavIndicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </ScrollLink>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { to: 'home', label: 'בית' },
    { to: 'about', label: 'אודות' },
    { to: 'services', label: 'שירותים' },
    { to: 'gallery', label: 'גלריה' },
    { to: 'contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.to);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={clsx(
        'fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 rtl',
        'glassmorphism-nav',
        scrolled ? 'py-2 shadow-lg' : 'py-4'
      )}
      dir="rtl"
      aria-label="ניווט ראשי"
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="glassmorphism-logo p-2 rounded-2xl">
            <h1 className="text-2xl font-bold text-primary">בית קפה דלתא</h1>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 space-x-reverse">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              isActive={activeSection === link.to}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className={clsx(
              'p-3 rounded-xl transition-all duration-300',
              'neumorphic-button focus:outline-none',
              'hover:text-primary'
            )}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism-mobile-menu"
          >
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  isActive={activeSection === link.to}
                  onClick={closeMenu}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;