/*  Concatenation of Array

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

*/

function arrCat(input) {
  newArray = [];
  for (let i = 0; i < input.length; i++) {
    newArray[i] = input[i];
  }
  i = 0;
  for (let j = input.length; j < input.length * 2; j++) {
    newArray[j] = input[i];
    i++;
  }
  return newArray;
}

array = [1, 2, 1];
arrCat(array);
