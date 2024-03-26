// TS O(n)
// SC O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let res = {};
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] in res) return true;
    res[nums[index]] = nums[index];
  }
  return false;

  // const s = new Set(nums);
  // console.log(s);
  // return s.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
