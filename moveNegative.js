/* Move all negative numbers to beginning and positive to end with constant extra space

An array contains both positive and negative numbers in random order. Rearrange the array
elements so that all negative numbers appear before all positive numbers.

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5
*/
/*create a new array declaration
  run a for loop and check for the sign of the element 

     // console.log(Math.sign(arr[each])); // 1 +ve, -1 -ve
  if its +ve add the element to the end of the array
  if its -ve add it to starting of the array
  return the new array

*/
function move(arr) {
  new_array = [];
  len = arr.length;
  var nevcount = -1;
  var poscount = 0;
  for (i = 0; i < len; i++) {
    if (arr[i] < 0) {
      nevcount++;
      new_array[nevcount] = arr[i];
    } else {
      poscount++;
      temp = len - poscount;
      new_array[temp] = arr[i];
    }
  }
  return new_array;
}

function printArray(output, n) {
  for (let i = 0; i < n; i++) {
    console.log(output[i] + " ");
  }
}

arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

var output = move(arr);
var n = output.length;

printArray(output, n);
