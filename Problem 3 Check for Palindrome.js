function checkPalindrome(word) {
  let reverseWord = ''
  for (let i = word.length-1;i>=0;i--) {
    reverseWord +=word[i]
  }
  if (reverseWord === word){
    return true
  }
  return false;
}
const a = checkPalindrome("madam");
console.log(a);
const b = checkPalindrome("hello");
console.log(b);
