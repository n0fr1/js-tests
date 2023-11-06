import assert from 'power-assert';
import getFunction from './functions.js';

assert.deepStrictEqual(getFunction([], 2) , []);
assert.deepStrictEqual(getFunction([1, 2, 3]), [1]);
assert.deepStrictEqual(getFunction([1, 2, 3], 2), [1, 2]);
assert.deepStrictEqual(getFunction([4, 3], 9), [4, 3]);
assert.deepStrictEqual(getFunction([4, 3], -1), []);
