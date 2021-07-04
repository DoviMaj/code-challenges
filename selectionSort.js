// selection sort
function selectionSort(inputArr) {
  for (var i = 0; i < inputArr.length; i++) {
    // store first array item
    var tempEle = inputArr[i];
    // find lowest value in array
    for (var j = i + 1; j < inputArr.length; j++) {
      if (tempEle > inputArr[j]) {
        tempEle = inputArr[j];
      }
    }
    // swap lower value with current first
    var index = inputArr.indexOf(tempEle);
    var tempVal = inputArr[i];
    inputArr[i] = tempEle;
    inputArr[index] = tempVal;
  }
}
// var inputArr = [2, 7, 9, 1, 8];
// selectionSort(inputArr);
// console.log('Here is the sorted array: ', inputArr);
