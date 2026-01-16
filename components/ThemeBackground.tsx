import React, { useEffect, useState } from 'react';
import { ThemeConfig } from '../types';

interface Particle {
  id: number;
  style: React.CSSProperties;
  className?: string;
}

const ThemeBackground: React.FC<{ theme: ThemeConfig }> = ({ theme }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 40;
    const newParticles: Particle[] = Array.from({ length: particleCount }).map((_, i) => {
      // Common randomness
      const left = Math.random() * 100; // %
      const duration = Math.random() * 5 + 5; // s

      if (theme.particle === 'bubble') {
         // Ocean Bubbles
         const size = Math.random() * 20 + 5;
         const delay = Math.random() * 10;
         return {
            id: i,
            style: {
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `floatUp ${duration + 5}s linear infinite`,
                animationDelay: `-${delay}s`,
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1))',
                borderRadius: '50%',
                position: 'absolute',
                bottom: '-20px' // Start below screen handled by keyframe usually, but setting initial
            }
         }
      } else if (theme.particle === 'firefly') {
        // Jungle Fireflies
        const top = Math.random() * 100;
        const size = Math.random() * 4 + 2;
        const delay = Math.random() * 5;
        return {
            id: i,
            style: {
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                // Compound animation: Wander (movement) + Pulse (Glow)
                animation: `wander ${duration}s ease-in-out infinite alternate, fireflyPulse 2s ease-in-out infinite`,
                animationDelay: `-${delay}s`,
                backgroundColor: '#bef264', // Lime green
                borderRadius: '50%',
                position: 'absolute',
                boxShadow: '0 0 5px #bef264'
            }
        }
      } else if (theme.particle === 'sprinkle') {
        // Candy Sprinkles
        const sizeW = 4;
        const sizeH = 12;
        const delay = Math.random() * 10;
        const colors = ['#f472b6', '#22d3ee', '#facc15', '#a78bfa'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return {
            id: i,
            style: {
                left: `${left}%`,
                width: `${sizeW}px`,
                height: `${sizeH}px`,
                backgroundColor: color,
                animation: `spinFloat ${duration}s linear infinite`,
                animationDelay: `-${delay}s`,
                position: 'absolute',
                bottom: '-20px'
            }
        }
      } else {
        // Space Stars (Default)
        const top = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const twinkleDuration = Math.random() * 3 + 2;
        return {
            id: i,
            style: {
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `twinkle ${twinkleDuration}s ease-in-out infinite`,
                backgroundColor: 'white',
                borderRadius: '50%',
                position: 'absolute',
                opacity: 0.5
            }
        }
      }
    });
    setParticles(newParticles);
  }, [theme.particle]);

  return (
    <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-1000 ${theme.colors.appBg}`}>
      {particles.map((p) => (
        <div
          key={`${theme.id}-${p.id}`} // Re-mount on theme change to reset animation
          style={p.style}
        />
      ))}
      {/* Overlay Gradient for depth if needed, can vary by theme but keeping simple for now */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
    </div>
  );
};

export default ThemeBackground;