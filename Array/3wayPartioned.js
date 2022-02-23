/*

Three way partitioning 

Given an array of size n and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts.
1) All elements smaller than a come first.
2) All elements in range a to b come next.
3) All elements greater than b appear in the end.
The individual elements of three sets can appear in any order. You are required to return the modified array.

Example 1:

Input: 
n = 5
A[] = {1, 2, 3, 3, 4}
[a, b] = [1, 2]
Output: 1
Explanation: One possible arrangement is:
{1, 2, 3, 3, 4}. If you return a valid
arrangement, output will be 1.


Example 2:

Input: 
n = 3 
A[] = {1, 2, 3}
[a, b] = [1, 3]
Output: 1
Explanation: One possible arrangement 
is: {1, 2, 3}. If you return a valid
arrangement, output will be 1.

*/

// function partationed(array, a, b) {
//   let start = 0;
//   let end = array.length - 1;
//   lowValue = a;
//   highValue = b;

//   for (i = 0; i < array.length; ) {
//     if (array[i] <= end) {
//       temp = array[start];
//       array[start] = array[i];
//       array[i] = temp;
//       start++;
//       i++;
//     } else if (array[i] > highValue) {
//       temp = array[end];
//       array[end] = array[i];
//       array[i] = temp;
//       end--;
//     } else {
//       i++;
//     }
//   }

//   console.log(array);
// }

// array = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32];
// partationed(array, 10, 20);
// // console.log(array);

// JavaScript program to implement three
// way partitioning around a given range.

// Partitions arr[0..n-1] around [lowVal..highVal]
function threeWayPartition(arr, n, lowVal, highVal) {
  // Initialize ext available positions for
  // smaller (than range) and greater elements
  let start = 0,
    end = n - 1;

  // Traverse elements from left
  for (let i = 0; i <= end; ) {
    // If current element is smaller than
    // range, put it on next available smaller
    // position.
    if (arr[i] < lowVal) {
      let temp = arr[start];
      arr[start] = arr[i];
      arr[i] = temp;
      start++;
      i++;
    }

    // If current element is greater than
    // range, put it on next available greater
    // position.
    else if (arr[i] > highVal) {
      let temp = arr[end];
      arr[end] = arr[i];
      arr[i] = temp;
      end--;
    } else i++;
  }
}

// Driver code
let arr = [10, 14, 5, 20, 4, 2, 54, 7, 8, 9];
let n = arr.length;

threeWayPartition(arr, n, 5, 10);

console.log(arr);

// This code is contributed by Surbhi Tyagi.
