// function permutation(nums) {
//   let result = [];

//   if (nums.length === 0) return [];
//   if (nums.length === 1) return nums;

//   for (let i = 0; i < nums.length; i++) {
//     currNum = nums[i];
//     remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
//     remainingNumsPermuted = permutation(remainingNums);

//     for (let j = 0; j < remainingNumsPermuted.length; j++) {
//       permutedArray = [currNum].concat(remainingNumsPermuted[j]);

//       result.push(permutedArray);
//     }
//   }
//   return result;
// }

// nums = [1, 2, 3];
// result = permutation(nums);
// console.log(result);

function perm(nums) {
  let result = [];

  if (nums.length === 0) return [];
  if (nums.length === 1) return nums;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = perm(remainingNums);

    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      permutedArray = [currentNum].concat(remainingNumsPermuted[j]);

      result.push(permutedArray);
    }
  }

  // remove duplicates but converting it into string and using filter array
  var str = [];
  var filterArray = [];
  var final = [];

  result.forEach((element) => {
    str.push(JSON.stringify(element));
  });

  filterArray = str.filter((val, i) => {
    return str.indexOf(val) === i;
  });

  filterArray.forEach((val) => {
    final.push(JSON.parse(val));
  });

  return final;
}

nums = [1, 2, 1];
result = perm(nums);

console.log(result);
