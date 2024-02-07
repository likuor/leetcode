// TC O(n)
// SC n(1)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  val = [...s];
  for (let k = 0; k < t.length; k++) {
    const element = t[k];
    if (val.indexOf(element) !== -1) {
      val.splice(val.indexOf(element), 1);
    } else {
      return false;
    }
  }
  if (val.length === 0) return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
