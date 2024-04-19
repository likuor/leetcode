/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return 1;

  const arr = [...s];
  let res = [];
  let additionalStr = '_';

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
      res.push(element);
    } else {
      additionalStr = element;
    }
  }
  if (res.length % 2 === 0 && res.length > 2) return res.length + 1;

  return res.length;
};

// console.log(longestPalindrome('abccccdd'));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('bb'));
// console.log(longestPalindrome('bananas'));
console.log(longestPalindrome('abb'));
