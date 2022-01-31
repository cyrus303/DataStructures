/* Union of two arrays

Given two arrays a[] and b[] of size n and m respectively. 
The task is to find union between these two arrays.

Union of the two arrays can be defined as the set containing 
distinct elements from both the arrays. If there are repetitions, 
then only one occurrence of element should be printed in the union.

Example 1:

Input:
1 2 3 4 5
1 2 3
Output: 
5
Explanation: 
1, 2, 3, 4 and 5 are the
elements which comes in the union set
of both arrays. So count is 5.

*/

/* take in the input of two arrays
   run 2 for loops for each array and place the results in the output array
   check if the elemnt is present if present skip the loop else add the element to output array

*/

function unionarray(array1, array2) {
  var output = new Array();
  var input = array1.concat(array2);

  lable: for (i = 0; i < input.length; i++) {
    for (j = 0; j < output.length; j++) {
      if (output[j] == input[i]) {
        console.log("duplicate");
        continue lable;
      }
    }
    output.push(input[i]);
  }
  console.log(output);
}

array1 = [1, 2, 3, 4, 5, 6];
array2 = [1, 2, 3, 7];
unionarray(array1, array2);

function intersection(array1, array2) {
  var output = new Array();
  var input = array1.concat(array2);

  lable: for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array2[j] == array1[i]) {
        console.log("duplicate");
        output.push(array1[i]);
      }
    }
  }
  console.log(output);
}

array1 = [1, 2, 3];
array2 = [1, 2, 3, 7];
intersection(array1, array2);
