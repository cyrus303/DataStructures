/* 
Valid String Shuffle
Program to check if a string is the valid shuffle of two other strings.

Input & Output:

1XY2 is a valid shuffle of XY and 12
Y1X2 is a valid shuffle of XY and 12     
Y21XX is not a valid shuffle of XY and 12
*/

function checkShuffle(input1, input2, shuffle) {
  result = input1 + input2;

  if (result.length != shuffle.length) return false;
  /*
    STEPS

    Convert string to array
    Sort array

  */

  result = result.split("").sort();
  shuffle = shuffle.split("").sort();

  for (let i = 0; i < result.length; i++) {
    if (shuffle[i] !== result[i]) {
      return false;
    }
  }
  return true;
}

input1 = "xy";
input2 = "12";
shuffle = "x12y";
output = checkShuffle(input1, input2, shuffle);

if (output) {
  console.log("string is a valid shuffle");
} else {
  console.log("string is not a valid shuffle");
}
