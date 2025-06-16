class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      console.log("Stack empty");
      return null;
    }
    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return temp.value;
  }
  peek() {
    if (!this.top) return null;
    console.log(this.top.value);
  }
  display() {
    let current = this.top;
    const values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(`Values: ${values.join("-->")}`);
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.peek();
myStack.push(4);
myStack.peek();
myStack.display();
