function Palindrome(string) {
  pointer1 = 0;
  pointer2 = string.length - 1;
  mid = Math.floor(string.length / 2);

  while (pointer1 < pointer2) {
    if (string[pointer1] != string[pointer2]) {
      console.log("not a palindrome");
      return 0;
    }
    pointer1++;
    pointer2--;
  }
  console.log("Palindrome");
  return 1;
}

input = "abbaa";
output = Palindrome(input);
console.log(output);
