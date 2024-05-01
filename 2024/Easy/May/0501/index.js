// FIXMW
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
 * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// var inorderTraversal = function (root) {
//   let tmp = root.val;

//   for (let index = 0; index < tmp.length; index++) {
//     const element = tmp[index];
//     if (index === 0) {
//       root.val = element;
//     } else if (element !== null) {
//       if (root.right < element) {
//         root.right = new TreeNode(element, null, null);
//       } else {
//         root.right.left = new TreeNode(element, null, null);
//       }
//     }
//   }

//   return root;
// };

// let root = new TreeNode([1, null, 2, 3]);
// console.log(inorderTraversal(root));

var inorderTraversal = function (root) {
  const result = [];
  helper(root, result);
  return result;
};

function helper(root, result) {
  if (root !== null) {
    helper(root.left, result);
    result.push(root.val);
    helper(root.right, result);
  }
}

let root = new TreeNode([1, null, 2, 3]);
console.log();
