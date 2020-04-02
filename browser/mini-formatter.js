const miniFormater = function() {
    /**==========================
     * define the main constants values used in all files
     *===========================*/

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
            'D', // [d, D] the month day as a single digit
            'DD', // [dd, DD] the month day as a two digits (ex: 01, 02, ...)
        ],
        month: [
            'M', // [m, M] the date month as a single digit
            'MM', // [mm, MM] the date month as a two digits 
            'MMM', // [mmm, MMM] the date month shortcut name
            'MMMM', // [mmmm, MMMM] the date month full name
        ],
        year: [
            'YY', // [yy, YY] the date year as two digits
            'YYYY', // [yyyy, YYYY] the date year as four digits
        ]
    };

    // the tokens regex
    const tokenRegex = {
        dayRegex: /d+/i,
        monthRegex: /m+/i,
        yearRegex: /(y{4}|y{2})/i
    }



    /**==================================
     * set of validation functions to validate user params and options
     *===================================*/

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

    /**
     * validate the format function arguments
     * @param {Array} args the arguments array
     */
    function checkArguments(args) {
        try {

            // the two arguments are required
            if (args.length !== 2)
                throw new Error('Invalid number of arguments');

            // the date argumnet should be of type Date or String
            if (typeof args[0] !== 'object' && typeof args[0] !== 'string')
                throw new Error('date parameter should be of type Date or String');

            // the format argument should be a of type string
            if (typeof args[1] !== 'string')
                throw new Error('formatStr parameter should be of type string');

            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    // validate format tokens
    const isDayToken = token => tokenRegex.dayRegex.test(token);
    const isMonthToken = token => tokenRegex.monthRegex.test(token);
    const isYearToken = token => tokenRegex.yearRegex.test(token);


    /**==============================
     * wraper object around a date object to replace format tokens
     * with its correct date part value.
     *===============================*/

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


    /**===========================
     * the definition of the format function
     *============================*/

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

    return {
        format
    };
}();

module.exports = miniFormater;