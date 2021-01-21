class MyArray<T> extends Array<T> {
  myMap<U>(callbackfn: (value: T, index: number) => U): U[] {
    // Create new array to prevent mutation of the old array
    const newArray: U[] = [];

    // Apply callback function to every element in the array
    for (let i = 0; i < this.length; ++i) {
      newArray.push(callbackfn(this[i], i));
    }

    return newArray;
  }
}

console.log(new MyArray(1, 2, 3, 4, 5).myMap((num) => num ** 2));
console.log([1, 2, 3, 4, 5].map((num) => num ** 2));
console.log(
  new MyArray('a', 'b', 'c', 'd').myMap((letter) => `The letter is ${letter}`)
);
console.log(['a', 'b', 'c', 'd'].map((letter) => `The letter is ${letter}`));
