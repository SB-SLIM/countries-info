import { describe, expect, test } from 'vitest';
import { CitiesHelper } from '../src';

describe('CitiesHelper', () => {
  test('should return cities for a valid country code', () => {
    const cities = CitiesHelper.getCitiesByCountry('KW');
    expect(cities).toEqual([
      'Kuwait City',
      "Al Jahra'",
      'Abu Hulayfah',
      'Al Ahmadi',
      'Ar Riqqah',
    ]);
  });

  test('should return an empty array for an invalid country code', () => {
    // @ts-expect-error Argument of type 'XX' is not assignable to parameter of type
    const cities = CitiesHelper.getCitiesByCountry('XX');

    expect(cities).toEqual(undefined);
  });

  test('should return an empty array for a missing country code', () => {
    // @ts-expect-error Argument of type '' is not assignable to parameter of type
    const cities = CitiesHelper.getCitiesByCountry('');
    expect(cities).toEqual(undefined);
  });
});
