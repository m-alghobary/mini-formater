const { checkSeparator } = require('../src/validate');

describe('validate => getUsedSeparatoe', () => {
    it('should throw Error if unknown separator used', () => {
        expect(() => { checkSeparator('dd_mm_yy') }).toThrow('Unknown separator');
        expect(() => { checkSeparator('dd-mm yy') }).toThrow('Onlay use one separator');
    });
});