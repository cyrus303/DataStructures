// arr1 = [1, 3, 5, 7];
// arr2 = [0, 2, 3, 6, 8, 9];
// m = 4;
// n = 5;

arr1 = [1, 2, 3, 0, 0, 0];
m = 3;
arr2 = [2, 5, 6];
n = 3;

// arr1 = [7, 9, 9, 10, 11, 11, 13, 14, 17, 19];
// arr2 = [1, 4, 5, 8, 11, 13, 16, 19, 19];
// m = 10;
// n = 10;

merge(arr1, arr2, m, n);

function merge(input1, input2, m, n) {
  let i = 0;
  let j = 0;

  while (j < input2.length) {
    if (input1[i] < input2[j]) {
      i++;
    } else {
      var start = i;
      let deleteCount = 0;
      input1.splice(start, deleteCount, input2[j]);
      i++;
      j++;
    }
  }
  console.log(input1);
}
