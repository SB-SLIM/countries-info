import { citiesDb } from './data';
import type { CitiesCode } from './types/common';

export const getCitiesByCountry = (
  countryCode: CitiesCode,
  // locale: Locales = 'en',
) => {
  return citiesDb?.[countryCode] ?? [];
};
