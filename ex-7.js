function isPalindrome(string) {
  // Start coding here
  // ** เพื่อความชัวร์ ให้ใส่ string.trim()
  if (string === string.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}


// ---- วิธี For loop ----
// function isPalindrome(string) {
//   // Start coding here
//   let reversedString = "";
//   for (let letter of string) {
//     reversedString = letter + reversedString;
//   }
//   if (string === reversedString) {
//     return true;
//   } else {
//     return false;
//   }
// }

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
