import { describe, expect, test } from 'vitest';
import { getCountryInfo } from '../src';

describe('CountriesHelper', () => {
  test('should return country details for a valid country code', () => {
    const country = getCountryInfo('JP');
    expect(country).toEqual({
      name: {
        en: 'Japan',
        fr: 'Japon',
        ar: 'اليابان',
      },
      code: 'JP',
      capital: 'Tokyo',
      language: 'Japanese',
      dialling: {
        calling_code: ['81'],
        national_prefix: '0',
        national_number_lengths: [9, 10],
        national_destination_code_lengths: [2],
        international_prefix: '010',
      },
      currency: {
        name: 'Japanese Yen',
        code: 'JPY',
      },
    });
  });

  test('should return null for an invalid country code', () => {
    // @ts-expect-error Argument of type 'XX' is not assignable to parameter of type
    const country = getCountryInfo('XX'); // Non-existent country
    expect(country).toBeNull();
  });

  test('should return null for a missing country code', () => {
    // @ts-expect-error Argument of type '' is not assignable to parameter of type
    const country = getCountryInfo('');
    expect(country).toBeNull();
  });

  test('should return country with multi-language names', () => {
    const country = getCountryInfo('JP');
    expect(country?.name.en).toBe('Japan');
    expect(country?.name?.fr).toBe('Japon');
    expect(country?.name?.ar).toBe('اليابان');
  });

  test('should return the correct capital city', () => {
    const country = getCountryInfo('JP');
    expect(country?.capital).toBe('Tokyo');
  });

  test('should return the correct currency details', () => {
    const country = getCountryInfo('JP');
    expect(country?.currency?.name).toBe('Japanese Yen');
    expect(country?.currency?.code).toBe('JPY');
  });

  test('should return correct dialing codes', () => {
    const country = getCountryInfo('JP');
    expect(country?.dialling?.calling_code).toEqual(['81']);
  });
});
