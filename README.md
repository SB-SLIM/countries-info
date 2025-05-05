# @sb-codex/countries-info

A helper package to retrieve detailed information about countries based on their country code. You can access data such as country names, cities, capitals, currencies, and more, by specifying the country code and language.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/SB-SLIM/countries-info/blob/main/LICENSE)
![(Runtime) Build and Test](https://github.com/SB-SLIM/countries-info/actions/workflows/ci.yml/badge.svg)
![npm version](https://img.shields.io/npm/v/@sb-codex/countries-info)
![npm download](https://img.shields.io/npm/dm/@sb-codex/countries-info)

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

### 1. `getCountryInfo(code: string, lang?: string)`

```typescript
getCountryInfo(code: string, lang?: string): Promise<{
  name: string,
  capital: string,
  language: string,
  currency: { name: string, code: string },
  dialling: {
    calling_code: string[],
    national_prefix: string | null,
    national_number_lengths: number[],
    national_destination_code_lengths: number[],
    international_prefix: string
  },
  cities: { name: string, code: string, countryCode: string }[]
}>
```

**Parameters:**

| Name   | Type                | Description                                                             |
| :----- | :------------------ | :---------------------------------------------------------------------- |
| `code` | `string`            | ISO 3166-1 alpha-2 country code (e.g., "TN" for Tunisia).               |
| `lang` | `string` (optional) | Language code (e.g., `"ar"` for Arabic). Only affects the `name` field. |

**Example:**

```typescript
const countryInfo = await getCountryInfo('TN');
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
    "cities": [
      {
        "name": "Tunis",
        "code": "TUNIS-TN",
        "countryCode": "TN"
      },
      {
        "name": "Sfax",
        "code": "SFAX-TN",
        "countryCode": "TN"
      },
      ...
    ]
  }
*/
```

---

### 2. `getNameByCountryCode(code: string, language: string)`

```typescript
getNameByCountryCode(code: string, language: string): Promise<string>
```

**Parameters:**

| Name       | Type     | Description                                               |
| :--------- | :------- | :-------------------------------------------------------- |
| `code`     | `string` | ISO 3166-1 alpha-2 country code (e.g., "TN" for Tunisia). |
| `language` | `string` | Language code (e.g., `"en"`, `"fr"`, `"ar"`).             |

**Example:**

```typescript
const countryName = await getNameByCountryCode('TN', 'ar');
console.log(countryName); // Outputs: تونس
```

---

### 3. `getCitiesByCountryCode(code: string)`

```typescript
getCitiesByCountryCode(code: string): Promise<{ name: string, code: string, countryCode: string }[]>
```

**Parameters:**

| Name   | Type     | Description                                               |
| :----- | :------- | :-------------------------------------------------------- |
| `code` | `string` | ISO 3166-1 alpha-2 country code (e.g., "TN" for Tunisia). |

**Example:**

```typescript
const cities = await getCitiesByCountryCode('TN');
console.log(cities);
/* Outputs: [
      {
        "name": "Tunis",
        "code": "TUNIS-TN",
        "countryCode": "TN"
      },
      {
        "name": "Sfax",
        "code": "SFAX-TN",
        "countryCode": "TN"
      },
      ...
    ]*/
```

---

### 4. `getCurrencyByCountryCode(code: string)`

```typescript
getCurrencyByCountryCode(code: string): Promise<{ name: string, code: string }>
```

**Parameters:**

| Name   | Type     | Description                                               |
| :----- | :------- | :-------------------------------------------------------- |
| `code` | `string` | ISO 3166-1 alpha-2 country code (e.g., "TN" for Tunisia). |

**Example:**

```typescript
const currency = await getCurrencyByCountryCode('TN');
console.log(currency); // Outputs: { name: 'Tunisian Dinar', code: 'TND' }
```

---

### 5. `getCapitalByCountryCode(code: string)`

```typescript
getCapitalByCountryCode(code: string): Promise<string>
```

**Parameters:**

| Name   | Type     | Description                                               |
| :----- | :------- | :-------------------------------------------------------- |
| `code` | `string` | ISO 3166-1 alpha-2 country code (e.g., "TN" for Tunisia). |

**Example:**

```typescript
const capital = await getCapitalByCountryCode('TN');
console.log(capital); // Outputs: Tunis
```

---

### 6. `getLanguageByCountryCode(code: string)`

```typescript
getLanguageByCountryCode(code: string): Promise<string>
```

**Parameters:**

| Name   | Type     | Description                                               |
| :----- | :------- | :-------------------------------------------------------- |
| `code` | `string` | ISO 3166-1 alpha-2 country code (e.g., "TN" for Tunisia). |

**Example:**

```typescript
const language = await getLanguageByCountryCode('TN');
console.log(language); // Outputs: Arabic
```

---

### 7. `getDiallingInfoByCountryCode(code: string)`

```typescript
getDiallingInfoByCountryCode(code: string): Promise<{
  calling_code: string[],
  national_prefix: string | null,
  national_number_lengths: number[],
  national_destination_code_lengths: number[],
  international_prefix: string
}>
```

**Parameters:**

| Name   | Type     | Description                                               |
| :----- | :------- | :-------------------------------------------------------- |
| `code` | `string` | ISO 3166-1 alpha-2 country code (e.g., "TN" for Tunisia). |

**Example:**

```typescript
const diallingInfo = await getDiallingInfoByCountryCode('TN');
console.log(diallingInfo);
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
