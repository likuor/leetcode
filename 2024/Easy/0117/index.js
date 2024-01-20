// Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Time O(n log n)
// Space O(1)
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = '_';
    } else {
      count++;
    }
  }

  nums.sort();

  return count;
};

removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
