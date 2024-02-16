// FIXME

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sorted = nums.sort();
  let index = 0;

  if (nums.length === 1 && nums[0] >= 1) return 0;
  if (nums.length === 1 && nums[0] === 0) return 1;
  // if (nums.length <= 2) return 2;

  while (index < sorted.length) {
    curr = sorted[index];
    next = sorted[index + 1];

    if (sorted.length === 2) {
      if (sorted[0] !== 0) return 0;
      if (next - curr === 1) return 2;
      else return 2;
    }

    if (next && next - curr !== 1) {
      return curr + 1;
    }
    index++;
  }
  return curr + 1;
  console.log('====', curr + 1);
};

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
console.log(missingNumber([0, 1, 2]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// console.log(missingNumber([0, 2]));
