function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
const a = removeDuplicates([1, 2, 2, 3, 4, 4]);
console.log(a);
