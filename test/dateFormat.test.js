const format = require('../src/dateFormat');

describe('formatDate => format', () => {
    it('should return the correct formatted date', () => {
        const date = new Date('12-6-2019');

        expect(format(date, 'dd mm yy')).toBe('06 12 19');
        expect(format(date, 'd mmm yy')).toBe('6 Dec 19');
        expect(format(date, 'mm dd yyyy')).toBe('12 06 2019');
        expect(format(date, 'dd mmmm yy')).toBe('06 December 19');
        expect(format(date, 'd m yy')).toBe('6 12 19');
        expect(format(date, 'dd mmm yyyy')).toBe('06 Dec 2019');
        expect(format(date, 'dd mmmm yyyy')).toBe('06 December 2019');

        expect(format(date, 'dd-mm-yy')).toBe('06-12-19');
        expect(format(date, 'd-mmm-yy')).toBe('6-Dec-19');
        expect(format(date, 'dd-mm-yyyy')).toBe('06-12-2019');
        expect(format(date, 'dd-mmmm-yy')).toBe('06-December-19');
        expect(format(date, 'd-m-yy')).toBe('6-12-19');
        expect(format(date, 'dd-mmm-yyyy')).toBe('06-Dec-2019');
        expect(format(date, 'dd-mmmm-yyyy')).toBe('06-December-2019');

        expect(format(date, 'dd/mm/yy')).toBe('06/12/19');
        expect(format(date, 'd/mmm/yy')).toBe('6/Dec/19');
        expect(format(date, 'dd/mm/yyyy')).toBe('06/12/2019');
        expect(format(date, 'dd/mmmm/yy')).toBe('06/December/19');
        expect(format(date, 'd/m/yy')).toBe('6/12/19');
        expect(format(date, 'dd/mmm/yyyy')).toBe('06/Dec/2019');
        expect(format(date, 'dd/mmmm/yyyy')).toBe('06/December/2019');
    });
});