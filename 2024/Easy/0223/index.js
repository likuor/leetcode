/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = 0;
  let arr = [];

  if (target === 0) return 0;

  while (nums.length !== index) {
    // console.log(nums[index]);

    if (nums[index] === target) {
      return index;
    }

    if (nums[index] < target) {
      if (nums[index] + 1 === target) {
        return index + 1;
      }
      arr = [...arr, nums[index]];

      if (arr.length === nums.length) {
        return nums.length;
      }

      console.log(arr);
      // searchInsert(arr, target);
    }

    index++;
  }

  // if (target === 0) return 0;

  // let curr = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   curr = nums[i];

  //   if (curr === target) return i;

  //   if (nums.length === 1) {
  //     if (curr === target) return i;
  //     if (curr > target) return i;
  //     if (curr < target) return i + 1;
  //   }

  //   if (curr > target && target > nums[i + 1]) {
  //     return i;
  //   }

  //   if (curr < target && target < nums[i + 1]) {
  //     return i + 1;
  //   }

  //   if (i === 0 && curr > target) {
  //     return i;
  //   }

  //   if (i === nums.length - 1 && curr < target) {
  //     return i + 1;
  //   }
  // }
};

console.log(searchInsert([2, 5], 1));

// console.log(searchInsert([1], 1));
// console.log(searchInsert([1, 3, 5, 6], 0));
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
