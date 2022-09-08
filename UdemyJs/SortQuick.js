function swap(array, index1, index2) {
  temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function findPivot(arr, start = 0, end = array.length) {
  var swapIdx = start;
  var pivot = arr[start];
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = findPivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

array = [4, 8, 2, 1, 5, 7, 6, 3];
index = quickSort(array);
console.log(index);
