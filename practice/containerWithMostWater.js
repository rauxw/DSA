const array = [3, 4, 1, 2, 9, 8];

function containerMaxArea(values) {
  let left = 0;
  let right = values.length - 1;
  let maxArea = 0;

  while (left < right) {
    const height = Math.min(values[left], values[right]);
    const width = right - left;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (values[left] < values[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(containerMaxArea(array));
