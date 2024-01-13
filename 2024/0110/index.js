// FIXME Roman_to_Integer
// 時間計算量: O(n)
// 空間計算量: O(n)

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    IV: 4,
    IX: 9,
    V: 5,
    X: 10,
    XL: 40,
    XC: 90,
    L: 50,
    C: 100,
    CD: 400,
    CM: 900,
    D: 500,
    M: 1000,
  };

  const edges = [
    {
      name: 'IV',
      val: 4,
    },
    {
      name: 'IX',
      val: 9,
    },
    {
      name: 'XL',
      val: 40,
    },
    {
      name: 'XC',
      val: 90,
    },
    {
      name: 'CD',
      val: 400,
    },
    {
      name: 'CM',
      val: 900,
    },
  ];

  let res = edges.filter((edge) => {
    if (s.indexOf(edge.name) > 0) {
      return edge.val;
    }
  });

  // console.log(res);
  let total = res.reduce(function (sum, element) {
    console.log('element', element);
    return sum + element;
  }, 0);

  console.log('total', total);

  // const arr = [...s];

  // let val = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   let res = edges.map((edge) => {
  //     if (s.indexOf(edge.name)) {
  //       return edge.val;
  //     }
  //   });
  //   console.log(res);

  //   if (roman.hasOwnProperty(arr[i])) {
  //     val += roman[arr[i]];
  //   }
  // }

  // return val;
};

// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
