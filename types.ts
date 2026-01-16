export type PasswordMode = 'simple' | 'strong';

export interface GeneratedPassword {
  value: string;
  phonetic: string; // Used for TTS to read it clearly (e.g., "Blue Fish" vs "bluefish")
  components: {
    adjective: string;
    noun: string;
    special?: string;
    number?: string;
  };
}

export interface Vocabulary {
  nouns: string[];
  adjectives: string[];
}

export type ThemeId = 'space' | 'ocean' | 'jungle' | 'candy';

export interface ThemeConfig {
  id: ThemeId;
  label: string;
  colors: {
    appBg: string; // Gradient class
    cardBg: string; // Class for card background/border
    heading: string; // Text gradient or color class
    textMain: string;
    textMuted: string;
    accent: string;
    buttonPrimary: string;
    buttonSecondary: string;
    parts: {
      adj: string;
      noun: string;
      special: string;
      number: string;
    };
    strength: {
        weakText: string;
        strongText: string;
        weakBar: string;
        strongBar: string;
    }
  };
  particle: 'star' | 'bubble' | 'firefly' | 'sprinkle';
}