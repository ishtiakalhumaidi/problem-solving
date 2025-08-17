
function sumAll(arr) {
  let total = 0;
  for (const i of arr) {
    total+=i
  }
  return total;
}
const a = sumAll([1, 2, 3, 4]);
console.log(a);
