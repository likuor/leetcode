/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  const [aX1, aY1, aX2, aY2] = rec1,
    [bX1, bY1, bX2, bY2] = rec2;
  return aX1 < bX2 && aX2 > bX1 && aY1 < bY2 && aY2 > bY1;
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
// console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]));
