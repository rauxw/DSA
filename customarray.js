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
  get(item) {
    return this.data[item];
  }
  getObject(itemIndex, key) {
    return this.data[itemIndex][key];
  }
}

const myNewArray = new MyArray();

const items = ["apple", "banana", "Pineapple", { Jack: "King" }];

function pushToArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    myNewArray.push(arr[i]);
  }
}

pushToArray(items);
console.log(myNewArray);
console.log(myNewArray.get(3));
console.log(myNewArray.getObject(3, "Jack"));
