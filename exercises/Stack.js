// Stack methods
// push(item) O(1): adds item to the top of the stack
// pop() O(1): removes top item from the stack
// peek(): returns the item at the top of the stack (but does not remove it)
// isEmpty(): returns true if the stack is empty
// length: returns the number of items in the stack

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    [this.top, newNode.next] = [newNode, this.top];
    this.length++;
    return this.length;
  }

  pop() {
    const data = this.top?.data;
    if (this.length > 0) {
      this.top = this.top.next;
      this.length--;
    }
    return data;
  }

  peek() {
    return this.top?.data;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// Tests
const stack = new Stack();
console.log(stack.push('a') === 1); // ['a']
console.log(stack.push('b') === 2); // ['a', 'b']
console.log(stack.push('c') === 3); // ['a', 'b', 'c']
console.log(stack.length === 3);
console.log(stack.peek() === 'c');
console.log(stack.pop() === 'c'); // ['a', 'b']
console.log(stack.isEmpty() === false);
console.log(stack.pop() === 'b'); // ['a']
console.log(stack.length === 1);
console.log(stack.peek() === 'a');
console.log(stack.pop() === 'a'); // []
console.log(stack.peek() === undefined);
console.log(stack.pop() === undefined);
console.log(stack.isEmpty() === true);
