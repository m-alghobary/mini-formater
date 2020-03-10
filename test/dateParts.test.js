const DateParts = require('../src/dateParts');

describe('DateParts => replace', () => {
    it('should return the correct date part', () => {
        const dateParts = new DateParts(new Date('1-1-2020'));

        expect(dateParts.replace('dd')).toBe('01');
        expect(dateParts.replace('d')).toBe('1');
        expect(dateParts.replace('m')).toBe('1');
        expect(dateParts.replace('mm')).toBe('01');
        expect(dateParts.replace('mmm')).toBe('Jan');
        expect(dateParts.replace('mmmm')).toBe('January');
        expect(dateParts.replace('yy')).toBe('20');
        expect(dateParts.replace('yyyy')).toBe('2020');
    });
});