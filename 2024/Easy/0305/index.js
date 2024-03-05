// FIXME
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  console.log(head);
  // console.log(newNode);
};

let val = [1, 1, 2];
let newNode = new ListNode(val[0], new ListNode(val[1], new ListNode(val[2])));
console.log(deleteDuplicates(newNode));
// console.log(deleteDuplicates([1, 1, 2, 3, 3]));
