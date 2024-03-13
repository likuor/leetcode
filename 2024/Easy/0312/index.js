// FIXME

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];
  const row = 1;
  let middle = 0;
  let value = 1;

  for (let i = 0; i < numRows; i++) {
    middle = i - 1;
    value = 2 ** i;

    if (value > 3) {
      console.log(row * row * i);
      res = [...res, Array(i + 1).fill(row * row * i)];
      // centerArr = Array(middle).fill(middle + row);
      // console.log(centerArr);
      // console.log(middle);
    } else {
      res = [...res, Array(i + 1).fill(row)];
    }

    // if (middle > 0) {
    //   centerArr = Array(middle).fill(middle + row);
    //   console.log(centerArr);
    //   console.log(middle);
    // } else {
    //   res = [...res, Array(i + 1).fill(row)];
    // }
  }
  console.log(res);
};

console.log(generate(5));
