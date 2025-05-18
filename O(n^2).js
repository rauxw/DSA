// O(n^2) says that the algorithm execution time grows quadratically with the size of the input data (represented by n)

const items = ["shoes", "laptop", "cards", "mac", "PS5", "Xbox"];

function findPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      console.log(`Pair:${arr[i]} : ${arr[j]}`);
    }
  }
}

findPairs(items);
