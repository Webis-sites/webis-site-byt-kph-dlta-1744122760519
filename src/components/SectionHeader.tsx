'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionHeaderProps {
  /**
   * Main heading text
   */
  title: string;
  
  /**
   * Optional subheading text
   */
  subtitle?: string;
  
  /**
   * Alignment of the header content
   * @default 'center'
   */
  align?: 'right' | 'center' | 'left';
  
  /**
   * Animation variant for the decorative elements
   * @default 'underline'
   */
  animationVariant?: 'underline' | 'highlight' | 'fade';
  
  /**
   * Optional className for additional styling
   */
  className?: string;
  
  /**
   * Optional custom color for the decorative elements
   * Will override the default primary color
   */
  accentColor?: string;
}

/**
 * A reusable RTL section header component for 'בית קפה דלתא'
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  animationVariant = 'underline',
  className,
  accentColor,
}) => {
  // Animation variants
  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '100%', 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  
  const highlightVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 0.15,
      transition: { 
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // Determine text alignment classes
  const alignmentClasses = {
    right: 'text-right',
    center: 'text-center',
    left: 'text-left'
  };

  // Determine decoration position classes
  const decorationPositionClasses = {
    right: 'mr-auto',
    center: 'mx-auto',
    left: 'ml-auto'
  };

  return (
    <div 
      dir="rtl" 
      className={clsx(
        'relative w-full py-6 px-4',
        alignmentClasses[align],
        className
      )}
    >
      {/* Decorative element - top */}
      <div className={clsx('w-16 h-1 mb-4', decorationPositionClasses[align])}>
        <motion.div 
          className="h-full rounded-full"
          style={{ 
            backgroundColor: accentColor || 'var(--color-primary, #4ECDC4)'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeVariants}
        />
      </div>
      
      {/* Main heading */}
      <div className="relative inline-block">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
          {title}
        </h2>
        
        {/* Animated underline or highlight based on variant */}
        {animationVariant === 'underline' && (
          <motion.div 
            className="h-1 rounded-full absolute bottom-0 right-0"
            style={{ 
              backgroundColor: accentColor || 'var(--color-primary, #4ECDC4)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={underlineVariants}
          />
        )}
        
        {animationVariant === 'highlight' && (
          <motion.div 
            className="absolute bottom-0 right-0 h-3 w-full -z-10 rounded-sm origin-right"
            style={{ 
              backgroundColor: accentColor || 'var(--color-primary, #4ECDC4)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={highlightVariants}
          />
        )}
      </div>
      
      {/* Subtitle (if provided) */}
      {subtitle && (
        <motion.p 
          className="text-base md:text-lg text-gray-600 mt-2 max-w-2xl glass-card"
          style={{
            margin: align === 'center' ? '0 auto' : align === 'left' ? '0 auto 0 0' : '0 0 0 auto'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeVariants}
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Decorative element - bottom */}
      <div className={clsx('w-24 h-1 mt-4', decorationPositionClasses[align])}>
        <motion.div 
          className="h-full rounded-full"
          style={{ 
            backgroundColor: accentColor || 'var(--color-primary, #4ECDC4)'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeVariants}
        />
      </div>
    </div>
  );
};

export default SectionHeader;