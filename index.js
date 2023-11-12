import _ from 'lodash'

const reverseStr = (str) => str.split('').reverse().join('');
const getGreater = (num1, num2) => _.gt(num1, num2);

const isLeapYear = (year) => {
  const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return result;
};
  
const thirtyDayMonths = [4, 6, 9, 11];
  
const getDaysInMonth = (month, year) => {
  if (month < 1 || month > 12) {
    return null;
  }
  
  if (month === 2) {
      if (isLeapYear(year)) {
        return 29;
      }
  
      return 28;
    }
  
    if (thirtyDayMonths.includes(month)) {
      return 30;
    }
  
    return 31;
  };
  
export { reverseStr, getGreater, getDaysInMonth };
