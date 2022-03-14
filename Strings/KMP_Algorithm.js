function lps(str) {
  var length = 0;

  mid = str.length / 2;

  for (let i = 0; i <= mid; i++) {
    if (str[i] == str[str.length - i]) {
      length++;
    } else {
      return length;
    }
  }
}

input = "abab";
output = lps(input);
console.log(output);
