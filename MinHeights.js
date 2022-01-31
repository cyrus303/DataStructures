/* 
Minimize the Heights II 

Given an array arr[] denoting heights of N towers and a positive integer K, 
you have to modify the height of each tower either by increasing or decreasing 
them by K only once. After modifying, height should be a non-negative integer. 
Find out what could be the possible minimum difference of the height of shortest 
and longest towers after you have modified each tower.

Example 1:

Input:
K = 2, N = 4
Arr[] = {1, 5, 8, 10}
Output:
5
Explanation:
The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.

*/

function getMinDiff(input, K, N) {
  let sum = 0;
  let avg = 0;
  for (i = 0; i < N; i++) {
    sum = sum + input[i];
  }
  avg = sum / N;
  //   console.log(avg, sum, N);
  console.log("Array before modification: " + input);
  for (i = 0; i < N; i++) {
    if (input[i] <= avg) {
      input[i] = input[i] + K;
    } else if (input[i] - K < 0) {
      input[i] = input[i] + K;
    } else {
      input[i] = input[i] - K;
    }
  }
  console.log("Array after modification: " + input);

  let max = input[0];
  let min = input[0];

  for (i = 1; i < N; i++) {
    if (input[i] < min) {
      min = input[i];
    } else if (input[i] > max) {
      max = input[i];
    }
  }
  console.log("min value: " + min + ", max value : " + max);

  return max - min;
}

K = 4;
N = 10;
// Arr = [3, 9, 12, 16, 20];
// Arr = [1, 5, 8, 10];
// Arr = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1];
// Arr = [1, 5, 15, 10];
// Arr = [4, 6];
Arr = [6, 1, 9, 1, 1, 7, 9, 5, 2, 10];

diff = getMinDiff(Arr, K, N);
console.log("difference between min and max tower heights are: " + diff);
