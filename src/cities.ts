import { citiesDb } from './data';
import type { CountriesCode } from './types/common';

export const getCitiesByCountryCode = (
  countryCode: CountriesCode,
  // locale: Locales = 'en',
) => {
  return citiesDb?.[countryCode] ?? [];
};
