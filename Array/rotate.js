/*Cyclically rotate an array by one 
 
Given an array, rotate the array by one position in clock-wise direction.

Example 1:

Input:
N = 5
A[] = {1, 2, 3, 4, 5}
Output:
5 1 2 3 4
*/

/* take in the input array
   put the last element into a temp variable
   run a loop and shift all the elements by one place 
   put the temp variable on the first index

   or

   put the last element into temp
   pop the element 
   add that back using unshift fucntion

*/

// function rotate(array1) {
//   temp = array1.pop();
//   array1.unshift(temp);
//   console.log(array1);
// }

function rotate(array1) {
  len = array1.length;
  var output = new Array();
  temp = array1[len - 1];
  output[0] = temp;
  for (i = 1; i < len; i++) {
    output[i] = array1[i - 1];
  }

  console.log(output);
}

array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
rotate(array1);
