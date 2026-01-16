import React, { useState } from 'react';
import { Copy, Volume2, Check, Shield } from 'lucide-react';
import { GeneratedPassword, ThemeConfig } from '../types';
import Button from './Button';
import { playSound } from '../utils/sound';

interface PasswordCardProps {
  passwordData: GeneratedPassword;
  onGenerate: () => void;
  theme: ThemeConfig;
}

const PasswordCard: React.FC<PasswordCardProps> = ({ passwordData, onGenerate, theme }) => {
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [particles, setParticles] = useState<{id: number, style: React.CSSProperties}[]>([]);

  // Determine strength based on components
  const isStrong = !!passwordData.components.special;

  const spawnConfetti = () => {
    const colors = ['#FF61D2', '#9F5AFF', '#00E5FF', '#FFCE00', '#FFFFFF'];
    const newParticles = Array.from({ length: 30 }).map((_, i) => {
      const angle = Math.random() * 360;
      const velocity = 60 + Math.random() * 100; // Distance to travel
      const tx = Math.cos(angle * (Math.PI / 180)) * velocity;
      const ty = Math.sin(angle * (Math.PI / 180)) * velocity;
      const rotation = Math.random() * 360;
      
      return {
        id: Date.now() + i,
        style: {
          '--tx': `${tx}px`,
          '--ty': `${ty}px`,
          '--r': `${rotation}deg`,
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        } as React.CSSProperties
      };
    });
    setParticles(newParticles);
    // Cleanup particles after animation
    setTimeout(() => setParticles([]), 1000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(passwordData.value);
      playSound('copy');
      setCopied(true);
      spawnConfetti();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const handleSpeak = () => {
    if (speaking) return;
    
    // Cancel any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance();
    
    // Slow down for kids
    utterance.rate = 0.8; 
    utterance.pitch = 1.1;

    // Construct a friendly reading
    let textToSpeak = "";
    
    // Spell out or say words clearly
    if (passwordData.components.special) {
        // Strong mode: Break it down
        textToSpeak = `The password is: ${passwordData.components.adjective}. ${passwordData.components.noun}. Symbol ${passwordData.components.special === '!' ? 'Exclamation mark' : passwordData.components.special}. Number ${passwordData.components.number}.`;
        
        // Add spelling for clarity
        textToSpeak += ` I will spell it out: ${passwordData.value.split('').join(' ')}.`;
    } else {
        // Simple mode
        textToSpeak = `The password is: ${passwordData.components.adjective} ${passwordData.components.noun}. Spelled: ${passwordData.value.split('').join(' ')}.`;
    }

    utterance.text = textToSpeak;
    
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`w-full max-w-2xl mx-auto backdrop-blur-md border-2 rounded-3xl p-8 relative overflow-hidden group transition-all duration-500 ${theme.colors.cardBg}`}>
      {/* Decorative Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${theme.colors.textMain}`} />

      {/* Password Display */}
      <div 
        className={`border rounded-2xl p-6 mb-8 text-center relative transition-colors duration-500 bg-black/20 border-white/10`}
        aria-live="polite"
        aria-label="Generated Password"
      >
        <div className={`font-mono text-4xl md:text-5xl lg:text-6xl tracking-wider break-all drop-shadow-md transition-colors duration-500 ${theme.colors.textMain}`}>
          {passwordData.value}
        </div>
        
        {/* Helper text showing parts */}
        <div className={`mt-4 flex flex-wrap justify-center gap-2 text-sm font-sans font-bold`}>
            <span className={`px-2 py-1 rounded ${theme.colors.parts.adj}`}>{passwordData.components.adjective}</span>
            <span className={`text-gray-400 opacity-50`}>+</span>
            <span className={`px-2 py-1 rounded ${theme.colors.parts.noun}`}>{passwordData.components.noun}</span>
            {passwordData.components.special && (
                <>
                    <span className={`text-gray-400 opacity-50`}>+</span>
                    <span className={`px-2 py-1 rounded ${theme.colors.parts.special}`}>{passwordData.components.special}</span>
                    <span className={`px-2 py-1 rounded ${theme.colors.parts.number}`}>{passwordData.components.number}</span>
                </>
            )}
        </div>

        {/* Strength Meter */}
        <div className="mt-6 w-full max-w-xs mx-auto">
          <div className={`flex justify-between items-center mb-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-500 ${theme.colors.textMuted}`}>
            <div className="flex items-center gap-1">
                <Shield size={12} />
                <span>Shield Strength</span>
            </div>
            <span className={isStrong ? theme.colors.strength.strongText : theme.colors.strength.weakText}>
              {isStrong ? "Super Strong" : "Good"}
            </span>
          </div>
          <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-white/10 p-0.5">
            <div 
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                isStrong 
                  ? `w-full bg-gradient-to-r ${theme.colors.strength.strongBar}` 
                  : `w-1/2 bg-gradient-to-r ${theme.colors.strength.weakBar}`
              }`}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <div className="flex gap-4 relative">
             <Button 
                variant="icon" 
                onClick={handleSpeak} 
                disabled={speaking}
                aria-label="Read password aloud"
                className={`${speaking ? "animate-pulse" : ""} ${theme.colors.textMain}`}
            >
                <Volume2 size={32} />
            </Button>
            
            <div className="relative">
                <Button 
                    variant="icon" 
                    onClick={handleCopy}
                    aria-label="Copy password to clipboard"
                    className={copied ? theme.colors.strength.strongText : theme.colors.textMain}
                >
                    {copied ? <Check size={32} /> : <Copy size={32} />}
                </Button>
                {/* Particles container */}
                {particles.map(p => (
                  <div key={p.id} className="particle" style={p.style} />
                ))}
            </div>
        </div>

        <Button onClick={onGenerate} className="w-full sm:w-auto" themeConfig={theme}>
          Generate New
        </Button>
      </div>
      
      {copied && (
        <div className={`absolute top-4 right-4 text-space-900 px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg z-20 bg-green-400`}>
            Copied!
        </div>
      )}
    </div>
  );
};

export default PasswordCard;