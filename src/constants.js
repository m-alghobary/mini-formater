/**
 * define the main constants values used in all files
 */

const months = [
    { name: 'January', shortCut: 'Jan' },
    { name: 'February', shortCut: 'Feb' },
    { name: 'March', shortCut: 'Mar' },
    { name: 'April', shortCut: 'Apr' },
    { name: 'May', shortCut: 'May' },
    { name: 'June', shortCut: 'Jun' },
    { name: 'July', shortCut: 'Jul' },
    { name: 'August', shortCut: 'Aug' },
    { name: 'September', shortCut: 'Sep' },
    { name: 'October', shortCut: 'Oct' },
    { name: 'November', shortCut: 'Nov' },
    { name: 'December', shortCut: 'Dec' },
];

// the supported separators to use between format parts
const separators = [' ', '-', '/'];

// the supported format tokens
const formatTokens = {
    day: [
        'D',    // [d, D] the month day as a single digit
        'DD',   // [dd, DD] the month day as a two digits (ex: 01, 02, ...)
    ],
    month: [
        'M',    // [m, M] the date month as a single digit
        'MM',   // [mm, MM] the date month as a two digits 
        'MMM',  // [mmm, MMM] the date month shortcut name
        'MMMM', // [mmmm, MMMM] the date month full name
    ],
    year: [
        'YY',   // [yy, YY] the date year as two digits
        'YYYY', // [yyyy, YYYY] the date year as four digits
    ]
};

module.exports = {
    months,
    separators,
    formatTokens
};
