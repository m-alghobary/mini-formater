/**
 * the definition of the format function
 */

const { checkFormat, checkArguments, getSeparator } = require('./validate');
const DateParts = require('./dateParts');


/**
 * format the given date in the form fo the given string format
 * @param {Date|String} date date object or valid date string
 * @param {String} formatStr a valid date format
 */
function format(date, formatStr) {
    // validate the user arguments
    if (!checkArguments(arguments))
        return;

    if (!checkFormat(formatStr))
        return;

    date = typeof date === 'object' ? date : new Date(date);
    const dateParts = new DateParts(date);

    const separator = getSeparator(formatStr);
    const formatTokens = formatStr.split(separator);

    let result = '';
    formatTokens.forEach((token) => {
        result += dateParts.replace(token) + ' ';
    });

    return result.trim().replace(/ /g, separator);
}


module.exports = format;