class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  get(item) {
    return this.data[item];
  }
  getObject(itemIndex, key) {
    return this.data[itemIndex][key];
  }

  shift() {
    const firstElement = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArray = new MyArray();

//                0        1            2         3
const items = ["apple", "banana", "Pineapple", "King"];

function pushToArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    myNewArray.push(arr[i]);
  }
}

pushToArray(items);
console.log(myNewArray);

console.log(myNewArray.deleteByIndex(1));
console.log(myNewArray);
