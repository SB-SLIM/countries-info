import { describe, expect, test } from 'vitest';
import { getCitiesByCountryCode } from '../src';
import mockCountry from './TN.json';
import { formatCities } from '../src/utils';

describe('CitiesHelper', () => {
  test('should return formatted cities for a valid country code', async () => {
    const cities = await getCitiesByCountryCode('TN');
    const expectedData = formatCities(mockCountry.cities, 'en');
    expect(cities).toEqual(Object.values(expectedData));
  });

  test('should return an empty array for an invalid country code', async () => {
    // @ts-expect-error Argument of type 'XX' is not assignable to parameter of type
    const cities = await getCitiesByCountryCode('XX');
    expect(cities).toEqual([]);
  });

  test('should return an empty array for a missing country code', async () => {
    // @ts-expect-error Argument of type '' is not assignable to parameter of type
    const cities = await getCitiesByCountryCode('');
    expect(cities).toEqual([]);
  });
});
