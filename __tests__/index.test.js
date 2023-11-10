import { reverseStr, getWithout, getGreater } from '../index.js';

test('reverseStr', () => {
    expect(reverseStr('hello')).toEqual('olleh');
    expect(reverseStr('')).toEqual('');
});

test('getWithout', () => {
    expect(getWithout([2, 1, 2, 3], 1, 2, 3)).toEqual([]);
    expect(getWithout([2, 1, 2, 3], 1, 2)).toEqual([3]);
    expect(getWithout([2, 1, 2, 3])).toEqual([2, 1, 2, 3]);
});

test('getGreater', () => {
    expect(getGreater(4, 3)).toBe(true);
    expect(getGreater(3, 3)).toBe(false);
    expect(getGreater(1, 3)).toBe(false);
});