import { countriesDb } from './data' assert { type: 'json' };
import type { CountriesCode } from './types/common';

export class CountriesHelper {
  static getCountryByCode(countryCode: CountriesCode) {
    return countriesDb[countryCode] || null;
  }
}
