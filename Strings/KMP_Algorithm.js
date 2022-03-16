function lps(s) {
  var n = s.length;

  // If n is less than 2
  if (n < 2) {
    return 0;
  }

  var len = 0;
  var i = (n + 1) / 2;

  // Iterate i till n
  while (i < n) {
    // If s[i] is equal to
    // s[len]
    if (s[i] == s[len]) {
      ++len;
      ++i;
    } else {
      i = i - len + 1;
      len = 0;
    }
  }

  // Return len
  return len;
}

input = "abcasdasdabca";
output = lps(input);
console.log(output);
