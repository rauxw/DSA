// now create O(n^2 + n)

function nextOn(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      console.log(`Pairs: ${i} : ${j}`); // this is O(n^2)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    // this is n
    console.log(`Items: ${arr[i]}`);
  }
}

nextOn(items);
