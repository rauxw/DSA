const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

function mergeSortArray(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
//O(n)
const x = mergeSortArray(array1, array2);
console.log(x);
