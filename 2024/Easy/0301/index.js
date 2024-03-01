// FIXME
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let total = BigInt(Number(digits.join('')) + 1);

  let totalStr = BigInt(total).toString();
  let res = [];
  for (let i = 0; i < totalStr.length; i++) {
    const element = Number(totalStr[i]);
    res = [...res, element];
  }
  return res;

  //   var plusOne = function(digits) {
  //     return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
  // };
};

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
