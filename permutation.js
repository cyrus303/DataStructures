/*
Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

function perm(nums) {
  let result = [];

  if (nums.length === 0) return [];
  if (nums.length === 1) return nums;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = perm(remainingNums);

    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      permutedArray = [currentNum].concat(remainingNumsPermuted[j]);

      result.push(permutedArray);
    }
  }

  return result;
}

nums = [1, 2, 3];
result = perm(nums);
console.log(result);
