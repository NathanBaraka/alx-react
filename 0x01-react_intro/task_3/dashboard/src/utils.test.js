// src/utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils Functions', () => {
    test('getFullYear returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    test('getFooterCopy returns correct strings', () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });

    test('getLatestNotification returns the correct string', () => {
        const expectedNotification = "<strong>Urgent requirement</strong> - complete by EOD";
        expect(getLatestNotification()).toBe(expectedNotification);
    });
});
