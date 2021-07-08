// Check if string a appear inside string b in order
function isSubsequence(a, b) {
  let i = 0;
  for (let j = 0; j <= b.length; j++) {
    if (i === a.length) return true;
    if (a[i] === b[j]) i++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "acb")); // false
