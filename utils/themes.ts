import { ThemeConfig, ThemeId } from '../types';

export const themes: Record<ThemeId, ThemeConfig> = {
  space: {
    id: 'space',
    label: 'Galactic',
    colors: {
      appBg: 'bg-gradient-to-b from-[#0B0D17] via-[#151932] to-[#0B0D17]',
      cardBg: 'bg-[#151932]/80 border-[#2A2F5B] shadow-[0_0_30px_rgba(0,229,255,0.1)]',
      heading: 'bg-gradient-to-r from-[#00E5FF] via-white to-[#FF61D2]',
      textMain: 'text-[#00E5FF]',
      textMuted: 'text-gray-400',
      accent: 'text-[#FF61D2]',
      buttonPrimary: 'bg-gradient-to-r from-[#9F5AFF] to-[#FF61D2] shadow-[0_0_20px_rgba(159,90,255,0.5)] hover:shadow-[0_0_30px_rgba(255,97,210,0.6)] text-white',
      buttonSecondary: 'bg-[#2A2F5B] text-[#00E5FF] border-[#00E5FF]/30 hover:bg-[#151932]',
      parts: {
        adj: 'text-[#FF61D2] bg-[#151932]',
        noun: 'text-[#FFCE00] bg-[#151932]',
        special: 'text-white bg-[#151932]',
        number: 'text-[#9F5AFF] bg-[#151932]'
      },
      strength: {
          weakText: 'text-[#FFCE00]',
          strongText: 'text-green-400',
          weakBar: 'from-orange-400 to-[#FFCE00] shadow-[0_0_10px_rgba(255,206,0,0.5)]',
          strongBar: 'from-green-500 to-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]'
      }
    },
    particle: 'star'
  },
  ocean: {
    id: 'ocean',
    label: 'Deep Sea',
    colors: {
      appBg: 'bg-gradient-to-b from-[#001E2B] via-[#00334E] to-[#001E2B]',
      cardBg: 'bg-[#00334E]/70 border-[#006064] shadow-[0_0_30px_rgba(76,201,240,0.1)]',
      heading: 'bg-gradient-to-r from-[#4CC9F0] via-white to-[#F72585]',
      textMain: 'text-[#4CC9F0]',
      textMuted: 'text-slate-400',
      accent: 'text-[#F72585]',
      buttonPrimary: 'bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] shadow-[0_0_20px_rgba(67,97,238,0.5)] hover:shadow-[0_0_30px_rgba(76,201,240,0.6)] text-white',
      buttonSecondary: 'bg-[#004D40] text-[#4CC9F0] border-[#4CC9F0]/30 hover:bg-[#00334E]',
      parts: {
        adj: 'text-[#F72585] bg-[#001E2B]',
        noun: 'text-[#FACC15] bg-[#001E2B]',
        special: 'text-white bg-[#001E2B]',
        number: 'text-[#4361EE] bg-[#001E2B]'
      },
      strength: {
          weakText: 'text-[#FACC15]',
          strongText: 'text-teal-400',
          weakBar: 'from-yellow-400 to-orange-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]',
          strongBar: 'from-teal-400 to-cyan-300 shadow-[0_0_10px_rgba(45,212,191,0.5)]'
      }
    },
    particle: 'bubble'
  },
  jungle: {
    id: 'jungle',
    label: 'Wild Jungle',
    colors: {
      appBg: 'bg-gradient-to-b from-[#052e16] via-[#14532d] to-[#052e16]',
      cardBg: 'bg-[#14532d]/70 border-[#166534] shadow-[0_0_30px_rgba(132,204,22,0.1)]',
      heading: 'bg-gradient-to-r from-[#bef264] via-white to-[#facc15]',
      textMain: 'text-[#bef264]',
      textMuted: 'text-green-200/60',
      accent: 'text-[#facc15]',
      buttonPrimary: 'bg-gradient-to-r from-[#65a30d] to-[#facc15] shadow-[0_0_20px_rgba(101,163,13,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] text-white',
      buttonSecondary: 'bg-[#14532d] text-[#bef264] border-[#bef264]/30 hover:bg-[#052e16]',
      parts: {
        adj: 'text-[#facc15] bg-[#052e16]', // Yellow
        noun: 'text-[#4ade80] bg-[#052e16]', // Green
        special: 'text-white bg-[#052e16]',
        number: 'text-[#fb923c] bg-[#052e16]' // Orange
      },
      strength: {
          weakText: 'text-[#facc15]',
          strongText: 'text-[#a3e635]',
          weakBar: 'from-orange-500 to-yellow-500 shadow-[0_0_10px_rgba(251,146,60,0.5)]',
          strongBar: 'from-lime-500 to-green-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]'
      }
    },
    particle: 'firefly'
  },
  candy: {
    id: 'candy',
    label: 'Sugar Rush',
    colors: {
      appBg: 'bg-gradient-to-b from-[#4a044e] via-[#701a75] to-[#4a044e]',
      cardBg: 'bg-[#701a75]/60 border-[#a21caf] shadow-[0_0_30px_rgba(244,114,182,0.1)]',
      heading: 'bg-gradient-to-r from-[#f472b6] via-white to-[#c084fc]',
      textMain: 'text-[#f9a8d4]',
      textMuted: 'text-pink-200/50',
      accent: 'text-[#c084fc]',
      buttonPrimary: 'bg-gradient-to-r from-[#db2777] to-[#f472b6] shadow-[0_0_20px_rgba(219,39,119,0.5)] hover:shadow-[0_0_30px_rgba(244,114,182,0.6)] text-white',
      buttonSecondary: 'bg-[#500724] text-[#f9a8d4] border-[#f9a8d4]/30 hover:bg-[#831843]',
      parts: {
        adj: 'text-[#f472b6] bg-[#500724]', // Pink
        noun: 'text-[#22d3ee] bg-[#500724]', // Cyan
        special: 'text-white bg-[#500724]',
        number: 'text-[#facc15] bg-[#500724]' // Yellow
      },
      strength: {
          weakText: 'text-[#f472b6]',
          strongText: 'text-[#22d3ee]',
          weakBar: 'from-[#db2777] to-[#f472b6] shadow-[0_0_10px_rgba(244,114,182,0.5)]',
          strongBar: 'from-[#0891b2] to-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.5)]'
      }
    },
    particle: 'sprinkle'
  }
};