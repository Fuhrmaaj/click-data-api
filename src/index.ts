import * as fs from 'fs';

// Read the input .cdv provided by the user
let data = fs.readFileSync('./test_data/test.cdv', 'utf8');

/* Remove the garbage which prevents the data from being read as a .csv */
// Remove the header line
const regexHeader = /^(.*)\n/;

// Remove all the null characters
const regexNullChars = /\0/g;

// Remove repeat lines
const regexLines = /(\n|\r)(\n|\r)/g;

data = data.replaceAll(regexNullChars, '')
    .replaceAll(regexLines, '\n')
    .replace(regexHeader, '');

// Write the modified data to a .csv
fs.writeFileSync('./test_data/test.csv', data);
