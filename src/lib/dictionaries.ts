import 'server-only';
import { defaultLocale } from '@/middleware';
import it from '@/messages/it/common.json';
import de from '@/messages/de/common.json';
import fr from '@/messages/fr/common.json';
import rm from '@/messages/rm/common.json';

// Define a Dictionary type for better type safety
export type Dictionary = typeof it;

// Use the Dictionary type instead of any
const dictionaries: Record<string, () => Promise<Dictionary>> = {
  it: () => Promise.resolve(it),
  de: () => Promise.resolve(de),
  fr: () => Promise.resolve(fr),
  rm: () => Promise.resolve(rm),
};

// Export the getDictionary function with proper typing
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  try {
    return dictionaries[locale as keyof typeof dictionaries]
      ? await dictionaries[locale as keyof typeof dictionaries]()
      : await dictionaries[defaultLocale]();
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);
    return await dictionaries[defaultLocale]();
  }
}; 