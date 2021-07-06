/* Reshape the matrix
https://leetcode.com/explore/challenge/card/july-leetcoding-challenge-2021/608/week-1-july-1st-july-7th/3803/
*/

function reshape(mat, r, c) {
  // Get array total length and build array of all items
  let totalLength = 0;
  let items = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      items.push(mat[i][j]);
      totalLength++;
    }
  }
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

module.exports = reshape;
