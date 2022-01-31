// function countInversion(arr) {
//   inversionCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         inversionCount++;
//       }
//     }
//   }

//   return inversionCount;
// }

// array = [2, 4, 1, 3, 5];
// array1 = [8, 4, 2, 1];
// count = countInversion(array1);
// console.log(count);

// using merge sort to find inversion

function merge(array1, array2, mid) {
  i = 0;
  j = 0;
  var result = [];
  inversionCount = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      inversionCount += mid - j;
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }
  // console.log(inversionCount);
  return [result, inversionCount];
}

function mergesort(array) {
  count = 0;

  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergesort(array.slice(0, mid));
  let right = mergesort(array.slice(mid));
  value = merge(left, right, mid);
  // console.log(value[0].length);

  return value[0];
}
// console.log(value[1]);

arr1 = [2, 4, 1, 3, 5];

result = mergesort(arr1);
console.log(result);
