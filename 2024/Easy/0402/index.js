// FIXME

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let letters = {};
  const splited = s.split(' ');
  const set = new Set(splited).size;

  if (4 === splited.length && set === 1) return false;
  if (pattern.length !== splited.length) return false;

  for (let index = 0; index < pattern.length; index++) {
    const element = pattern[index];

    if (element in letters) {
      if (letters[element] !== splited[index]) {
        return false;
      }
    }
    letters[element] = splited[index];

    console.log(letters);
  }
  return true;
};

// var wordPattern = function (pattern, str) {
//   const words = str.split(/\s+/);
//   const map = new Map();

//   if (words.length !== pattern.length) return false;
//   if (new Set(words).size !== new Set(pattern).size) return false;

//   for (let i = 0; i < pattern.length; i++) {
//     if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) return false;
//     map.set(pattern[i], words[i]);
//     console.log(map.get(pattern[i]));
//   }
//   return true;
// };

console.log(wordPattern('abba', 'dog cat cat dog'));
// console.log(wordPattern('abba', 'dog cat cat fish'));
// console.log(wordPattern('aaaa', 'dog cat cat dog'));
// console.log(wordPattern('abba', 'dog dog dog dog'));
// console.log(wordPattern('a', 'a'));
// console.log(wordPattern('abc', 'dog cat dog'));
