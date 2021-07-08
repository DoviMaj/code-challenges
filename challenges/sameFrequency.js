// Given two positive integers, find out if two numbers have the same frequency of digits

function sameFrequency(a, b) {
  let lookup = {};
  for (let char of a.toString()) {
    lookup[char] ? lookup[char]++ : (lookup[char] = 1);
  }
  for (let char of b.toString()) {
    if (!lookup[char]) return false;
    lookup[char]--;
  }
  return false;
}

console.log(sameFrequency(22, 222));
