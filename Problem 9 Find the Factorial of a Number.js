function findFactorial(number) {
  let factorial =1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
const a = findFactorial(5);
console.log(a);
