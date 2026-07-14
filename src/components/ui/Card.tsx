import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-[#0e1726]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] relative overflow-hidden transition-all duration-300 ${className}`}>
      {/* Top Inner Glow for Premium Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent z-0"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;
