// function reverseStackString(str) {
//   const stack = [];
//   for (let char of str) {
//     stack.push(char); //O(n)
//   }
//   let reverseString = "";
//   while (stack.length > 0) {
//     //O(n)
//     reverseString += stack.pop();
//   }
//   return reverseString;
// }
// const reverseString = reverseStackString("Google");
// console.log(reverseString);

// //O(a + b)

function optimizedVersionStack(str) {
  const stack = [];
  for (let char of str) {
    stack.push(char);
  }
  let reverseString = [];
  while (stack.length > 0) {
    reverseString.push(stack.pop());
  }
  return reverseString.join("");
}
const stringOutputReverse = optimizedVersionStack("Google");
console.log(stringOutputReverse);
//O(a + b) avoided String addition
