function LinearSearch(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      return i;
    }
  }
  return -1;
}

input = [1, 2, 3, 4, 5, 6, 4, 5, 6, 67, 8, 10];
value = 9;
output = LinearSearch(input, value);
console.log(output);
