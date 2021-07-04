/* Same squared :
- The function should return true if every value in the first array has its corresponding value squared in the second array
- The frequency of the values must be the same
*/
function sameSaquared(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let lookup = {};
  for (let num of b) {
    let sqr = Math.sqrt(num);
    lookup[sqr] ? lookup[sqr]++ : (lookup[sqr] = 1);
  }
  for (let num of a) {
    if (!lookup[num]) return false;
  }
  return true;
}

// console.log(sameSaquared([3, 3, 3], [9, 9, 9]));
