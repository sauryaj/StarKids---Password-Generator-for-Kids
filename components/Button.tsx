import React from 'react';
import { ThemeConfig } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  themeConfig?: ThemeConfig; // Pass current theme
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', themeConfig, children, className = '', ...props }) => {
  const baseStyles = "transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed font-semibold tracking-wide";
  
  // Default to space styles if no theme provided (fallback)
  let variantStyles = "";
  
  if (variant === 'primary') {
    variantStyles = themeConfig ? themeConfig.colors.buttonPrimary : "bg-gradient-to-r from-nebula-purple to-nebula-pink text-white shadow-[0_0_20px_rgba(159,90,255,0.5)] hover:shadow-[0_0_30px_rgba(255,97,210,0.6)]";
    variantStyles += " py-4 px-8 rounded-full text-xl";
  } else if (variant === 'secondary') {
    variantStyles = themeConfig ? themeConfig.colors.buttonSecondary : "bg-space-700 hover:bg-space-800 text-nebula-cyan border-2 border-nebula-cyan/30";
    variantStyles += " py-2 px-6 rounded-full text-base border-2";
  } else if (variant === 'icon') {
    // Icon buttons inherit text color from parent or use specific interactive styles
    variantStyles = "p-3 rounded-full hover:bg-white/10 transition-colors";
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;