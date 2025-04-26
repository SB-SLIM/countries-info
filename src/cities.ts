import { citiesDb } from './data';
import type { CountriesCode, Locales } from './types/common';

export const getCitiesByCountryCode = (
  countryCode: CountriesCode,
  locale: Locales = 'en',
) => {
  if (!citiesDb?.[locale]) {
    console.warn(`Locale '${locale}' is not supported. Falling back to 'en'.`);
    locale = 'en';
  }

  return citiesDb?.[locale]?.[countryCode] ?? [];
};
