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
    this.length--;
    return temp.value;
  }

  display() {
    let current = this.first;
    const elementNodes = [];
    while (current !== null) {
      elementNodes.push(current.value);
      current = current.next;
    }
    console.log("Stack {top to bottom}:", elementNodes);
  }
}

let myStack = new Stack(9);
myStack.push(1);
myStack.push(2);
console.log("---------------------------");
myStack.display();
console.log("---------------------------");
myStack.pop();
myStack.display();
myStack.push(25);
myStack.push(80);
myStack.push(36);
myStack.display();
console.log("--------------------");
console.log(myStack.pop());
console.log("--------------------");
myStack.display();
