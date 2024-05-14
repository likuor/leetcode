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
// var isBalanced = function (root) {
//   if (!root) return false;
//   // if (add(root)[0] === 0 && addR(root)[0] === 0) return false;
//   return Math.abs(add(root).length - addR(root).length) < 2;
// };

// const add = (root) => {
//   let data = [];
//   const travase = (node) => {
//     node.left && travase(node.left);
//     data.push(node.val);
//   };
//   travase(root);
//   return data;
// };

// const addR = (root) => {
//   let data = [];
//   const travase = (node) => {
//     node.right && travase(node.right);
//     data.push(node.val);
//   };
//   travase(root);
//   return data;
// };

var isBalanced = function (root) {
  // If the tree is empty, we can say it’s balanced...
  if (root == null) return true;
  // Height Function will return -1, when it’s an unbalanced tree...
  if (Height(root) == -1) return false;
  return true;
};
// Create a function to return the “height” of a current subtree using recursion...
var Height = function (root) {
  // Base case...
  if (root == null) return 0;
  // Height of left subtree...
  let leftHeight = Height(root.left);
  // Height of height subtree...
  let rightHight = Height(root.right);
  // In case of left subtree or right subtree unbalanced, return -1...
  if (leftHeight == -1 || rightHight == -1) return -1;
  // If their heights differ by more than ‘1’, return -1...
  if (Math.abs(leftHeight - rightHight) > 1) return -1;
  // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
  return Math.max(leftHeight, rightHight) + 1;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  isBalanced(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);

console.log(
  isBalanced(
    new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        new TreeNode(3)
      ),
      new TreeNode(2)
    )
  )
);

console.log(isBalanced(null));
