// TC O(n)
// SC O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let late = 0,
    absent = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === 'A') {
      absent++;
      if (absent >= 2) return false;
      late = 0;
    } else if (s[index] === 'L') {
      late++;
      if (late >= 3) return false;
    } else {
      late = 0;
    }
    // console.log(s[index], absent, late);
  }
  return true;
};

console.log(checkRecord('PPALLP'));
console.log(checkRecord('PPALLL'));
console.log(checkRecord('LALL'));
