import { vocabulary, specialCharacters } from './vocabulary';
import { GeneratedPassword, PasswordMode } from '../types';

export const generatePassword = (mode: PasswordMode): GeneratedPassword => {
  // Random selection helper
  const randomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
  // Get base words
  const adj = randomItem(vocabulary.adjectives);
  const noun = randomItem(vocabulary.nouns);
  
  if (mode === 'simple') {
    return {
      value: `${adj}${noun}`,
      phonetic: `${adj} ${noun}`,
      components: {
        adjective: adj,
        noun: noun
      }
    };
  } else {
    // Strong mode logic: Adj + Noun + Special + Number
    // Number range 10-99 to ensure 2 digits
    const num = Math.floor(Math.random() * 90 + 10).toString();
    const special = randomItem(specialCharacters);
    
    return {
      value: `${adj}${noun}${special}${num}`,
      phonetic: `${adj} ${noun} ${special} ${num}`,
      components: {
        adjective: adj,
        noun: noun,
        special: special,
        number: num
      }
    };
  }
};