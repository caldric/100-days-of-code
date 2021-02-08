/**
 * Counts the number of occurrences of the boolean true on an array.
 */
const countTrue = (arr: any[]): number =>
  arr.filter((elem) => elem === true).length;

console.log(countTrue([true, false, true, true, false])); // returns 3
console.log(countTrue([false, false])); // returns 0
console.log(countTrue([true])); // returns 1
console.log(countTrue([])); // returns 0
console.log(countTrue('is this the real life?'.split(' '))); // returns 0
console.log(countTrue('is this just fantasy?'.split(' '))); // returns 0
