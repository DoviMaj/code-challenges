function rotate(A, K) {
  if (A.length === 1 || K === 0) {
    return A;
  }

  let rotated = [...A];
  for (let i = 0; i < K; i++) {
    const tmp = rotated[A.length - 1];
    rotated.pop();
    rotated.unshift(tmp);
  }
  return rotated;
}

// console.log(
//   JSON.stringify(rotate([3, 8, 9, 7, 6], 3)) === JSON.stringify([9, 7, 6, 3, 8])
// );
