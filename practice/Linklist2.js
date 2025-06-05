class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const prependnewNode = {
      value: value,
      next: this.head,
    };
    this.head = prependnewNode;
    this.length++;
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
}

const list = new LinkedList(10);
list.append(5);
list.prepend(67);
list.display();
console.log(list);
