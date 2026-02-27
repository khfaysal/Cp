function isPalindrome(str) {
  const original = str;
  let rev = 0;
  while (str > 0) {
    const lastDigit = str % 10;
    rev = rev * 10 + lastDigit;
    str = Math.floor(str / 10);
  }
  return rev === original;
}

const result = isPalindrome(303);
console.log(result);
