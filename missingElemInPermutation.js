function missingPerm(A) {
  if (A.length === 0) return 1;
  A.sort((a, b) => a - b);
  let j = 1;
  for (let i = 0; i < A.length; i++) {
    console.log(j, A[i]);
    if (j !== A[i]) {
      return j;
    }
    j++;
  }
}

// console.log(missingPerm([1, 3, 4]));
