const array = [7, 1, 2, 3, 9];

function getArray(values) {
  let maxArea = 0;
  for (let p1 = 0; p1 < values.length; p1++) {
    for (let p2 = p1 + 1; p2 < values.length; p2++) {
      const height = Math.min(values[p1], values[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

console.log(getArray(array));
