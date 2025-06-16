class QueueUsingStacks {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  // Add element to the queue
  enqueue(element) {
    this.inputStack.push(element);
  }

  // Remove element from the queue
  dequeue() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    if (this.outputStack.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.outputStack.pop();
  }

  // Get the front element without removing it
  peek() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    if (this.outputStack.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.outputStack[this.outputStack.length - 1];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }
}
const queue = new QueueUsingStacks();
queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue);
