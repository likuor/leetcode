// TC O(n)
// SC O(n)

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = [];
  let res = '';
  const vowels = 'aeiouAEIOU';

  for (let char of s) {
    if (vowels.includes(char)) arr.unshift(char);
    // TODO なぜ
    // if (vowels.includes(char)) arr = [char, ...arr];
  }

  for (let index = 0; index < s.length; index++) {
    if (vowels.includes(s[index])) res += arr.shift();
    else res += s[index];
  }

  return res;
};

// const reverseVowels = function (s) {
//   const vow = s.match(/[aeiou]/gi);
//   console.log(vow);
//   return s.replace(/[aeiou]/gi, (el) => vow.pop());
// };

console.log(reverseVowels('hello'));
// console.log(reverseVowels('leetcode'));
// console.log(reverseVowels('hello'));
