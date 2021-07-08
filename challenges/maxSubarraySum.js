function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  let tmp = max;
  for (let i = n; i < arr.length; i++) {
    tmp = tmp - arr[i - n] + arr[i];
    max = Math.max(tmp, max);
  }
  return max;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
