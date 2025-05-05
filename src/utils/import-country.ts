import type { CountriesCode, Country } from "../types/common";

export const importCountry = async (
  countryCode: CountriesCode,
): Promise<Country | null> => {
  try {
    const country = await import(`src/data/${countryCode}.json`);
    return country.default as Country;
  } catch (error) {
    console.error(`Country data for ${countryCode} not found`, error);
    return null;
  }
};