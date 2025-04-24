import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import type { CitiesType, Locales } from '../../types/common';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.resolve(__dirname, './db');

/**
 * loadCityData - Loads city data from JSON files in the specified folder.
 */
function loadCityDataSync() {
  const files = fs.readdirSync(folderPath);

  const data: Record<string, unknown> = {};

  for (const file of files) {
    if (file.endsWith('.json')) {
      const lang = path.basename(file, '.json');
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      data[lang] = JSON.parse(fileContent);
    }
  }

  return data as Record<Locales, CitiesType>;
}

const citiesDb = loadCityDataSync();

export default citiesDb;
