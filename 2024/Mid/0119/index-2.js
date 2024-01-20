// Optimal Partition of String

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  console.log(s.split('a'));
  // console.log(s.split(s[0]));
  let count = 0;
  for (let i = 0; i < s.split(s[0]).length; i++) {
    if (s.split(s[0])[i] == '') count++;
  }

  if (count === 1) return s.split(s[0]).length;

  return s.split(s[0]).length - 1;
};

console.log(partitionString('abacaba'));
console.log(partitionString('ssssss'));
// console.log(partitionString('gizfdfri'));
// console.log(partitionString('cuieokbs'));
// partitionString('abacaba');
// partitionString('ssssss');
// partitionString('gizfdfri');
