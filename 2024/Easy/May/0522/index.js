// TC O(2^n)
// SC O(n)

/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n === 0) return 0;
//   if (n < 3) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// TC O(n)
// SC O(1)
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
// console.log(fib(0));
// console.log(fib(20)); // 6765
