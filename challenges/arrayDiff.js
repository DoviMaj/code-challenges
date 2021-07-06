function arrayDiff(a, b) {
  // remove all values occurences from a that exist in b
  b.forEach((i) => {
    a = a.filter((j) => j !== i);
  });
  return a;
}
console.log(arrayDiff([3, 3, 4], [3]));
