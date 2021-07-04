function minimumD(X, Y, D) {
  let jumps = 0;
  while (X < Y) {
    jumps++;
    X += D;
  }

  return jumps;
}

// console.log(minimumD(1, 5, 2));
