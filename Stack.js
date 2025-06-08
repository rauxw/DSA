class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
  }

  pop() {
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp.value;
  }

  min() {
    let current = this.first;
    let minValue = current.value;

    while (current.next !== null) {
      current = current.next;
      if (current.value < minValue) {
        minValue = current.value;
      }
    }
    this.display();
    console.log(`Minimum value: ${minValue}`);
  }

  display() {
    let current = this.first;
    const values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log("Stack {top to bottom}:", values);
  }
}

let myStack = new Stack(9);
myStack.push(25);
myStack.push(80);
myStack.push(36);
myStack.min();
