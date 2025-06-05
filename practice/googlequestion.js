// given 2 arrays find common items in them

// //O(n^2)

//

// function commonItemInSets(arrayOne, arrayTwo) {
//   for (let i = 0; i < itemSetOne.length; i++) {
//     for (let j = 0; j < itemSetTwo.length; j++) {
//       if (arrayOne[i] === arrayTwo[j]) {
//         commonElementArray.push(arrayOne[i]);
//       }
//     }
//   }
// }

// //O(a*b) n^2
// //O(a+b) 2n
// commonItemInSets(itemSetOne, itemSetTwo);

const itemSetOne = [4, 5, 2, 3];
const itemSetTwo = [5, 2, 4, 0];
const commonElementArray = [];

function containsCommonItem2(arr1, arr2) {
  let map = {}; //O(1)
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  } //O(n) ==> a

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      commonElementArray.push((arr2[j] = true));
    } else {
      commonElementArray.push((arr2[j] = false));
    }
  } // O(n) ==> b
}

//O(a + b) ---> Good

containsCommonItem2(itemSetOne, itemSetTwo);

console.log(commonElementArray);
