// Sum zero - return first pair that sum to zero from sorted array

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[left] > 0) return undefined;
  while (right > left) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

console.log(sumZero([-1, 1, 2, 4]));
console.log(sumZero([-3, 0, 1, 2, 3, 4]));
