import _ from 'lodash'
import { reverseStr, getWithout, getGreater} from '../index.js';

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

let data;
let dataCopy;

beforeEach(() => {
  data = {'a': [{'b': {'c': 3}}]};
  dataCopy = _.cloneDeep(data);
});

test('plain set', () => {
  _.set(data, 'a', 'value');
  dataCopy.a = 'value';
  expect(data).toEqual(dataCopy);
});

test('nested set', () => {
  _.set(data, 'a[0].b.c', true);
  dataCopy.a[0].b.c = true;
  expect(data).toEqual(dataCopy);
});

test('set new property', () => {
  _.set(data, 'a[0].b.d', false);
  dataCopy.a[0].b.d = false;
  expect(data).toEqual(dataCopy);
});



