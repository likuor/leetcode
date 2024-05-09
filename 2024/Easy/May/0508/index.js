// FIXME

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;
  return (
    root.left.val === root.right.val &&
    isSymmetric(root.left) &&
    isSymmetric(root.right)
  );
};

// function isMirror(leftNode, rightNode) {
//   if (!leftNode && !rightNode) return true;
//   if (!leftNode || !rightNode) return false;
//   // if (leftNode == null && rightNode == null) return true;
//   // if (leftNode == null || rightNode == null) return false;
//   console.log('===', leftNode, rightNode);
//   return (
//     leftNode.val === rightNode.val &&
//     isMirror(leftNode.left, rightNode.right) &&
//     isMirror(leftNode.right, rightNode.left)
//   );
// }

// var isSymmetric = function (root) {
//   if (root == null) return true;
//   return isMirror(root.left, root.right);
// };

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
  )
);

// console.log(
//   isSymmetric(
//     new TreeNode(
//       1,
//       new TreeNode(2, null, new TreeNode(3)),
//       new TreeNode(2, null, new TreeNode(3))
//     )
//   )
// );

// console.log(isSymmetric(new TreeNode(1, new TreeNode(2), new TreeNode(3))));
