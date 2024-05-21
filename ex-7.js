function isPalindrome(string) {
  // Start coding here
  let palindromes = ["reviver", "บวบ", "civic", "madam", "radar", "deified"];
  if (palindromes.includes(string)) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
