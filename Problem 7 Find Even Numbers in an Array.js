function findEven(arr) {
  let newArr = [];
  for (const i of arr) {
    if (i % 2 === 0) {
      newArr.push(i);
    }
  }
  return newArr;
}
const a = findEven([1, 2, 3, 4, 5, 6]);
console.log(a);
