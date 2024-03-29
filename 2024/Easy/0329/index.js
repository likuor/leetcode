// TC O(n)
// SC O(n)

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num === 0) return 0;

  var digitsArr = ('' + num).split('');
  const totalVal = digitsArr.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );
  if (num < 10) return totalVal;
  return addDigits(totalVal);
};

console.log(addDigits(38));
console.log(addDigits(0));
