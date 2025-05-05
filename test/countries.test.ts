import { describe, expect, it, test } from 'vitest';
import { getCountryInfo, getNameByCountryCode } from '../src';
import mockCountry from './TN.json';
import {
  getCapitalByCountryCode,
  getCurrencyByCountryCode,
  getDiallingInfoByCountryCode,
  getLanguageByCountryCode,
} from '../src/countries';
import { formatCountry } from '../src/utils';
import type { Country } from '../src/types/common';

describe('getCountryInfo', () => {
  test('should return country details for a valid country code', async () => {
    const country = await getCountryInfo('TN');
    const expectedData = formatCountry(mockCountry as Country, 'en');
    expect(country).toEqual(expectedData);
  });

  test('should return null for an invalid country code', async () => {
    // @ts-expect-error: Testing fallback behavior with an invalid country code 'XX'
    const country = await getCountryInfo('XX');
    expect(country).toBeNull();
  });

  test('should return null for a missing country code', async () => {
    // @ts-expect-error: Testing fallback behavior with an invalid country code 'XX'
    const country = await getCountryInfo('');
    expect(country).toBeNull();
  });

  test('should return country with english names', async () => {
    const country = await getCountryInfo('TN');
    expect(country?.name).toBe(mockCountry.name.en);
  });
  test('should return country with arabic names', async () => {
    const country = await getCountryInfo('TN', 'ar');
    expect(country?.name).toBe(mockCountry.name.ar);
  });

  test('should return the correct capital city', async () => {
    const country = await getCountryInfo('TN');
    expect(country?.capital).toBe(mockCountry.capital);
  });

  test('should return the correct currency details', async () => {
    const country = await getCountryInfo('TN');
    expect(country?.currency?.name).toBe(mockCountry.currency.name);
    expect(country?.currency?.code).toBe(mockCountry.currency.code);
  });

  test('should return correct dialing codes', async () => {
    const country = await getCountryInfo('TN');
    expect(country?.dialling?.calling_code).toEqual(['216']);
  });
});

describe('getNameByCountryCode', () => {
  it('should return country name in English by default', async () => {
    const result = await getNameByCountryCode('TN');
    expect(result).toBe('Tunisia');
  });

  it('should return country name in French', async () => {
    const result = await getNameByCountryCode('TN', 'fr');
    expect(result).toBe('Tunisie');
  });

  it('should return country name in Arabic', async () => {
    const result = await getNameByCountryCode('TN', 'ar');
    expect(result).toBe('تونس');
  });

  it('should return null for unknown locale', async () => {
    // @ts-expect-error: Testing fallback behavior with an invalid country code 'XX'
    const result = await getNameByCountryCode('TN', 'de');
    expect(result).toBeNull();
  });

  it('should return null for unknown country code', async () => {
    // @ts-expect-error: Testing fallback behavior with an invalid country code 'XX'
    const result = await getNameByCountryCode('XX');
    expect(result).toBeNull();
  });
});

describe('getCurrencyByCountryCode', () => {
  it('should return the correct currency for Tunisia (TN)', async () => {
    const result = await getCurrencyByCountryCode('TN');
    expect(result).toEqual({
      name: 'Tunisian Dinar',
      code: 'TND',
    });
  });

  it('should return null for an unknown country code', async () => {
    // @ts-expect-error: Testing fallback behavior with an invalid country code 'XX'
    const result = await getCurrencyByCountryCode('XX');
    expect(result).toBeNull();
  });
});

describe('getDiallingInfoByCountryCode', () => {
  it('should return the correct dialling info for Tunisia (TN)', async () => {
    const result = await getDiallingInfoByCountryCode('TN');
    expect(result).toEqual(mockCountry.dialling);
  });

  it('should return null for an unknown country code', async () => {
    // @ts-expect-error: Testing fallback behavior with an invalid country code 'XX'
    const result = await getDiallingInfoByCountryCode('XX');
    expect(result).toBeNull();
  });
});

describe('getLanguageByCountryCode', () => {
  it('should return the correct language for Tunisia (TN)', async () => {
    const result = await getLanguageByCountryCode('TN');
    expect(result).toBe('Arabic');
  });

  it('should return null for an unknown country code', async () => {
    // @ts-expect-error: Testing fallback behavior with an invalid country code 'XX'
    const result = await getLanguageByCountryCode('XX');
    expect(result).toBeNull();
  });
});

describe('getCapitalByCountryCode', () => {
  it('should return the correct capital for Tunisia (TN)', async () => {
    const result = await getCapitalByCountryCode('TN');
    expect(result).toEqual('Tunis');
  });

  it('should return null for an unknown country code', async () => {
    // @ts-expect-error: Testing fallback behavior with an invalid country code 'XX'
    const result = await getCapitalByCountryCode('XX');
    expect(result).toBeNull();
  });
});
