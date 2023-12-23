import * as fs from 'fs';
import { dataCDV } from './read-file.js';
import { reformatter } from './reformatter.js';

// Read the data file provided by the user and convert it into a .csv readable format
const data: string = reformatter(dataCDV);

// Write the modified data to a .csv
fs.writeFileSync('./log_data/test.csv', data);
