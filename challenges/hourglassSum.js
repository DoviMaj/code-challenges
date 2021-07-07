function hourglassSum(arr) {
  let sums = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let aHourglass = [];
      aHourglass.push(
        arr[j][i],
        arr[j][i + 1],
        arr[j][i + 2],
        arr[j + 1][i + 1],
        arr[j + 2][i],
        arr[j + 2][i + 1],
        arr[j + 2][i + 2]
      );
      let sum = aHourglass.reduce((a, b) => a + b);
      sums.push(sum);
    }
  }
  return Math.max(...sums);
}

const mat = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
console.log(hourglassSum(mat));
