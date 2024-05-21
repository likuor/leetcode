// SC O(log4(n))
// TC O(log4(n))

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n === 0 || n < 0) return false;
  if (n % 4 === 0) return isPowerOfFour(n / 4);
  return n === 1;
};

// SC O(log4(n))
// TC O(1)
var isPowerOfFour = (n) => {
  if (n === 0) return false;
  while (n % 4 === 0) {
    n = n / 4;
  }
  return n === 1;
};

// console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
// console.log(isPowerOfFour(1));
