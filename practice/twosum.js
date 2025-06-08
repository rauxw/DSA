const numbers = [1, 2, 3, 4, 5];

// function TwoSum(target, array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         console.log(`Index ${i} and ${j} gives ${target}`);
//         break;
//       }
//     }
//   }
//   return null;
// }

function TwoSumX(target, array) {
  for (let i = 0; i < array.length; i++) {
    const numberToFind = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (numberToFind === array[j]) {
        return [i, j];
      }
    }
  }
}
return null;

TwoSumX(9, numbers);
