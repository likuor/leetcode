// TC O(n)
// SC O(n)

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  const splited = s.split(' ');
  let count = 0;
  for (let index = 0; index < splited.length; index++) {
    if (splited[index] === '') count++;
  }

  return splited.length - count;

  // for (const segment of segments) {
  //   if (segment !== '') {
  //     count++;
  //   }
  // }
  // return count;
};

console.log(countSegments('Hello, my name is John'));
// console.log(countSegments('Hello'));
// console.log(countSegments(''));
console.log(countSegments('                '));
console.log(
  countSegments('Of all the gin joints in all the towns in all the world,   ')
);
