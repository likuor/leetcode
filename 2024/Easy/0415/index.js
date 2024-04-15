// TC O(1)
// SC O(1)

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  return Number.isInteger(Math.sqrt(num));
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
