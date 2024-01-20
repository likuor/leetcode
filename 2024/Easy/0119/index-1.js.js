// Concatenation of Array

// Time O(N)
// Space O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

getConcatenation([1, 2, 1]);
getConcatenation([1, 3, 2, 1]);
