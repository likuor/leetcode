// Palindrome Number
// 時間計算量: O(n)
// 空間計算量: O(n)

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const arr = [...x.toString()];
  let arr2 = [];

  for (let i = arr.length - 1; 0 <= i; i--) {
    const element = arr[i];
    arr2 = [...arr2, element];
  }

  if (JSON.stringify(arr) === JSON.stringify(arr2)) return true;

  return false;
};

console.log(isPalindrome(1215));
