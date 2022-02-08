/*
Subarray with 0 sum:

Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.

Example 1:

Input:
5
4 2 -3 1 6

Output: 
Yes

Explanation: 
2, -3, 1 is the subarray 
with sum 0.

Example 2:

Input:
5
4 2 0 1 6

Output: 
Yes

Explanation: 
0 is one of the element 
in the array so there exist a 
subarray with sum 0.
*/

function subArrayExists(array) {
  sum = 0;
  const sumSet = new Set();
  if (array[0] === 0) return true;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (sum === 0 || sumSet.has(sum)) return true;

    sumSet.add(sum);
    console.log(sumSet);
  }
  return false;
}

array = [4, 2, -3, 1, 6];

if (subArrayExists(array)) {
  console.log("Found a subarray with 0 sum");
} else {
  console.log("No Such Sub Array Exists!");
}
