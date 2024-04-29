// FIXME

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function (num1, num2) {
  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    let sum = carry;
    if (i >= 0) {
      // 1の数から計算
      sum += num1.charAt(i) - '0';
      i--;
    }
    if (j >= 0) {
      // 1の数から計算
      sum += num2.charAt(j) - '0';
      j--;
    }
    // 数が10以上か確認
    result = (sum % 10) + result;
    // 10以上であれば次の値を繰り上げる
    carry = Math.floor(sum / 10);
  }

  return result;
};

// console.log(addStrings('11', '123'));
console.log(addStrings('12345', '12345'));
// console.log(addStrings('9333852702227987', '85731737104263'));
// console.log(addStrings('456', '77'));
// console.log(addStrings('0', '0'));
