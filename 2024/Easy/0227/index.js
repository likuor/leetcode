// TC O(n)
// SC O(n)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let splited = s.split(' ');
  let res = '';

  for (let index = 0; index < splited.length; index++) {
    if (splited[index] !== '') res = splited[index];
  }
  return res.length;
};

// var lengthOfLastWord = function (s) {
//   // console.log(s.trimEnd().split(' ').pop());
//   return s.trimEnd().split(' ').pop().length;
// };

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
