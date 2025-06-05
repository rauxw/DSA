class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(Index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

const items = ["Apple", "Banana", "PineApple", "Carrot"];

for (let i = 0; i < items.length; i++) {
  newArray.push(items[i]);
}

console.log(newArray);
newArray.delete(3);
console.log(newArray);
newArray.delete(2);
console.log(newArray);
