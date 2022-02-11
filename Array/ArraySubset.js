/*
Array Subset of another array 

Task is to check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted or unsorted. 
It may be assumed that elements in both array are distinct.
 
Example 1:

Input:
a1[] = {11, 1, 13, 21, 3, 7}
a2[] = {11, 3, 7, 1}
Output:
Yes
*/

function subArray(a1, a2, n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a2[i] === a1[j]) {
        break;
      }
      if (j == m) return false;
    }
    // return true;
  }
  return true;
}

a1 = [11, 1, 13, 21, 3, 7];
a2 = [11, 3, 7, 1, 2, 3];
n = a1.length;
m = a2.length;
a2 = [11, 3, 7, 1];
output = subArray(a1, a2, n, m);
console.log(output);
