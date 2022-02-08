// Remove Duplicates from Sorted Array
/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

logic:

take in the sorted array
run a forloop 
    run 2 pointers
        if i = j -> j ++
        if i != j; increment i and copy array[j] into array[i]


*/
// function removeDuplicates(arr) {
//   let i = 0;
//   let j = 0;

//   while (j < arr.length) {
//     if (arr[i] != arr[j]) {
//       i++;
//       console.log(arr[i], i, arr[j], j);
//       arr[j] = arr[i];
//       j++;
//     } else if (arr[i] == arr[j]) {
//       j++;
//       //   console.log(arr[i], arr[j]);
//     }
//   }
//   console.log(arr);
// }

function removeDuplicates(nums) {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] == nums[j]) {
      nums.splice(j, 1);
    } else {
      i = j;
      j++;
    }
  }
}

array1 = [
  1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8,
];
removeDuplicates(array1);
