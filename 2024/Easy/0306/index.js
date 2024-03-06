// FIXME
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  while (i < m) {
    nums1.push(nums2[i]);
    i++;
  }

  for (let index = 0; index < m; index++) {
    nums1.sort().shift();
  }
  return nums1;

  // nums1 = [...nums1, ...nums2].sort().filter(function (value) {
  //   return value > 0;
  // });
  // return nums1;
};

(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
console.log(merge(nums1, m, nums2, n));

// function merge(arr1, arr2) {
//   let res = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       res.push(arr1[i]);
//       i++;
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     res.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     res.push(arr2[j]);
//     j++;
//   }
//   return res;
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }
