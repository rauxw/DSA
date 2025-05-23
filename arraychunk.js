const arrayChunk = (array, size) => {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    console.log("-------------", chunk);
    chunked.push(chunk);
    index += size; // one index 3 and next 3 which will be at 6 then 9 and soo on (i am taking size as 3)
  }
  return chunked;
};
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
  "JEqqax",
  "jdjawdad",
];

console.log(arrayChunk(names, 3));
