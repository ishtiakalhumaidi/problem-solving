function reverse(word) {
  let newWord = '';
  for (let i = word.length-1 ; i >= 0; i--) {
    newWord+=word[i]
  }
return newWord
}
a =reverse('hello')
console.log(a)