// Input: nums = [1,3,5,6], target = 5
// Output: 2

searchInsert = function (nums, target) {
  let min = -Infinity;
  let pos = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    } else {
      let temp = nums[i] - target;
      console.log(temp);
      if (temp < min) {
        min = temp;
        pos = i;
        console.log("min value is: " + min);
      }
    }
  }
  return pos;
};

// nums = [1, 3, 5, 6];
// target = 5;

// nums = [1, 3, 5, 6];
// target = 2;

nums = [1, 3, 5, 6];
target = 7;

number = searchInsert(nums, target);
// console.log(number);
