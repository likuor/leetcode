// TC O(n^2)
// SC O(n)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // let lastNonZeroFoundAt = 0; // ゼロでない要素の最後の位置を追跡
  // // すべてのゼロでない要素を前方に移動
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== 0) {
  //     nums[lastNonZeroFoundAt++] = nums[i];
  //   }
  // }
  // console.log(nums);
  // for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
  //   nums[i] = 0;
  // }
  // // console.log(nums);
  // return nums;

  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      index--;
      count++;
    }
  }
  nums.push(...Array(count).fill(0));
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 0, 12]));
// console.log(moveZeroes([0]));
// console.log(moveZeroes([0, 0, 1]));
// console.log(moveZeroes([1, 0, 0, 1]));
