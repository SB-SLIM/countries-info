import { writeFile } from 'fs/promises';

import cities from './cities-db.json' assert { type: 'json' };
import countries from './countries-db.json' assert { type: 'json' };

for (const countryCode in countries) {
  let result = {};

  result = { ...countries[countryCode], cities: cities[countryCode] };

  // Save to file using promises
  try {
    await writeFile(`${countryCode}.json`, JSON.stringify(result));
    console.log(`${countryCode}.json has been saved! ✅`);
  } catch (error) {
    console.error('Error writing file:', error);
  }
}
