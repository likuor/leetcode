// FIXME
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // const xInt = parseInt(x.toString(2));
  // const yInt = parseInt(y.toString(2));

  // const xLength = xInt.toString().length;
  // const yLength = yInt.toString().length;
  // const length = Math.max(xLength, yLength);

  // const xArray = xInt.toString().split('');
  // const yArray = yInt.toString().split('');

  // for (let index = 0; index < length + 1 - xLength; index++) {
  //   xArray.unshift('0');
  // }

  // for (let index = 0; index < length + 1 - yLength; index++) {
  //   yArray.unshift('0');
  // }

  // let count = 0;
  // for (let index = 0; index < length + 1; index++) {
  //   const xElement = xArray[index];
  //   const yElement = yArray[index];
  //   console.log(xElement, yElement);

  //   if (xElement !== yElement) {
  //     count++;
  //   }
  // }
  // return count;

  let xor = x ^ y; // XOR of x and y will give a number with bits set where x and y differ
  let count = 0;
  console.log(xor);

  // Count the number of set bits in xor
  while (xor !== 0) {
    console.log(xor & 1);
    count += xor & 1; // Check the lowest bit
    xor = xor >> 1; // Shift right by one bit to check the next bit
  }

  return count;
};

console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 1));
console.log(hammingDistance(1577962638, 1727613287));
