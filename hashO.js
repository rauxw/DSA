class HashTable {
  constructor(size = 6) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;
    const PRIME_NUMBER = 31;
    const lowerKey = key.toLowerCase();
    for (let i = 0; i < Math.min(lowerKey.length, 100); i++) {
      const charCode = lowerKey.charCodeAt(i) - 96;
      if (charCode >= 1 && charCode <= 26) {
        sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
      }
    }
    return sum;
  }

  set(key, value) {
    const index = this._hashFunction(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hashFunction(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }
  getAllValues() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

const myHash = new HashTable();

myHash.set("Jack", "111-222-333");
myHash.set("Ryan", "111-333-666");
myHash.set("Jhonny", "444-555-666");
console.log(myHash.getAllKeys());
console.log(myHash.getAllValues());
