// FIXME
/**
 * @param {number[]} nums
 * @return {string[]}
 */

// var summaryRanges = function (nums) {
//   const output = [];
//   let idx = 0;
//   while (idx < nums.length) {
//     let beg, last;
//     beg = nums[idx];
//     while (idx + 1 < nums.length && nums[idx + 1] === nums[idx] + 1) idx++;
//     last = nums[idx];
//     if (beg == last) output.push(beg + '');
//     else output.push(beg + '->' + last);

//     idx++;
//   }
//   return output;
// };

var summaryRanges = function (nums) {
  let res = [];
  let index = 0;
  let max = 0;
  let min = 0;

  if (nums.length === 1) return [nums[0].toString()];

  while (index < nums.length) {
    if (nums[index] < 0) return ['0'];

    if (nums[index + 1] === nums[index] + 1) {
      max++;
    } else {
      console.log(min, max);
      if (min < max) {
        res.push(`${nums[min]}->${nums[index]}`);
      } else if (max === 0) {
        res.push(`${nums[index]}`);
      } else {
        res.push(`${min - 1}->${nums[index]}`);
      }

      min = nums[index + 1];
      max = 0;
    }

    index++;
  }
  return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// console.log(summaryRanges([-1]));
// console.log(summaryRanges([1]));
// console.log(summaryRanges([1, 2]));
// console.log(summaryRanges([1, 3]));
