/* 
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

function RevStr(string) {
  i = 0;
  end = string.length - 1;
  mid = Math.floor(string.length / 2);

  while (i < mid) {
    temp = string[i];
    string[i] = string[end - i];
    string[end - i] = temp;

    i++;
  }

  return string;
}

input = ["H", "a", "n", "n", "a", "h"];
output = RevStr(input);
console.log(output);
