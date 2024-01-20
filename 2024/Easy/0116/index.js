// Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */

// Time O(n log n)
// Space O(n)

var f = function (a, b) {
  return a - b;
};

var removeDuplicates = function (nums) {
  let res = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (res[element]) {
      res[element]++;
      nums[i] = '_';
    } else {
      res[element] = 1;
    }
  }

  nums.sort().sort(f);

  return Object.keys(res).length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([-3, -1, 0, 0, 0, 3, 3]));
