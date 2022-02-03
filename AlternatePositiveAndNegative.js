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

function arrange(array) {
  var array2 = [];
  i = 0;
  while (i < array.length) {
    console.log(i);
    if (i % 2 === 0) {
      if (array[i] > 0) {
        array2.push(array[i]);
      } else {
        j = i + 1;
      }
    }
    i++;
  }
  return array2;
}

arr = [1, 2, -3, -4, -1, 4];
arrangedArray = arrange(arr);
console.log(arrangedArray);
