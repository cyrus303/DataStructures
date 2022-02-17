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


Method 1 : This is a simple solution to the above problem.

    Approach: The idea is to traverse every array element and find the highest bars on the left and right sides. Take the smaller of two heights. The difference between the smaller height and height of the current element is the amount of water that can be stored in this array element.

Algorithm: 
        Traverse the array from start to end.
        For every element, traverse the array from start to that index and find the maximum height (a) and traverse the array from the current index to end, and find the maximum height (b).
        The amount of water that will be stored in this column is min(a,b) - array[i], add this value to the total amount of water stored
        Print the total amount of water stored.
*/

function water(array) {
  TrappedWater = 0;
  // console.log(array.length);
  for (let i = 1; i < array.length - 1; i++) {
    let left = array[i];

    for (let j = 0; j < i; j++) {
      left = Math.max(array[j], left);
    }

    let right = array[i];

    for (let j = i + 1; j < array.length; j++) {
      right = Math.max(array[j], right);
    }

    TrappedWater += Math.min(left, right) - array[i];
  }

  return TrappedWater;
}

input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
TrappedWater = water(input);
console.log(TrappedWater);
