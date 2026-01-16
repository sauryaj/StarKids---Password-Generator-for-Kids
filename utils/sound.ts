// Simple synth for sound effects to avoid external asset dependencies
let audioCtx: AudioContext | null = null;

const getCtx = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const CtxClass = window.AudioContext || (window as any).webkitAudioContext;
    if (CtxClass) {
        audioCtx = new CtxClass();
    }
  }
  return audioCtx;
};

export const playSound = (type: 'generate' | 'copy') => {
  const ctx = getCtx();
  if (!ctx) return;
  
  // Resume context if suspended (browser autoplay policy)
  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  const now = ctx.currentTime;

  if (type === 'generate') {
    // Space-y blip
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.start(now);
    osc.stop(now + 0.15);
  } else if (type === 'copy') {
    // Success chime (Major third)
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
    
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.3);
    
    osc.start(now);
    osc.stop(now + 0.3);
  }
};