function minmax(arr) {
  // take the input
  var min, max;
  min = arr[0]; // assign 2 variables: min and max
  max = arr[0];
  for (item of arr) {
    // run a loop over the array and
    // comapre each element with min and max
    // if ele is < min assign it to min
    // else ele is > max assign in to max
    if (item < min) {
      min = item;
      //   console.log(min);
    } else if (item > max) {
      max = item;
      //   console.log(max);
    }
  }

  console.log(min, max); // return min and max
}
arr = [5, 5];
// arr = [11, 39, 10, 5, 79, 20, 45, 24];
minmax(arr);

// console.log(Math.min(...arr));
