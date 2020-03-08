/**
 * set of validation functions to validate user params and options
 */
const { separators, formatTokens } = require('./constants');

/**
 * check if the user date format is valid or not
 * @param {String} dateFormat the user date format
 * 
 * @returns {Boolean} true if the date format is valid, false otherways
 */
function checkFormat(dateFormat) {

}


/**
 * check if the used separator is supported or not
 * @param {String} dateFormat the user date format
 * 
 * @returns {Boolean} true if the separator is supported, false otherways
 */
function checkSeparator(dateFormat) {
    // onlay one separator should be used
}


/**
 * get the first appeared separator as the used separator
 * @param {String} dateFormat the user date format
 * 
 * @returns {String} the used separator
 */
function getUsedSeparator(dateFormat) {

    // get the index of the first appeared separator in the dateFormat string
    let _separatorIndex = dateFormat.length;
    for (const separator of separators) {
        const i = dateFormat.indexOf(separator);
        if (i !== -1 && i < _separatorIndex) {
            _separatorIndex = i;
        }
    }

    const _usedSeparator = dateFormat.charAt(_separatorIndex);
    return _usedSeparator.length === 0 ? undefined : _usedSeparator;
}

module.exports = {
    getUsedSeparator
}