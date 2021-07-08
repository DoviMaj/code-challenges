function validPalindrome(str) {
  str = str.toLowerCase();
  let i = str.length - 1;
  for (let j = 0; j < str.length; j++) {
    while (!/[A-Za-z]/.test(str[j])) j++;
    while (!/[A-Za-z]/.test(str[i])) i--;
    if (str[i] !== str[j]) return false;
    i--;
  }
  return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama")); // true
console.log(validPalindrome("race a car")); // false
