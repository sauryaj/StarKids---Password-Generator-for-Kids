import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 text-center max-w-2xl mx-auto px-4 pb-8 relative z-10">
      
      <div className="bg-black/40 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 mb-4 text-white/90">
          <ShieldCheck size={24} />
          <h3 className="text-lg font-bold">Safety First!</h3>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Parents & Teachers: <strong>StarKey</strong> runs entirely in your browser. 
          We never store, save, or see the passwords generated here. 
          Once you close this page, the password is gone forever!
        </p>
        <div className="text-sm text-gray-300/80 flex items-start justify-center gap-2 text-left bg-black/30 p-3 rounded-lg">
           <Info size={16} className="mt-1 shrink-0" />
           <p>
             Use these passwords for school accounts, games, and tablets. 
             Remember, a secret is only safe if you don't share it with anyone 
             (except your parents)!
           </p>
        </div>
      </div>
      
      <p className="mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} StarKey Explorer. Designed for safe galactic travels.
      </p>
    </footer>
  );
};

export default Footer;