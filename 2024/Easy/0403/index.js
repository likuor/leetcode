// TC O(log n)
// SC O(log n)

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;

  if (n % 2 === 0) return isUgly(n / 2);
  if (n % 3 === 0) return isUgly(n / 3);
  if (n % 5 === 0) return isUgly(n / 5);

  return false;
};

// var isUgly = function (n) {
//   if (n <= 0) return false;

//   while (n != 1) {
//     if (n % 2 === 0) {
//       n /= 2;
//     } else if (n % 3 === 0) {
//       n /= 3;
//     } else if (n % 5 === 0) {
//       n /= 5;
//     } else {
//       return false;
//     }
//   }

//   return true;
// };

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
console.log(isUgly(0));
console.log(isUgly(7));
console.log(isUgly({ name: 12, email: 'test' }));
console.log(isUgly({ name: 12, email: 'test' }));
