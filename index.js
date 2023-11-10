import _ from 'lodash'

const reverseStr = (str) => str.split('').reverse().join('');
const getWithout = (arr, ...val) => _.without(arr, ...val);
const getGreater = (num1, num2) => _.gt(num1, num2);

export { reverseStr, getWithout, getGreater };
