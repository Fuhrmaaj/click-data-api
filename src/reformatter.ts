export const reformatter = ({data}: {data: string}): string => {
    // Remove the header line
    const regexHeader = /^(.*)\n/;

    // Remove all the null characters
    const regexNullChars = /\0/g;

    // Remove repeat lines
    const regexLines = /(\n|\r)(\n|\r)/g;

    const formattedData = data.replaceAll(regexNullChars, '')
        .replaceAll(regexLines, '\n')
        .replace(regexHeader, '');

    return formattedData;
}
