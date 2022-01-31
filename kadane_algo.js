/*  Maximum Subarray Sum: Kadane’s Algorithm 
   
    Given an array of integers, the task is to find the maximum subarray sum possible of all the non-empty subarrays.

    Example:

    Input: [-3, -4, 5, -1, 2, -4, 6, -1]
    Output: 8
    Explanation: Subarray [5, -1, 2, -4, 6] is the max sum contiguous subarray with sum 8.

    Input: [-2, 3, -1, 2]
    Output: 4
    Explanation: Subarray [3, -1, 2] is the max sum contiguous subarray with sum 4.

*/

function kadane(input) {
  var maxSum = -1e8;

  for (let i = 0; i < input.length; i++) {
    var currentSum = 0;
    for (let j = i; j < input.length; j++) {
      currentSum = currentSum + input[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

function kadane2(array) {
  var maxSum = -1e8;
  var currSum = 0;

  for (let i = 0; i < array.length; i++) {
    currSum = currSum + array[i];

    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return maxSum;
}

input = [-3, -4, 5, -1, 2, -4, 6, -1];
sum = kadane(input);
console.log(sum);

sum2 = kadane2(input);
console.log(sum2);
