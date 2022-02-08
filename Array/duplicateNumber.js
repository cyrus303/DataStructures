function duplicateNumber(input) {
  let counter = {};
  for (i = 0; i < input.length; i++) {
    let num = input[i];
    if (counter[num]) {
      counter[num] += 1;
    } else {
      counter[num] = 1;
    }
  }
  //   console.log(counter);
  for (const key in counter) {
    if (counter[key] > 1) {
      console.log(
        "number is " +
          key +
          " and the value is repeted " +
          counter[key] +
          " times."
      );
    }
  }
}

// Leet code termial paste
// var findDuplicate = function(nums) {
//     let counter = {};
//     for (let i = 0; i < nums.length; i++) {
//         let number = nums[i];
//         if (counter[number]) {
//             counter[number] += 1;
//         }else {
//           counter[number] = 1;
//         }
//     }
//   //   console.log(counter);
//   for (const key in counter) {
//     if (counter[key] > 1) {
//         return key;
//     }
//   }
// };
// -------------------------------------------------------leet code
nums = [1, 2, 3, 11, 20, 22, 25, 1];
number = duplicateNumber(nums);
console.log(number);

// function duplicateNumber(nums) {
//   let counter = {};
//   for (let i = 0; i < nums.length; i++) {
//     let number = nums[i];
//     if (counter[number]) {
//       counter[number] += 1;
//     } else {
//       counter[number] = 1;
//     }
//   }
//   //   console.log(counter);

//   const keys = Object.keys(counter);
//   //   console.log(keys);
//   let flag = 0;
//   keys.forEach((key) => {
//     if (counter[key] > 1) {
//       flag = 1;
//     }
//   });

//   if (flag) {
//     return true;
//   } else {
//     return false;
//   }
// }
