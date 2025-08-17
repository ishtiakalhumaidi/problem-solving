function maximumNumber(arr) {
  let maxNum = arr[0];
  for (const i of arr) {
    if (maxNum < i) {
      maxNum = i;
    }
  }
  return maxNum;
}
const a = maximumNumber([5, 1, 9, 3]);
console.log(a);
