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

function inorderTraversal(root) {
  let result = [];
  // if (root === null) {
  //   return result;
  // }

  // function helper(node: TreeNode | null) {
  //   if (node !== null) {
  //     if (node.left !== null) {
  //       console.log(node.left, 'node.left');
  //       helper(node.left);
  //     }
  //     result.push(node.val as number);
  //     if (node.right !== null) {
  //       helper(node.right);
  //     }
  //   }
  //   console.log(result, 'result');
  // }

  // helper(root);
  // return result;

  let stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }

  return result;
}

console.log(
  inorderTraversal(
    new TreeNode(
      1,
      new TreeNode(5, new TreeNode(6, null), new TreeNode(1, null)),
      new TreeNode(2, new TreeNode(3))
    )
  )
);
