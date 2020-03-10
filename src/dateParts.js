/**
 * wraper object around a date object to replace format tokens
 * with its correct date part value.
 */
const { months } = require('./constants');
const {
    isDayToken,
    isMonthToken,
    isYearToken
} = require('./validate');

/**
 * create DatePart wraper object
 * @param {Date} date the js date object to wrap
 */
function DateParts(date) {

    // internal date parts getters
    const _day = (dayToken) => {
        const day = date.getDate();
        if (dayToken.length === 2)
            return (day < 10) ? `0${day}` : day;

        return day;
    };

    const _month = (monthToken) => {
        const month = date.getMonth();
        if (monthToken.length === 4)
            return months[month].name;

        if (monthToken.length === 3)
            return months[month].shortCut;

        if (monthToken.length === 2)
            return month + 1 < 10 ? `0${month + 1}` : month + 1;

        return month + 1;
    };

    const _year = (yearToken) => {
        const year = date.getFullYear();
        if (yearToken.length === 2)
            return year.toString().slice(2, 4);

        return year;
    };

    /**
     * replace a string format token with the correct date part value
     * @param {String} formatToken a single format token
     */
    this.replace = function(formatToken) {
        if (isDayToken(formatToken))
            return _day(formatToken).toString();

        if (isMonthToken(formatToken))
            return _month(formatToken).toString();

        if (isYearToken(formatToken))
            return _year(formatToken).toString();
    }
}

module.exports = DateParts;