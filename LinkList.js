class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode; // pointer to next one
    this.tail = newNode; // newNode assigned
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  printList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.head);
      currentNode = currentNode.next;
    }
  }
}

const myLinkedList = new LinkedList(1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 766, 3231];

function inputElemnets(array) {
  for (let i = 0; i < array.length; i++) {
    myLinkedList.push(array[i]);
  }
}

inputElemnets(numbers);
myLinkedList.unshift(22);
myLinkedList.printList();
myLinkedList.shift();
myLinkedList.shift();
console.log(myLinkedList);
