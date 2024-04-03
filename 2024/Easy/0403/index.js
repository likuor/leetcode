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

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
console.log(isUgly(0));
console.log(isUgly(7));
