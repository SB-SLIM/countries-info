import { citiesDb } from './data';
import type { CitiesCode } from './types/common';

export class CitiesHelper {
  static getCitiesByCountry(countryCode: CitiesCode, locale: string = 'en') {
    console.log('🚀 ~ CitiesHelper ~ getCitiesByCountry ~ locale:', locale);
    return citiesDb[countryCode];
  }
}
