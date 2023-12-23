export const reformatter = (data: string): string => {
  // Remove the header line
  const regexHeader = /^(.*)\n/;

  // Remove all the null characters
  const regexNullChars = /\0/g;

  // Remove repeat lines
  const regexLines = /(\n|\r)(\n|\r)/g;

  return data
    .replaceAll(regexNullChars, '')
    .replaceAll(regexLines, '\n')
    .replace(regexHeader, '');
};
