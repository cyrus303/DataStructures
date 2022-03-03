/*
Longest Palindromic Substring | Set 2

Given a string, find the longest substring which is a palindrome. 
For Example: 
 

Input: Given string :"forgeeksskeegfor", 
Output: "geeksskeeg".

Input: Given string :"Geeks", 
Output: "ee".

The algorithm below is very simple and easy to understand. The idea is to Fix a center and expand in both directions for longer palindromes and keep track of the longest palindrome seen so far.

ALGO:

    Maintain a variable ‘ maxLength = 1 ‘ (for storing LPS length) and ‘ start =0 ‘ (for storing starting index of LPS ).
    
    The idea is very simple, we will traverse through the entire string with i=0 to i<(length of string).
        
        while traversing, initialize ‘low‘ and ‘high‘ pointer such that low= i-1 and high= i+1.
        
        keep incrementing ‘high’ until str[high]==str[i] .
        
        similarly keep decrementing ‘low’ until str[low]==str[i].
        
        finally we will keep incrementing ‘high’ and decrementing ‘low’ until str[low]==str[high].
        
        calculate length=high-low-1, if length > maxLength then maxLength = length and start = low+1 .
    
        Print the LPS and return maxLength.
*/

function LPA(str) {
  let maxLength = 1;
  let start = 0;
  let n = str.length;
  for (i = 0; i < n; i++) {
    let low = i - 1;
    let high = i + 1;

    while (high < n && str[high] == str[i]) {
      high++;
    }

    while (low >= 0 && str[low] == str[i]) {
      low--;
    }
    while (low >= 0 && high < n && str[low] == str[high]) {
      low--;
      high++;
    }
    let length = high - low - 1;
    if (maxLength < length) {
      maxLength = length;
      start = low + 1;
    }
  }

  return maxLength;
}

str = "forgeeksskeegfor";
maxLength = LPA(str);
console.log(maxLength);
