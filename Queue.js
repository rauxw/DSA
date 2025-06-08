class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
  }
  dequeue() {
    let temp = this.first;
    this.first = this.first.next;
    this.length--;
  }
  display() {
    let current = this.first;
    const values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
  }
}

const myQueue = new Queue(1);

console.log("Enqueuing items");
myQueue.enqueue(2);
myQueue.display();
myQueue.enqueue(3);
myQueue.display();
myQueue.enqueue(4);
myQueue.display();
myQueue.enqueue(5);
myQueue.display();
myQueue.enqueue(6);
myQueue.display();
console.log(" ");
console.log("Dequeueing items");
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
console.log(" ");
