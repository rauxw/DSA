const arrayTest = [2, 5, 5, 2];

function findFirstRepeatedElement(array) {
  const seen = new Set();
  let firstRepeated = undefined;

  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      if (firstRepeated === undefined) {
        firstRepeated = array[i];
      }
    } else {
      seen.add(array[i]);
    }
  }

  if (firstRepeated !== undefined) {
    console.log(`First repeated element is ${firstRepeated}`);
    return firstRepeated;
  } else {
    console.log("No repeated element found");
    return undefined;
  }
}

findFirstRepeatedElement(arrayTest);
