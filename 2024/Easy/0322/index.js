// TS O(n)
// SC O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//   let res = {};
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if (element in res) {
//       res[element] = false;
//     } else {
//       res[element] = true;
//     }
//   }

//   console.log(res);

//   for (let key in res) {
//     if (res.hasOwnProperty(key) && res[key] === true) {
//       return Number(key);
//     }
//   }
// };
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
    console.log('========', result);
  }
  return result;
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([1]));
