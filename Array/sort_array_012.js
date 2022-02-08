/*Sort an array of 0s, 1s and 2s
  Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

  Example 1:

    Input: 
    N = 5
    arr[]= {0 2 1 2 0}
    Output:
    0 0 1 2 2
    Explanation:
    0s 1s and 2s are segregated 
    into ascending order.*/

function sort012(arr) {
  // input the array
  // run a loop
  // check for number 0 if present increment the i index value
  // if not search for the index where 0 is present and swap the values
  // do the same for 1 as well
  // return the array
  const array2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      array2.push(0);
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      array2.push(1);
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
      array2.push(2);
    }
  }
  console.log(array2);
}

arr = [1, 0, 2, 0, 0, 2, 1, 1, 2, 1, 2];

sort012(arr);
