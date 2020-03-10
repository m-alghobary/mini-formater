/**
 * the definition of the format function
 */

const { checkFormat, checkArguments } = require('./validate');


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
}


module.exports = format;