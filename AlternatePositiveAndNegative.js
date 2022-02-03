/*
Rearrange array in alternating positive & negative items with O(1) extra space

Given an array of positive and negative numbers, arrange them in an alternate
fashion such that every positive number is followed by negative and vice-versa
maintaining the order of appearance. 

Number of positive and negative numbers need not be equal. If there are more 
positive numbers they appear at the end of the array. If there are more negative 
numbers, they too appear in the end of the array.

Examples : 

Input:  arr[] = {1, 2, 3, -4, -1, 4}
Output: arr[] = {-4, 1, -1, 2, 3, 4}

Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

*/

function rearrange(arr, n) {
  let i = 0,
    j = n - 1;

  // Shift all negative values to the end
  while (i < j) {
    while (i <= n - 1 && arr[i] > 0) i += 1;
    while (j >= 0 && arr[j] < 0) j -= 1;

    if (i < j) swap(arr, i, j);
  }

  if (i == 0 || i == n) return;

  let k = 0;
  while (k < n && i < n) {
    swap(arr, k, i);
    i = i + 1;
    k = k + 2;
  }
}

function swap(arr, index1, index2) {
  let c = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = c;
}

arr = [1, 5, 7, -1, 5];
count = rearrange(arr, 5);
console.log(count);
