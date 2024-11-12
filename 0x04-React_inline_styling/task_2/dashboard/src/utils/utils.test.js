import {getFullYear, getFooterCopy, getLatestNotification} from "./utils"

test('current year:', () => {
        expect(getFullYear()).toBe(2024);
});

test('The correct footer copy:', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('The correct notification:', () => {
    expect(getLatestNotification()).toBe(
            '<strong>Urgent requirement</strong> - complete by EOD'
    );
})