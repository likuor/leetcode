/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  console.log(leftDepth, rightDepth);
  return Math.max(leftDepth, rightDepth) + 1;
};
// var maxDepth = function (root) {
//   let result = [];
//   let stack = [];
//   let current = root;

//   while (current !== null || stack.length > 0) {
//     while (current !== null) {
//       stack.push(current);
//       current = current.left;
//     }
//     current = stack.pop();
//     result.push(current.val);
//     current = current.right;
//   }

//   return result;
// };

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  maxDepth(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);

// console.log(maxDepth(new TreeNode(1, null, new TreeNode(2))));
