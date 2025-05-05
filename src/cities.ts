import type { CountriesCode, Locales } from './types/common';
import { formatCities, importCountry } from './utils';

export const getCitiesByCountryCode = async (
  countryCode: CountriesCode,
  locale: Locales = 'en',
) => {
  const country = await importCountry(countryCode);
  
  if (!country) {
    return [];
  }

  const formattedCities = formatCities(country.cities, locale);

  const citiesArray = Object.values(formattedCities);

  return citiesArray;
};
