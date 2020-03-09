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
    // remove spaces from the begining and the end
    dateFormat = dateFormat.trim();

    try {

        checkSeparator(dateFormat);
        const _separator = getSeparator(dateFormat);

        // correct format have three format tokens
        if (dateFormat.split(_separator).length !== 3)
            throw new Error('Incorrect format');

        // validate each format token
        const _userTokens = dateFormat.split(_separator);
        for (const userToken of _userTokens) {
            let tokenIndex = -1;
            for (const tokenGroup in formatTokens) {
                tokenIndex = formatTokens[tokenGroup].indexOf(userToken.trim().toUpperCase());
                if (tokenIndex >= 0)
                    break;
            }

            if (tokenIndex < 0)
                throw new Error(`Invalid format token ${userToken}`);
        }

        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}


/**
 * check if the used separator is supported or not
 * @param {String} dateFormat the user date format
 */
function checkSeparator(dateFormat) {

    // get the index of the first appeared separator in the dateFormat string
    let _separatorIndex = dateFormat.length;
    for (const separator of separators) {
        const i = dateFormat.indexOf(separator);
        if (i !== -1 && i < _separatorIndex) {
            _separatorIndex = i;
        }
    }

    // unknown separator
    const _usedSeparator = dateFormat.charAt(_separatorIndex);
    if (_usedSeparator.length === 0) {
        throw new Error('Unknown separator');
    }

    // onlay one separator should be used
    if (dateFormat.split(_usedSeparator).length !== 3) {
        throw new Error('Onlay use one separator');
    }
}


/**
 * get the used separator
 * @param {String} dateFormat the user date format
 * 
 * @returns {String} format separator
 */
function getSeparator(dateFormat) {
    for (const separator of separators) {
        if (dateFormat.includes(separator))
            return separator;
    }
}


module.exports = {
    checkSeparator,
    checkFormat
}