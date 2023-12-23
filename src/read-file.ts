import * as fs from 'fs';
import * as rl from 'readline-sync';

console.log(
  'You will receive a series of prompts to convert your data. You may abort at any time by pressing Ctrl+C.'
);

// Get the location of the file from the user
let fileLocation: string = rl.question(
  'Please enter the file name of the file you wish to convert.\n'
);

// Append ".cdv" to the end of the user input if the user forgot to
if (!fileLocation.includes('.cdv', fileLocation.length - 4)) {
  fileLocation += '.cdv';
}

// Read the input .cdv provided by the user
export const dataCDV: string = fs.readFileSync(
  `./log_data/${fileLocation}`,
  'utf8'
);
