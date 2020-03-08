const { getUsedSeparator } = require('../src/validate');

describe('validate => getUsedSeparatoe', () => {
    it('should return the first appeared separator', () => {
        // make date formats
        const testFormat1 = 'dd mm yy';
        const testFormat2 = 'dd-mm yy';
        const testFormat3 = 'dd/mm-yy';

        // get the result
        const result1 = getUsedSeparator(testFormat1);
        const result2 = getUsedSeparator(testFormat2);
        const result3 = getUsedSeparator(testFormat3);

        // assert the result
        expect(result1).toBe(' ');
        expect(result2).toBe('-');
        expect(result3).toBe('/');
    });
});