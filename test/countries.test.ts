import { describe, expect, it, test} from 'vitest';
import { getCountryInfo, getNameByCountryCode } from '../src';
import { getCurrencyByCountryCode } from '../src/countries';

describe('getCountryInfo', () => {
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
    // @ts-expect-error Argument of type 'XX' is not assignable to parameter of type CountriesCode
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

describe('getNameByCountryCode', () => {
  it('should return country name in English by default', () => {
    const result = getNameByCountryCode('JP');
    expect(result).toBe('Japan');
  });

  it('should return country name in French', () => {
    const result = getNameByCountryCode('JP', 'fr');
    expect(result).toBe('Japon');
  });

  it('should return country name in Arabic', () => {
    const result = getNameByCountryCode('JP', 'ar');
    expect(result).toBe('اليابان');
  });

  it('should return null for unknown locale', () => {
    // @ts-expect-error Argument of type 'en' is not assignable to parameter of type 'en' | 'fr' | 'ar'
    const result = getNameByCountryCode('JP', 'de');
    expect(result).toBeNull();
  });

  it('should return null for unknown country code', () => {
    // @ts-expect-error Argument of type 'XX' is not assignable to parameter of type CountriesCode
    const result = getNameByCountryCode('XX');
    expect(result).toBeNull();
  });
});

describe('getCurrencyByCountryCode', () => {
  it('should return the correct currency for Japan (JP)', () => {
    const result = getCurrencyByCountryCode('JP');
    expect(result).toEqual({
      name: 'Japanese Yen',
      code: 'JPY',
    });
  });

  it('should return the correct currency for the United States (US)', () => {
    const result = getCurrencyByCountryCode('US');
    expect(result).toEqual({
      name: 'United States Dollar',
      code: 'USD',
    });
  });

  it('should return null for an unknown country code', () => {
    // @ts-expect-error Argument of type 'XX' is not assignable to parameter of type CountriesCode
    const result = getCurrencyByCountryCode('XX');
    expect(result).toBeNull();
  });
});
