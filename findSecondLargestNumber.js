function findSecondLargestNumber(arr) {
  let largest = 0;
  let second = 0;
  arr.forEach((i) => {
    if (i > largest) {
      second = largest;
      largest = i;
    }
  });
  return second;
}

// console.log(findSecondLargestNumber([22, 1, 324, 0, 1, 10, 121024]));
