import _ from 'lodash'

const getFunction = (arr, defaultValue = 1) => _.take(arr, defaultValue);

export default getFunction;

