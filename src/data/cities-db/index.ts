import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import type { CitiesType, Locales } from '../../types/common';

const require = createRequire(import.meta.url);

const folderPath = path.resolve(__dirname, './');

/**
 * loadCityData - Loads city data from JSON files in the specified folder.
*/
function loadCityDataSync() {
  console.log('🚀 ~ folderPath:', folderPath);
  const files = fs.readdirSync(folderPath);
  console.log("🚀 ~ loadCityDataSync ~ files:", files)
  const data: Record<string, unknown> = {};

  for (const file of files) {
    if (file.endsWith('.ts')) {
      const lang = path.basename(file, '.ts');
      const filePath = path.join(folderPath, file);
      const module = require(filePath);
      data[lang] = module.citiesDb; 
    }
  }

  return data as Record<Locales, CitiesType>;
}

const citiesDb = loadCityDataSync();
console.log('🚀 ~ citiesDb:', citiesDb);

export default citiesDb;
