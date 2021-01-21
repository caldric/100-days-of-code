Array.prototype.myMap = function (callback) {
  // Create new array to prevent mutation of the old array
  const newArray = [];

  // Apply callback function to every element in the array
  for (const element of this) {
    newArray.push(callback(element));
  }

  return newArray;
};

console.log([1, 2, 3, 4, 5].myMap((num) => num ** 2));
console.log([1, 2, 3, 4, 5].map((num) => num ** 2));
console.log(['a', 'b', 'c', 'd'].myMap((letter) => `The letter is ${letter}`));
console.log(['a', 'b', 'c', 'd'].map((letter) => `The letter is ${letter}`));
