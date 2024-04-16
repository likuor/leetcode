FIXME;

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let store = {};
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    store[element] = index;
  }

  const valuesArray = Object.values(store);

  let first = valuesArray.length - 1;

  for (let index = 0; index < valuesArray.length; index++) {
    const element = valuesArray[index];
    if (first > element) {
      first = element;
    }
  }
  return first;
};

console.log(firstUniqChar('leetcode'));
// console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
// console.log(firstUniqChar('aadadaad'));
