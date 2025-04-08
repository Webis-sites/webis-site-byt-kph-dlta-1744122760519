'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(78, 205, 196, 0.3)',
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      dir="rtl"
      className={clsx(
        'relative h-screen w-full overflow-hidden',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="בית קפה דלתא - אווירה"
          layout="fill"
          objectFit="cover"
          priority
          className="transition-transform duration-10000 ease-in-out animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </div>

      {/* Glassmorphism Container */}
      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-4xl rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 shadow-glass">
          {/* Logo */}
          <motion.div 
            className="mx-auto mb-8 flex justify-center"
            variants={itemVariants}
          >
            <div className="h-24 w-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-neumorphic">
              <span className="text-3xl font-bold text-white">דלתא</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-4 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            בית קפה מוביל בישראל
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mb-8 text-center text-xl text-white/90 md:text-2xl"
            variants={itemVariants}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="rounded-xl bg-primary px-8 py-4 text-lg font-medium text-white shadow-neumorphic transition-all hover:bg-primary/90"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="קבע תור עכשיו"
            >
              קבע תור עכשיו
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary/20 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
      <motion.div
        className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
};

export default HeroSection;