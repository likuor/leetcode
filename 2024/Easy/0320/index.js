// FIXME

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapStoT = {};
  const mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (mapStoT[charS] && mapStoT[charS] !== charT) ||
      (mapTtoS[charT] && mapTtoS[charT] !== charS)
    ) {
      return false;
    }

    mapStoT[charS] = charT;
    mapTtoS[charT] = charS;
  }
  return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
// console.log(isIsomorphic('paper', 'title')); // true
// console.log(isIsomorphic('bbbaaaba', 'aaabbbba')); //false
