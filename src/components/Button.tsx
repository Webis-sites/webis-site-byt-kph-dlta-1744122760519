'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  
  /**
   * Whether the button should take the full width of its container
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Optional icon to display before the button text
   */
  startIcon?: React.ReactNode;
  
  /**
   * Optional icon to display after the button text
   */
  endIcon?: React.ReactNode;
  
  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * The children of the button
   */
  children: React.ReactNode;
}

/**
 * A reusable RTL-aware button component for 'בית קפה דלתא'
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      startIcon,
      endIcon,
      isLoading = false,
      className,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Base styles for all buttons
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 relative overflow-hidden rtl:text-right ltr:text-left';
    
    // Variant styles
    const variantStyles = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-[0_4px_14px_0_rgba(78,205,196,0.39)] backdrop-blur-sm',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-[0_4px_14px_0_rgba(100,100,100,0.39)] backdrop-blur-sm',
      outline: 'bg-opacity-10 bg-white backdrop-filter backdrop-blur-md border border-white border-opacity-20 text-gray-800 dark:text-white hover:bg-opacity-20 active:bg-opacity-30 shadow-[0_4px_14px_0_rgba(255,255,255,0.1)]'
    };
    
    // Size styles
    const sizeStyles = {
      sm: 'text-sm py-1.5 px-3',
      md: 'text-base py-2.5 px-5',
      lg: 'text-lg py-3 px-6'
    };
    
    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';
    
    // Disabled styles
    const disabledStyles = disabled || isLoading ? 'opacity-70 cursor-not-allowed' : '';
    
    // Neumorphic and glassmorphism combined styles
    const specialEffects = variant === 'outline' 
      ? 'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.1)]'
      : 'hover:shadow-[0_10px_20px_rgba(78,205,196,0.2),0_6px_6px_rgba(78,205,196,0.1)]';
    
    return (
      <motion.button
        ref={ref}
        type={type}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          disabledStyles,
          specialEffects,
          className
        )}
        disabled={disabled || isLoading}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
        whileHover={{ y: disabled || isLoading ? 0 : -2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        aria-busy={isLoading}
        dir="auto"
        {...props}
      >
        {isLoading && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center bg-inherit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg
              className="animate-spin h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </motion.span>
        )}
        
        <span className={clsx('flex items-center gap-2', isLoading && 'opacity-0')}>
          {startIcon && <span className="me-1.5">{startIcon}</span>}
          {children}
          {endIcon && <span className="ms-1.5">{endIcon}</span>}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;