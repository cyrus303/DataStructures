function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      console.log(min);
    }

    if (i !== min) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

array = [0, 2, 3, 6, 1, 2];
sortedArray = SelectionSort(array);
console.log(sortedArray);
