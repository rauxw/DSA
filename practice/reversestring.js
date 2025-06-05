const String = "Hi My Name is Andre";
console.log(String.length);

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(String));
