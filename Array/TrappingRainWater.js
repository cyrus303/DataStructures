/*
Trapping Rain Water

Given an array arr[] of N non-negative integers representing the height of blocks. 
If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

Example 1:

Input:

N = 4

arr[] = {7,4,0,9}

Output:
10

Explanation: 
Water trapped by above 
block of height 4 is 3 units and above 
block of height 0 is 7 units. So, the 
total unit of water trapped is 10 units.
*/

function water(array) {
  TrappedWater = 0;
  minHeight = Math.min(array[0], array[array.length - 1]);
  //   console.log(array.length);
  for (let i = 1; i < array.length - 1; i++) {
    // console.log(array[i]);
    if (array[i] < minHeight) {
      TrappedWater += minHeight - array[i];
    }
  }

  return TrappedWater;
}

input = [3, 0, 3, 2, 0, 4];
TrappedWater = water(input);
console.log(TrappedWater);
