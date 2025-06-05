const elements = [1, 2, 3, 4, 5];

function logElementsArray(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        console.log(i, j);
      }
    }
  }
}

logElementsArray(elements);

//O(n^2) this is the time complexity
