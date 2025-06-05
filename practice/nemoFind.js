const large = new Array(60).fill("Jack");
large.push("Nemo");
console.log(large);
function findByName(name, array) {
  let t0 = performance.now();
  let getName = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      getName = array[i];
    }
  }

  let t1 = performance.now();
  const timeTaken = t1 - t0;
  console.log("Time taken:", timeTaken.toFixed(3), "milliseconds");
  return getName;
}

console.log(findByName("Nemo", large));

// O(n) ----> Linear Time
