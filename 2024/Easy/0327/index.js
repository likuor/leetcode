// TS O(n)
// SC O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // const hasmap = new Map();
  // for (let idx = 0; idx < nums.length; idx++) {
  //   // Check if the difference betweend duplicates is less than k
  //   if (idx - hasmap.get(nums[idx]) <= k) {
  //     return true;
  //   }
  //   hasmap.set(nums[idx], idx);
  //   console.log(hasmap);
  // }
  // return false;

  // my answer
  let res = {};
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] in res && index - res[nums[index]] <= k) return true;
    res[nums[index]] = index;
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([99, 99], 2));
