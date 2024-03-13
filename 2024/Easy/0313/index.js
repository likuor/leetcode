// TS O(n/2) = O(n)
// SC O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let lowerStr = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let left = 0;
  let right = lowerStr.length - 1;

  while (left < right) {
    if (lowerStr[left] !== lowerStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;

  // let lowerStr = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // let reverse = '';

  // for (let i = 0; i < lowerStr.length; i++) {
  //   const element = lowerStr[i];
  //   reverse = element + reverse;
  // }

  // return reverse === lowerStr;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome('0P'));
