const integer1 = 12345;

function reverseInteger(value) {
  const stringVal = String(value);
  let reversed = "";
  for (let i = stringVal.length - 1; i >= 0; i--) {
    reversed += stringVal[i];
  }
  return parseInt(reversed, 10);
}

console.log(reverseInteger(integer1));
