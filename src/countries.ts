import { countriesDb } from './data';
import type { CountriesCode, Country, Locales } from './types/common';

export const getCountryInfo = (countryCode: CountriesCode) => {
  const country = countriesDb?.[countryCode];
  if (!country) {
    return null;
  }

  return country as Country;
};

export const getNameByCountryCode = (
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

export const getCurrencyByCountryCode = (countryCode: CountriesCode) => {
  const country = countriesDb?.[countryCode];
  if (!country) {
    return null;
  }

  const currency = country.currency;
  if (!currency) {
    return null;
  }

  return currency;
};
export const getDiallingInfoByCountryCode = (countryCode: CountriesCode) => {
  const country = countriesDb?.[countryCode];
  if (!country) {
    return null;
  }

  const dialling = country.dialling;
  if (!dialling) {
    return null;
  }

  return dialling;
};
