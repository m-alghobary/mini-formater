const { getUsedSeparator } = require('./src/validate');

const re1 = getUsedSeparator('dd mm yyy');
const re2 = getUsedSeparator('dd/mm-yyy');
