// 10 --> 5 ---> 15

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const prependNewNode = {
      value: value,
      next: this.head,
      prev: null,
    };
    this.head.prev = prependNewNode;
    this.head = prependNewNode;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.display();
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
    this.length++;
    return this.display();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    this.length--;
    return this.display();
  }

  reverse() {
    let currentNode = this.head;
    let temp = null;

    while (currentNode !== null) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this.printFullStructure();
  }

  display() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join("-->"));
  }

  printFullStructure() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log({
        value: currentNode.value,
        prev: currentNode.prev ? currentNode.prev.value : null,
        next: currentNode.next ? currentNode.next.value : null,
      });
      currentNode = currentNode.next;
    }
  }
}

const myLinkList = new DoublyLinkedList(10);
myLinkList.append(5);
myLinkList.prepend(55);
myLinkList.insert(1, 87);
myLinkList.display();
// myLinkList.insert(100, 234);
// myLinkList.display();
// myLinkList.remove(2);
console.log(" ");
console.log("---------Print Full Structure---------");
console.log(" ");
myLinkList.printFullStructure();
console.log(" ");
console.log("---------Reversed Full Structure-------");
console.log("");
myLinkList.reverse();
