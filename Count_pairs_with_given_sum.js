/*
Count pairs with given sum

Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

Example 1:

Input:
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.

Example 2:

Input:
N = 4, X = 2
arr[] = {1, 1, 1, 1}
Output: 6
Explanation: 
Each 1 will produce sum 2 with any 1. */

function getPairsCount(arr, n, k) {
  //   count = 0;
  //   i = 0;
  //   j = 1;
  //   while (i < n) {
  //     if (arr[i] + arr[j] == k) {
  //       count++;
  //     }
  //     console.log(i, j);
  //     j++;

  //     if (j === arr.length) {
  //       j = i + 1;
  //       i++;
  //     }
  //   }
  let count = 0; // Initialize result

  // Consider all possible pairs and check their sums
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == k) count++;
    }

    return count;

    //   return count;
  }
}

n = 4;
k = 2;
arr = [1, 5, 7, -1, 5];
count = getPairsCount(arr, n, k);
console.log(count);
