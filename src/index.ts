import * as fs from 'fs';
import { reformatter } from './reformatter.js';

// Read the input .cdv provided by the user
export let data: string = fs.readFileSync('./test_data/test.cdv', 'utf8');

// Convert the data into a .csv readable format
data = reformatter({ data });

// Write the modified data to a .csv
fs.writeFileSync('./test_data/test.csv', data);
