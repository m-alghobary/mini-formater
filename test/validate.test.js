const { checkSeparator, checkFormat } = require('../src/validate');

describe('validate => getUsedSeparatoe', () => {
    it('should throw Error if unknown separator used', () => {
        expect(() => { checkSeparator('dd_mm_yy') }).toThrow('Unknown separator');
        expect(() => { checkSeparator('dd-mm yy') }).toThrow('Onlay use one separator');
    });
});


describe('validate => checkFormat', () => {
    it('should return true if format is valid, false otherways', () => {
        expect(checkFormat('dd-mm-yyyy')).toBe(true);
        expect(checkFormat('d mmm yyyy')).toBe(true);
        expect(checkFormat('dd/mmmm/yy')).toBe(true);

        expect(checkFormat('dd ss yy')).toBe(false);
        expect(checkFormat('aa mmm yuy')).toBe(false);
    });
});