function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
      }
    }
  }
  return array;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

array = [10, 4, 2, 6, 3, 4, 8, 3];
sorted = bubbleSort(array);
console.log(sorted);
