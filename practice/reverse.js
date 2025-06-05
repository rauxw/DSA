const sentenceString = "Hello there";

function reverseString(string) {
  let reverseString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString.push(string[i]);
  }
  return reverseString.join("");
}

const joinedString = reverseString(sentenceString);

console.log(joinedString);
