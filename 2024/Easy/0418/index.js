// TC: O(n)
// SC: O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let count = 0;
  let res = '';
  for (let index = 0; index < t.length; index++) {
    if (s[count] === t[index]) {
      res += t[index];
      count++;
    }
  }
  return res === s;
};

// TC: O(n)
// SC: O(1)
// var isSubsequence = function (s, t) {
//   let i = 0,
//     j = 0;
//   while (i < s.length && j < t.length) {
//     if (s[i] === t[j]) {
//       i++;
//     }
//     j++;
//   }
//   console.log(i);
//   return i === s.length;
// };

// console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
