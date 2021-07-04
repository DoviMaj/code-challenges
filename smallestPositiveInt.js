function smallestPositiveInt(A) {
  let smallest = 0;
  A.sort();
  for (let i = A.length; i > 0; i--) {
    if (!A.includes(i)) {
      smallest = i;
    }
  }
  return smallest;
}

// console.log(smallestPositiveInt([3, 3, 1, 4]));
