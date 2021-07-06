// Amount of numbers between A and B that are divisible by K

function prefixSums(A, B, K) {
  let amount = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      amount++;
    }
  }
  return amount;
}

console.log(prefixSums(6, 11, 2));
