/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    let openIndex = i;
    let closeIndex = s.length - 1 - i;
    if (element === '(') {
      if (s[openIndex + 1] === ')') {
        res = [...res, true];
      } else if (closeIndex === ')') {
        res = [...res, true];
      } else {
        res = [...res, false];
      }
    } else if (element === '[') {
      if (s[openIndex + 1] === ']') {
        res = [...res, true];
      } else if (closeIndex === ']') {
        res = [...res, true];
      } else {
        res = [...res, false];
      }
    } else if (element === '{') {
      if (s[openIndex + 1] === '}') {
        res = [...res, true];
      } else if (closeIndex === '}') {
        res = [...res, true];
      } else {
        res = [...res, false];
      }
    }
  }
  console.log(res.includes(false));
  return res.includes(false);
};

// console.log(isValid('(){}}{'));
console.log(isValid('{[]}'));
// console.log(isValid('({{{{}}}))'));
// isValid('()');
// isValid('(]');
