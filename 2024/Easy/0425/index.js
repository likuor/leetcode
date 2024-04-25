// TC O(n^2)
// SC O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let startVal = 1;

  const recursion = (val) => {
    let res = [];
    let temp = 0;
    for (let index = 0; index < nums.length; index++) {
      if (index === 0) {
        temp = nums[index] + val;
        res.push(temp);
      } else {
        temp = temp + nums[index];
        res.push(temp);
      }
    }
    if (res.some((number) => number < 1)) return recursion(val + 1);
    return val;
  };
  return recursion(startVal);
};

console.log(minStartValue([-3, 2, -3, 4, 2]));
console.log(minStartValue([1, 2]));
console.log(minStartValue([1, -2, -3]));
console.log(minStartValue([2, 3, 5, -5, -1]));
console.log(minStartValue([2, 3, 4]));
