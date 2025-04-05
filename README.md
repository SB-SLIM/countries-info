
# @sb-codex/countries-info

A helper package to retrieve detailed information about countries based on their country code. You can access data such as country names, cities, capitals, currencies, and more, by specifying the country code and language.

## Features

- Retrieve country names in different languages.
- Fetch cities associated with a given country code.
- Access currency information for a country.
- Get capital and language information for a country.
- And more...

## Notes

ℹ️ **The package size may seem large** because all country-related data (such as names, currencies, languages, dialling info, capitals, and cities) is directly stored in the code for fast and offline access.

We're currently working on improving this, and also working on translating city names.

> ⚠️ The cities are not translated yet, we are working on it.

## Installation

To install the package, use npm:

```bash
npm install @sb-codex/countries-info
```

## Functions

- `getCountryInfo`
- `getNameByCountryCode`
- `getCurrencyByCountryCode`
- `getDiallingInfoByCountryCode`
- `getLanguageByCountryCode`
- `getCapitalByCountryCode`
- `getCitiesByCountryCode`

### 1. `getNameByCountryCode(code: string, language: string): string`

This function returns the country name in the specified language.

**Parameters:**

- `code` (string): The country code (e.g., "TN" for Tunisia).
- `language` (string): The language code (e.g., "en" for English, "fr" for French, etc.).

**Example:**

```typescript
import { getNameByCountryCode } from '@sb-codex/countries-info';

const countryName = getNameByCountryCode('TN', 'en');
console.log(countryName); // Outputs: Tunisia
```

### 2. `getCitiesByCountryCode(code: string): string[]`

This function returns an array of cities for a given country code.

**Parameters:**

- `code` (string): The country code (e.g., "TN" for Tunisia).

**Example:**

```typescript
import { getCitiesByCountryCode } from '@sb-codex/countries-info';

const cities = getCitiesByCountryCode('TN');
console.log(cities); // Outputs: ['Tunis', 'Sfax', 'Sousse']
```

### 3. `getCurrencyByCountryCode(code: string): { name: string, code: string }`

This function returns the currency information for a given country code.

**Parameters:**

- `code` (string): The country code (e.g., "TN" for Tunisia).

**Example:**

```typescript
import { getCurrencyByCountryCode } from '@sb-codex/countries-info';

const currency = getCurrencyByCountryCode('TN');
console.log(currency); // Outputs: { name: 'Tunisian Dinar', code: 'TND' }
```

### 4. `getCapitalByCountryCode(code: string): string`

This function returns the capital of the country by its country code.

**Parameters:**

- `code` (string): The country code (e.g., "TN" for Tunisia).

**Example:**

```typescript
import { getCapitalByCountryCode } from '@sb-codex/countries-info';

const capital = getCapitalByCountryCode('TN');
console.log(capital); // Outputs: Tunis
```

### 5. `getLanguageByCountryCode(code: string): string`

This function returns the official language of the country by its country code.

**Parameters:**

- `code` (string): The country code (e.g., "TN" for Tunisia).

**Example:**

```typescript
import { getLanguageByCountryCode } from '@sb-codex/countries-info';

const language = getLanguageByCountryCode('TN');
console.log(language); // Outputs: Arabic
```

### 6. `getDiallingInfoByCountryCode(code: string): { calling_code: string[], national_prefix: string | null, national_number_lengths: number[], national_destination_code_lengths: number[], international_prefix: string }`

This function returns dialing information for a given country code, including calling codes, number lengths, and international dialing prefix.

**Parameters:**

- `code` (string): The country code (e.g., "TN" for Tunisia).

**Example:**

```typescript
import { getDiallingInfoByCountryCode } from '@sb-codex/countries-info';

const diallingInfo = getDiallingInfoByCountryCode('TN');
console.log(diallingInfo);
/*
  Outputs:
  {
    calling_code: ['216'],
    national_prefix: null,
    national_number_lengths: [8],
    national_destination_code_lengths: [2],
    international_prefix: '00'
  }
*/
```

### 7. `getCountryInfo(code: string): { name: string, capital: string, language: string, currency: { name: string, code: string }, dialling: { calling_code: string[], national_prefix: string | null, national_number_lengths: number[], national_destination_code_lengths: number[], international_prefix: string } }`

This function returns a comprehensive set of information about a country, including name, capital, language, currency, and dialing information.

**Parameters:**

- `code` (string): The country code (e.g., "TN" for Tunisia).

**Example:**

```typescript
import { getCountryInfo } from '@sb-codex/countries-info';

const countryInfo = getCountryInfo('TN');
console.log(countryInfo);
/*
  Outputs:
  {
    name: 'Tunisia',
    capital: 'Tunis',
    language: 'Arabic',
    currency: { name: 'Tunisian Dinar', code: 'TND' },
    dialling: {
      calling_code: ['216'],
      national_prefix: null,
      national_number_lengths: [8],
      national_destination_code_lengths: [2],
      international_prefix: '00'
    }
  }
*/
```

## Example Data

Here’s an example of how the data is structured:

```typescript
const countriesDb = {
  TN: {
    name: {
      en: 'Tunisia',
      fr: 'Tunisie',
      ar: 'تونس',
    },
    code: 'TN',
    capital: 'Tunis',
    language: 'Arabic',
    dialling: {
      calling_code: ['216'],
      national_prefix: null,
      national_number_lengths: [8],
      national_destination_code_lengths: [2],
      international_prefix: '00',
    },
    currency: {
      name: 'Tunisian Dinar',
      code: 'TND',
    },
  },
  // more countries...
};
```

### Data Access

- **Country Name** is available in multiple languages (e.g., `en`, `fr`, `ar`).
- **Cities** and **Capitals** are stored for each country code.
- **Currency** information is included for each country.
- **Dialling Information** includes calling codes, number lengths, and international dialing prefixes.

## Contributing

We welcome contributions to enhance the functionality of this package. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and write tests where applicable.
4. Submit a pull request with a detailed description of your changes.

Please make sure that all tests pass before submitting the pull request.

### Code Style

- We follow [Prettier](https://prettier.io/) for consistent code formatting.
- Please ensure your code adheres to the style guide before submitting.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using `@sb-codex/countries-info`! We hope it helps you quickly access country data.
