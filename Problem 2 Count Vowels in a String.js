function countVowels(word) {
  let count = 0;
  for (const i of word.toLowerCase()) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      count += 1;
    }
  }
  return count;
}
a = countVowels("programming");
console.log(a);
