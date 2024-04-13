// TC O(n+m)
// SC O(n+m)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let extract = {};
  let res = [];

  for (const element of nums2) {
    extract[element] = element;
  }

  for (const element of nums1) {
    if (element === extract[element]) {
      res.push(element);
      extract[element] = '';
    }
  }
  return res;

  // let set1 = new Set(nums1);
  // let set2 = new Set(nums2);
  // return [...set1].filter((x) => set2.has(x));
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
