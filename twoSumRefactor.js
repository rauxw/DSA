const nums = [2, 7, 11, 15];

function twoSums(num, target) {
  const numMap = {};
  for (let i = 0; i < num.length; i++) {
    const compliment = target - num[i];
    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }
    numMap[num[i]] = i;
  }
  return [];
}

console.log(twoSums(nums, 9));
