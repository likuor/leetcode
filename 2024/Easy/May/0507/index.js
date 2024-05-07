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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//   let resultQ = [];
//   let resultP = [];
//   let stackQ = [];
//   let stackP = [];
//   let currentQ = q;
//   let currentP = p;
//   while (currentQ !== null || stackQ.length > 0) {
//     while (currentQ !== null) {
//       stackQ.push(currentQ);
//       currentQ = currentQ.left;
//     }
//     currentQ = stackQ.pop();
//     resultQ.push(currentQ.val);
//     currentQ = currentQ.right;
//   }

//   while (currentP !== null || stackP.length > 0) {
//     while (currentP !== null) {
//       stackP.push(currentP);
//       currentP = currentP.left;
//     }
//     currentP = stackP.pop();
//     resultP.push(currentP.val);
//     currentP = currentP.right;
//   }
//   console.log(resultQ, resultP);
//   return JSON.stringify(resultQ) === JSON.stringify(resultP);
// };

var isSameTree = function (p, q) {
  console.log('===', p);
  console.log('===', q);
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// console.log(
//   isSameTree(
//     new TreeNode(1, new TreeNode(2), new TreeNode(3)),
//     new TreeNode(1, new TreeNode(2), new TreeNode(3))
//   )
// );

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2), null),
    new TreeNode(1, null, new TreeNode(2))
  )
);

// console.log(
//   isSameTree(
//     new TreeNode(1, new TreeNode(1)),
//     new TreeNode(1, null, new TreeNode(1))
//   )
// );
