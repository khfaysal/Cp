function isPalindrome(str) {
  let x = str.split("").reverse().join("");
  if (x === str) {
    return true;
  } else {
    return false;
  }
}

const test1 = "121";
const result1 = isPalindrome(test1);
console.log(result1); // Output: true
