/* 
Longest consecutive subsequence 
Given an array of positive integers. Find the length of the longest sub-sequence 
such that elements in the subsequence are consecutive integers, the consecutive 
numbers can be in any order.

Example 1:

Input:
N = 7
a[] = {2,6,1,9,4,5,3}
Output:
6
Explanation:
The consecutive numbers here
are 1, 2, 3, 4, 5, 6. These 6 
numbers form the longest consecutive
subsquence.

Example 2:

Input:
N = 7
a[] = {1,9,3,10,4,20,2}
Output:
4
Explanation:
1, 2, 3, 4 is the longest
consecutive subsequence.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).
*/

function subsequence(array) {
  count = 0;
  temp = 1;
  array.sort((a, b) => a - b);
  console.log(array);

  var v = [];
  v.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    if (array[i] != array[i - 1]) {
      v.push(array[i]);
    }
  }

  for (let i = 0; i < v.length; i++) {
    first = v[i];
    second = v[i + 1];
    if (second - first === 1) {
      temp++;
    } else {
      temp = 1;
    }
    count = Math.max(temp, count);
  }

  return count;
}

input = [6, 6, 2, 3, 1, 4, 1, 5, 6, 2, 8, 7, 4, 2, 1, 3, 4, 5, 9, 6];
// input = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42];
// input = [2, 6, 1, 9, 4, 5, 3];
// input = [1, 9, 3, 10, 4, 20, 2];
output = subsequence(input);
console.log(output);
