/*
Parenthesis Checker:
Given an expression string x. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
For example, the function should return 'true' for exp = “[()]{}{[()()]()}” and 'false' for exp = “[(])”.

Example 1:

Input:
{([])}
Output: 
true
Explanation: 
{ ( [ ] ) }. Same colored brackets can form 
balaced pairs, with 0 number of 
unbalanced bracket.

Example 2:

Input: 
()
Output: 
true
Explanation: 
(). Same bracket can form balanced pairs, 
and here only 1 type of bracket is 
present and in balanced way.

Example 3:

Input: 
([]
Output: 
false
Explanation: 
([]. Here square bracket is balanced but 
the small bracket is not balanced and 
Hence , the output will be unbalanced.

*/

/*

Algorithm: 

Let’s list the main steps to solve the problem:

    Define a stack which is an array.
    Loop through each element in a given string.
    If the element is an opening bracket (‘(‘ or ‘{‘ or ‘[‘), push it onto the stack.
    If the element is a closing bracket (‘)‘ or ‘}‘ or ‘]‘), pop off the last element from the stack only if matches with the encountered closing bracket and keep iterating through the string. If the closing bracket does not match with the opening bracket placed on top of the stack, break out of the loop and return false because the parentheses in the string are not balanced.
    If the stack is empty after completely iterating over the string, return true because the parentheses in the string are balanced and you have a valid string.

*/

function ParenthesisChecker(input) {
  var stck = [];

  for (let i = 0; i < input.length; i++) {
    char = stck[stck.length - 1];
    if (input[i] == "(" || input[i] == "{" || input[i] == "[") {
      stck.push(input[i]);
    } else if (
      (char == "(" && input[i] == ")") ||
      (char == "{" && input[i] == "}") ||
      (char == "[" && input[i] == "]")
    ) {
      stck.pop();
    } else {
      return false;
    }
  }

  return stck.length ? false : true;
}

input = "[(])";
output = ParenthesisChecker(input);
console.log(output);
