import type { CountriesCode, Locales } from './types/common';
import { formatCountry, importCountry } from './utils';

export const getCountryInfo = async (
  countryCode: CountriesCode,
  locale: Locales = 'en',
) => {
  const country = await importCountry(countryCode);

  if (!country) {
    return null;
  }
  
  return formatCountry(country, locale);
};

export const getNameByCountryCode = async (
  countryCode: CountriesCode,
  locales: Locales = 'en',
) => {
  const country = await importCountry(countryCode);
  return country?.name?.[locales] ?? null;
};

export const getCurrencyByCountryCode = async (countryCode: CountriesCode) => {
  const country = await importCountry(countryCode);
  return country?.currency ?? null;
};

export const getDiallingInfoByCountryCode = async (
  countryCode: CountriesCode,
) => {
  const country = await importCountry(countryCode);
  return country?.dialling ?? null;
};

export const getLanguageByCountryCode = async (countryCode: CountriesCode) => {
  const country = await importCountry(countryCode);
  return country?.language ?? null;
};

export const getCapitalByCountryCode = async (countryCode: CountriesCode) => {
  const country = await importCountry(countryCode);
  return country?.capital ?? null;
};
