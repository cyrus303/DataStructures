/*
Next Permutation 

Implement the next permutation, which rearranges the list of numbers into Lexicographically 
next greater permutation of list of numbers. If such arrangement is not possible, it must be 
rearranged to the lowest possible order i.e. sorted in an ascending order. You are given an 
list of numbers arr[ ] of size N.

Example 1:

Input: N = 6
arr = {1, 2, 3, 6, 5, 4}
Output: {1, 2, 4, 3, 5, 6}
Explaination: The next permutation of the 
given array is {1, 2, 4, 3, 5, 6}.

*/

function nextPerm(number, n) {
  // Start from the right most digit
  // and find the first digit that is
  // smaller than the digit next to it
  for (var i = n - 1; i >= 0; i--) {
    if (number[i - 1] < number[i]) break;

    // If no such digit found,then all
    // numbers are in descending order,
    // no greater number is possible
    if (i == 1 && number[i] <= number[i - 1]) {
      //   console.log("this is the heighest possible permutation");
      number.sort(function (a, b) {
        return a - b;
      });
      return number;
    }
  }

  // Find the smallest digit on the
  // right side of (i-1)'th digit
  // that is greater than number[i-1]
  let x = number[i - 1];
  let smallest = i;

  for (j = i; j < n; j++) {
    if (number[j] > x && number[j] < number[smallest]) {
      smallest = j;
    }
  }

  // Swapping the above found smallest
  // digit with (i-1)'th
  let temp = number[i - 1];
  number[i - 1] = number[smallest];
  number[smallest] = temp;

  // Sort the digits after i-1 in ascending order
  firstHalf = number.slice(0, i);
  secondHalf = number.slice(i, number.length + 1);
  secondHalf.sort(function (a, b) {
    return a - b;
  });

  nextPermutation = firstHalf;
  for (i = 0; i < secondHalf.length; i++) {
    nextPermutation.push(secondHalf[i]);
  }

  return nextPermutation;
}

// let input = [1, 2, 3, 6, 5, 4];
input = [3, 2, 1];
let n = input.length;
output = nextPerm(input, n);
console.log(output);
