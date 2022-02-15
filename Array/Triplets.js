/*
Triplet Sum in Array:

Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X. 

Example 1:

Input:
n = 6, X = 13
arr[] = [1 4 45 6 10 8]
Output:
1
Explanation:
The triplet {1, 4, 8} in 
the array sums up to 13.
*/
//brute force approach
"use strict";
/*function find3Numbers(A, n, X) {
  let count = 0;

  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        let sum1 = A[i] + A[j];
        let sum2 = X - A[k];

        if (sum1 === sum2) {
          count++;
        }
      }
    }
  }

  return count;
}*/

function find3Numbers(A, arr_size, sum) {
  let l, r;

  A.sort((a, b) => a - b);

  for (let i = 0; i < arr_size - 2; i++) {
    l = i + 1;

    r = arr_size - 1;
    while (l < r) {
      if (A[i] + A[l] + A[r] == sum) {
        return true;
      } else if (A[i] + A[l] + A[r] < sum) l++;
      else r--;
    }
  }

  return false;
}

const input = [1, 4, 45, 6, 10, 8];
let n = 6;
let X = 13;
let output;
output = find3Numbers(input, n, X);
console.log(output);
