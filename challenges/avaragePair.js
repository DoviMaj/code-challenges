// Given a sorted list of integers and a target avarage, determine if there is
// a pair of values in the array where the avarage of the pair equals the target avarage
function avaragePair(arr, target) {
  let i = 0;
  let j = i + 1;
  while (i < arr.length) {
    if (j === arr.length) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
    if (arr[i] + arr[j] / 2 === target) return true;
  }
  return false;
}
console.log(avaragePair([1, 2, 3, 4, 5, 6, 7], 2.5)); // true
console.log(avaragePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
