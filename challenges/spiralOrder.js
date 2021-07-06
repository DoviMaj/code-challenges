function spiralOrder(A) {
  if (!A[1]) return A[0];
  let top = 0;
  let right = A[0].length;
  let bottom = A.length - 1;
  let left = 0;
  let newArray = [];
  let dir = 0;
  while (left <= right && top <= bottom) {
    if (dir === 0) {
      // go left to right at top row
      for (let i = left; i < right; i++) {
        newArray.push(A[top][i]);
      }
      top++;
      dir = 1;
    }
    if (dir === 1) {
      // go top to bottom at right column
      for (let i = top; i <= bottom; i++) {
        newArray.push(A[i][right - 1]);
      }
      right--;
      dir = 2;
    }
    if (dir === 2) {
      // go right to left at bottom row
      for (let i = right - 1; i >= left; i--) {
        newArray.push(A[bottom][i]);
      }
      bottom--;
      dir = 3;
    }
    if (dir === 3) {
      // go bottom to top at left column
      for (let i = bottom; i >= top; i--) {
        newArray.push(A[i][left]);
      }
      left++;
      dir = 0;
    }
  }

  return newArray;
}
// console.log(spiralOrder([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));
