import { writeFile } from 'fs/promises';

import data from '../src/data/cities-db/db/en.json' assert { type: 'json' };

const result = {}; // Declare result first

for (const countryCode in data) {
  const cities = data[countryCode];
  result[countryCode] = {}; // Initialize the country object

  cities.forEach((city) => {
    const normalizedCity = city
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const code = `${normalizedCity.toUpperCase().replace(/\s+/g, '-')}-${countryCode}`;

    result[countryCode][code] = {
      name: {
        en: city,
        ar: '',
        fr: '',
      },
      code,
      countryCode,
    };
  });
}

// Save to file using promises
try {
  await writeFile('cities-by-country.json', JSON.stringify(result));
  console.log('cities-by-country.json has been saved! ✅');
} catch (error) {
  console.error('Error writing file:', error);
}
