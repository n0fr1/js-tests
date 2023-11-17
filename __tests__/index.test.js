import _ from 'lodash'
import { reverseStr, getGreater, getDaysInMonth, fill } from '../index.js';

//№1 test for reverse
test('reverseStr', () => {
    expect(reverseStr('hello')).toEqual('olleh');
    expect(reverseStr('')).toEqual('');
});

//№2 test for getGreater
test('getGreater', () => {
    expect(getGreater(4, 3)).toBe(true);
    expect(getGreater(3, 3)).toBe(false);
    expect(getGreater(1, 3)).toBe(false);
});

//№3 test for object data. cloneDeep
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

//№4 test for getDaysInMonth
test('testing function getDaysInMonth', () => {
  expect(getDaysInMonth(4, 2023)).toBe(30);
  expect(getDaysInMonth(2, 2023)).toBe(28);
  expect(getDaysInMonth(2, 2024)).toBe(29);
  expect(getDaysInMonth(5, 2023)).toBe(31);
  expect(getDaysInMonth(15, 2023)).toBe(null);
});

//№5 test for fill    
const array = [1, 2, 3, 4];
let arrayCopy;

beforeEach(() => {
  arrayCopy = array.map((el) => el); 
});

test('common case', () => {
  fill(arrayCopy, '*', 1, 3);
  expect(arrayCopy).toEqual(expect.arrayContaining([1, '*', '*', 4]));
}); 

test('case default start and end', () => {
  fill(arrayCopy, '*');
  expect(arrayCopy).toEqual(expect.arrayContaining(['*', '*', '*', '*']));
}); 

test('case end >= length', () => {
  fill(arrayCopy, '*', 0, 10);
  expect(arrayCopy).toEqual(expect.arrayContaining(['*', '*', '*', '*']));
}); 

test('case start is minus number', () => {
  expect(fill(arrayCopy, '*', -1, 3)).toBe(null);
}); 

test('case end is minus number', () => {
  expect(fill(arrayCopy, '*', 1, -3)).toBe(null);
}); 
