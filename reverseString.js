const originalString = "Apple King";

function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

const reverseStringResult = reverseString(originalString);
console.log(reverseStringResult);
