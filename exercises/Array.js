class MyArray {
  constructor() {
    this.length = 0;
    this.elements = {};
    for (const key in arguments) {
      this.elements[key] = arguments[key];
      this.length++;
    }
  }

  static isMyArray(value) {
    return value instanceof MyArray;
  }

  at(index) {
    return this.elements[index];
  }

  push(element) {
    this.elements[this.length] = element;
    this.length++;
    return this.length;
  }

  pop() {
    const toBeRemoved = this.elements[this.length - 1];
    delete this.elements[this.length - 1];
    this.length--;
    return toBeRemoved;
  }

  shift() {
    const toBeRemoved = this.elements[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.elements[i] = this.elements[i + 1];
    }
    delete this.elements[this.length - 1];
    this.length--;
    return toBeRemoved;
  }

  unshift() {
    const shiftAmount = Object.keys(arguments).length;
    for (let i = this.length - 1; i >= 0; i--) {
      this.elements[i + shiftAmount] = this.elements[i];
    }
    for (const key in arguments) {
      this.elements[key] = arguments[key];
      this.length++;
    }
    return this.length;
  }
}

const myArray = new MyArray('a', 'b', 'c');
console.log(myArray);
console.log(myArray.length);
console.log(myArray.push('d'));
console.log(myArray);
console.log(myArray.at(0));
console.log(myArray.at(3));
console.log(myArray.at(4));
console.log(MyArray.isMyArray(myArray));
console.log(MyArray.isMyArray('hello'));
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.shift());
console.log(myArray);
console.log(myArray.unshift('x', 'y', 'z'));
console.log(myArray);
