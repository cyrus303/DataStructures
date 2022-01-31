/*Kth smallest element 

Given an array arr[] and an integer K where K is smaller than size of array, 
the task is to find the Kth smallest element in the given array. 
It is given that all array elements are distinct.


Example 1:
    Input:
    N = 6
    arr[] = 7 10 4 3 20 15
    K = 3
    Output : 7
    Explanation :
    3rd smallest element in the given array is 7.
*/

function kthSmallest(arr, k) {
  // take an array and k value as input
  // sort the give array
  // return the value associated with k-1 element
  arr.sort(function comparenumbers(a, b) {
    return a - b;
  });
  console.log(arr);
  console.log(arr[k - 1]);
}

arr = [7, 10, 4, 3, 20, 15];
k = 3;
kthSmallest(arr, k);
