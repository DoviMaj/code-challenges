/* Reshape the matrix
https://leetcode.com/explore/challenge/card/july-leetcoding-challenge-2021/608/week-1-july-1st-july-7th/3803/
*/
// check if its possible to form 2D array of r rows and c columns with provided array

function reshape(mat, r, c) {
  // Count array total length
  // for loop inside for loop for Count
  let totalLength = 0;
  let items = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      items.push(mat[i][j]);
      totalLength++;
    }
  }
  // check if r times c === length
  if (r * c === totalLength) {
    // create r arrays of c items
    let newArr = [];
    let item = 0;
    for (let i = 0; i < r; i++) {
      newArr.push([]);
      for (let j = 0; j < c; j++) {
        newArr[i].push(items[item]);
        item++;
      }
    }
    return newArr;
  } else {
    return mat;
  }
}

// tests
console.log(
  isArrEqual(
    reshape(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      2,
      2
    ),
    [
      [1, 2, 3],
      [4, 5, 6],
    ]
  )
);
console.log(
  isArrEqual(
    reshape(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      3,
      2
    ),
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(
  isArrEqual(
    reshape(
      [
        [1, 2],
        [3, 4],
      ],
      1,
      4
    ),
    [[1, 2, 3, 4]]
  )
);

function isArrEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
