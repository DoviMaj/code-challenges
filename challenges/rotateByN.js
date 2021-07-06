function rotateByN(A, B) {
  for (let i = 0; i < B; i++) {
    A.push(A[0]);
    A.shift();
  }
  return A;
}

// console.log(rotateByN([1, 2, 3, 4, 5, 6], 1));
