import type { countriesDb, citiesDb } from '../data';

export type CountriesCode = keyof typeof countriesDb;
export type CitiesCode = keyof typeof citiesDb;

export type locales = 'en' | 'fr' | 'ar';

export interface Country {
    name: {
      en: string;
      fr?: string;
      ar?: string;
    };
    code: CountriesCode;
    capital?: string | null;
    language?: string;
    dialling?: {
      calling_code?: string[] | null;
      national_prefix?: string | null;
      national_number_lengths?: number[] | null;
      national_destination_code_lengths?: number[] | null;
      international_prefix?: string | number | null;
    };
    flagUrl?: string | null;
    currency?: {
      name?: string | null;
      code?: string | null;
    };
  }