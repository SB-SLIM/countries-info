import { countriesDb } from './data';
import type { CountriesCode, Country, Locales } from './types/common';

export const getCountryInfo = (countryCode: CountriesCode) => {
  const country = countriesDb?.[countryCode];
  if (!country) {
    return null;
  }

  return country as Country;
};

export const getCountryNameByCode = (
  countryCode: CountriesCode,
  locales: Locales = 'en',
) => {
  const country = countriesDb?.[countryCode];
  if (!country) {
    return null;
  }

  const countryName = country.name?.[locales];
  if (!countryName) {
    return null;
  }
  return countryName;
};
