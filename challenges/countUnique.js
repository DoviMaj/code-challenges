function countUnique(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      count++;
    }
  }
  return count;
}

console.log(countUnique([1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 6]));
