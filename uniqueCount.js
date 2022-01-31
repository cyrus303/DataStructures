/* Find number of unique values in a sorted array */

function unique(input) {
  let len = input.length;
  let i = 0;
  let j = 1;

  while (j < len) {
    if (input[i] === input[j]) {
      j++;
    } else {
      i++;
      input[i] = input[j];
      j++;
    }
  }
  if (i !== 0) {
    console.log("Unique count in the array is: " + (i + 1));
  } else {
    console.log("Unique count in the array is: " + i);
  }
}

input = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
input1 = [-2, -1, -1, 0, 1];
unique(input1);
