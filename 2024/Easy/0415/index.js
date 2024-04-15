// TC O(1)
// SC O(1)

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  return Number.isInteger(num ** 0.5);

  // if (num < 1) {
  //   return false;
  // }
  // if (num === 1) {
  //   return true;
  // }
  // let left = 1;
  // let right = num;
  // while (left <= right) {
  //   let mid = Math.floor((left + right) / 2);
  //   if (mid * mid === num) {
  //     return true;
  //   } else if (mid * mid > num) {
  //     right = mid - 1;
  //   } else if (mid * mid < num) {
  //     left = mid + 1;
  //   }
  // }
  // return false;
};

console.log(isPerfectSquare(16));
// console.log(isPerfectSquare(25));
// console.log(isPerfectSquare(14));
