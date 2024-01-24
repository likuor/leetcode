/**
 * @parares {number} n
 * @return {boolean}
 */

// Time O(log(n))
// Space O(log(n))

var isHappy = function (n) {
  if (n === 1) return true;
  // if (n <= 4) return false;

  let arr = [...n.toString()];
  let res = [];

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    res = [...res, Number(arr[i]) * Number(arr[i])];
  }

  const sum = res.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return isHappy(sum);
};

// console.log(isHappy(19));
// console.log(isHappy(7));
// console.log(isHappy(1));
console.log(isHappy(2));
// console.log(isHappy(3));
