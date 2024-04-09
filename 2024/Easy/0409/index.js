// TC O(log n)
// SC O(log n)

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0 || n < 0) return false;
  if (n % 3 === 0) return isPowerOfThree(n / 3);
  return n === 1;

  // while (n > 1) {
  //   n /= 3;
  // }
  // return n === 1;
};

// console.log(isPowerOfThree(8));
console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(64));
// console.log(isPowerOfThree(29));
// console.log(isPowerOfThree(125));
