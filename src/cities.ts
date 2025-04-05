import { citiesDb } from './data';
import type { CountriesCode } from './types/common';

export const getCitiesByCountry = (
  countryCode: CountriesCode,
  // locale: Locales = 'en',
) => {
  return citiesDb?.[countryCode] ?? [];
};
