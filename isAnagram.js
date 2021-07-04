function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  // // 1.
  // // sort each string
  // let first = a.split("").sort()
  // let second = b.split("").sort()
  // // compare
  // return JSON.stringify(first) === JSON.stringify(second)

  // 2. Frequency counter pattern
  // count each char occurency on separate object
  let lookup = {};
  for (let char of a) {
    lookup[char] ? lookup[char]++ : (lookup[char] = 1);
  }
  for (let char of b) {
    if (!lookup[char]) return false;
    lookup[char]--;
  }
  return true;
}
// console.log(isAnagram('kkaassa', 'sskkaaa'));
