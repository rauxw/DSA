const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function twoSum(target, array) {
  // trade will be memory for speed = speed ++
  const hashMap = {};
  for (let i = 0; i < array.length; i++) {
    const currentMapVal = hashMap[array[i]];
    if (currentMapVal >= 0) {
      return [currentMapVal, i];
    } else {
      const numberToGet = target - array[i]; // 9 - 1 = [8,7,6,5,4]
      hashMap[numberToGet] = i;
    }
    console.log(hashMap);
  }

  return null;
}

const x = twoSum(10, numbers);
console.log(x);
