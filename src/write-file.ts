import * as fs from 'fs';
import * as rl from 'readline-sync';

const userQuery = (): string => {
  return rl.question('Please choose a name for the output file.\n');
};

// Make sure the user has chosen a valid file output name
function filenameCheck(name: string): boolean {
  // Forbidden characters \ / : * ? " < > | and also don't allow .
  const forbiddenChars = /^[^\\/:*?"<>|.]+$/;

  if (!forbiddenChars.test(name)) {
    console.log('File names may not include \\ / : * ? " < > | or .');
    return false;
  }

  // Forbidden filenames
  const forbiddenNames = /^(CON|PRN|AUX|NUL|COM[0-9]|LPT[0-9])$/;

  if (forbiddenNames.test(name)) {
    console.log(`${fileDestination} is a forbidden filename in Windows.`);
    return false;
  }

  // Disallow whitespace
  const whitespace = /\s/;

  if (whitespace.test(name)) {
    console.log('File name may not have spaces. Use - or _ instead.');
    return false;
  }
  return true;
}

// Test that the output name is valid
let nameTest: boolean = false;

let fileDestination = '';

while (nameTest == false) {
  // Ask the user for the name of the output
  fileDestination = userQuery();
  nameTest = filenameCheck(fileDestination);
}

// Append ".csv" to the end of the file name
fileDestination += '.csv';

// Write the modified data to to disk
export const writeCSV = (data: string): void => {
  fs.writeFileSync(`./log_data/${fileDestination}`, data);
  return console.log('File successfully converted!');
};
