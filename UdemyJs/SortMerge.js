// function merge(arr1, arr2) {
//   var result = [];
//   i = 0;
//   j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   return result;
// }

arr1 = [1, 10, 50];
arr2 = [2, 14, 99, 100];

mid = Math.floor(arr1.length / 2);
console.log(Math.floor(arr1.length / 2));
console.log(arr1.slice(0, mid));
// Final = merge(arr1, arr2);

// console.log(Final);
