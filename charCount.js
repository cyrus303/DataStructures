function charCount(str) {
  var result = {};

  for (let char of str) {
    char = char.toLowerCase();
    // console.log(char);
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

console.log(charCount("hello"));
console.log(charCount("Hi there"));
