import { countriesDb } from './data';
import type { CountriesCode, Country } from './types/common';

export const getCountryInfo = (countryCode: CountriesCode) => {
  const country = countriesDb?.[countryCode];
  if (!country) {
    return null;
  }

  return country as Country;
};
