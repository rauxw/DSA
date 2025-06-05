const string = ["a", "b", "c", "d"];

console.log(string[2]);

// push

string.push(1);
console.log(string);

// pop
string.pop();

console.log(string);

string.pop();

console.log(string);

string.unshift("x");
console.log(string);

string.splice(3, 0, "Alien");

console.log(string);

string.splice(6, 0, "Added x");
console.log(string);
