import type {
  Cities,
  Country,
  FormattedCountry,
  Locales,
} from '../types/common';

export const formatCountry = (
  country: Country,
  locale: Locales = 'en',
): FormattedCountry => {
  return {
    ...country,
    name: country.name?.[locale] ?? country.name?.['en'] ?? '',
    cities: formatCities(country.cities, locale),
  };
};

export const formatCities = (cities: Cities, locale: Locales) => {
  return Object.fromEntries(
    Object.entries(cities ?? {}).map(([code, city]) => [
      code,
      {
        ...city,
        name: city.name?.[locale] ?? city.name?.['en'] ?? '',
      },
    ]),
  );
};
