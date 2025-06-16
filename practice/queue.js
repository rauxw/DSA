class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (!this.first) return null;
    console.log(`Queued value: ${this.first.value}`);
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
  }
  dequeue() {
    if (!this.first || !this.last) return null;
    let temp = this.first;
    this.first = this.first.next;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    console.log(`Dequeued value: ${temp.value}`);
  }
  display() {
    let current = this.first;
    const values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(`Display: ${values.join("-->")}`);
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.peek();
myQueue.display();
myQueue.dequeue();
myQueue.peek();
myQueue.display();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.display();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.display();
myQueue.peek();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
console.log(myQueue);
