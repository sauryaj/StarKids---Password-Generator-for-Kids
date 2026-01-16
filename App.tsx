import React, { useState, useEffect, useCallback } from 'react';
import { Rocket, Star, Palette } from 'lucide-react';
import ThemeBackground from './components/ThemeBackground';
import PasswordCard from './components/PasswordCard';
import Footer from './components/Footer';
import { generatePassword } from './utils/passwordLogic';
import { GeneratedPassword, PasswordMode, ThemeId } from './types';
import { playSound } from './utils/sound';
import { themes } from './utils/themes';

const App: React.FC = () => {
  const [mode, setMode] = useState<PasswordMode>('simple');
  const [themeId, setThemeId] = useState<ThemeId>('space');
  const [password, setPassword] = useState<GeneratedPassword | null>(null);
  const [animateHeader, setAnimateHeader] = useState(false);

  const currentTheme = themes[themeId];

  const handleGenerate = useCallback(() => {
    const newPassword = generatePassword(mode);
    setPassword(newPassword);
    setAnimateHeader(true);
    playSound('generate');
    setTimeout(() => setAnimateHeader(false), 500);
  }, [mode]);

  // Generate initial password on mount and when mode changes
  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  return (
    <div className={`min-h-screen relative font-sans text-white transition-colors duration-1000`}>
      <ThemeBackground theme={currentTheme} />
      
      <main className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center min-h-screen">
        
        {/* Theme Selector (Top Right) */}
        <div className="absolute top-4 right-4 z-50">
            <div className="flex bg-black/30 backdrop-blur-md rounded-full p-1 border border-white/10">
                {(Object.keys(themes) as ThemeId[]).map((tId) => (
                    <button
                        key={tId}
                        onClick={() => setThemeId(tId)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${themeId === tId ? 'bg-white text-black scale-110 shadow-lg' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                        title={themes[tId].label}
                        aria-label={`Select ${themes[tId].label} Theme`}
                    >
                        <div className={`w-3 h-3 rounded-full ${tId === 'space' ? 'bg-indigo-500' : tId === 'ocean' ? 'bg-cyan-500' : tId === 'jungle' ? 'bg-green-500' : 'bg-pink-500'}`} />
                    </button>
                ))}
            </div>
        </div>

        {/* Header Section */}
        <header className="text-center mb-12 mt-8">
            <div className={`inline-flex items-center justify-center p-4 rounded-full mb-6 border-2 backdrop-blur-md transition-all duration-500 ${currentTheme.colors.cardBg} ${animateHeader ? 'scale-110' : 'scale-100'}`}>
                <Rocket size={40} className={`mr-3 transition-colors duration-500 ${currentTheme.colors.accent}`} />
                <h1 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent transition-all duration-500 ${currentTheme.colors.heading}`}>
                    StarKey
                </h1>
            </div>
            <p className={`text-xl max-w-md mx-auto transition-colors duration-500 ${currentTheme.colors.textMuted}`}>
                Create a secret code for your next mission!
            </p>
        </header>

        {/* Mode Toggle */}
        <div className="bg-black/30 backdrop-blur-md p-1 rounded-full flex mb-10 border border-white/10 relative">
             <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-out z-0 opacity-80 ${currentTheme.colors.accent.replace('text-', 'bg-')} ${mode === 'simple' ? 'left-1' : 'left-[calc(50%+4px)]'}`}
             />
            <button
                onClick={() => setMode('simple')}
                className={`relative z-10 px-8 py-2 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 ${mode === 'simple' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
                <Star size={16} />
                Simple
            </button>
            <button
                onClick={() => setMode('strong')}
                className={`relative z-10 px-8 py-2 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 ${mode === 'strong' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
                <Rocket size={16} />
                Strong
            </button>
        </div>

        {/* Main Card */}
        {password && (
            <PasswordCard 
                passwordData={password} 
                onGenerate={handleGenerate} 
                theme={currentTheme}
            />
        )}

        <Footer />
      </main>
    </div>
  );
};

export default App;