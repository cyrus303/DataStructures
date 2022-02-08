/* 
Lexicographical Numbers: Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

Example 1:

Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

*/

// function lexico(n) {
//   var numbers = [];
//   for (let i = 1; i <= n; i++) {
//     numbers.push(i);
//   }
//   numbers.sort();
//   return numbers;
// }

// n = 15;
// lexico(n);

//without sorting

var lexicalOrder = function (n) {
  function pushFromTo(start, end) {
    while (start <= end && start <= n) {
      result.push(start);

      /* The nesting occurs, new iterations are attempted within this
            step utilizing the observed pattern*/
      pushFromTo(start * 10, start * 10 + 9);

      start++;
    }
  }

  var result = [];

  /* start the recursion */
  pushFromTo(1, 9);

  return result;
};

result = lexicalOrder(20);
console.log(result);
