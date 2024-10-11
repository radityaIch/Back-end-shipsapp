import * as jsonData from './prisma/shipsapp.json';

import * as fs from 'fs';

const convertStringToArray = (obj: any) => {
  for (const key in obj) {
    if (
      typeof obj[key] === 'string' &&
      obj[key].startsWith('[') &&
      obj[key].endsWith(']')
    ) {
      try {
        obj[key] = JSON.parse(obj[key].replace(/'/g, '"'));
      } catch (error) {
        console.error(`Error parsing ${key}: ${error}`);
      }
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      convertStringToArray(obj[key]);
    }
  }
};

const convertedData = JSON.parse(JSON.stringify(jsonData));
convertedData.forEach((item: any) => convertStringToArray(item));

fs.writeFileSync(
  'converted_shipsapp.json',
  JSON.stringify(convertedData, null, 2),
);

console.log(
  'Conversion complete. Check converted_shipsapp.json for the result.',
);
