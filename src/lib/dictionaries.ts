import 'server-only';
import { defaultLocale } from '@/middleware';
import it from '@/messages/it/common.json';
import de from '@/messages/de/common.json';
import fr from '@/messages/fr/common.json';
import rm from '@/messages/rm/common.json';

// Usa any per i tipi per evitare problemi di compatibilità
const dictionaries: Record<string, () => Promise<any>> = {
  it: () => Promise.resolve(it),
  de: () => Promise.resolve(de),
  fr: () => Promise.resolve(fr),
  rm: () => Promise.resolve(rm),
};

// Esporta la funzione getDictionary che restituisce le traduzioni
export const getDictionary = async (locale: string): Promise<any> => {
  try {
    return dictionaries[locale as keyof typeof dictionaries]
      ? await dictionaries[locale as keyof typeof dictionaries]()
      : await dictionaries[defaultLocale]();
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);
    return await dictionaries[defaultLocale]();
  }
}; 