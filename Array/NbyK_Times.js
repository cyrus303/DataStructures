function NbyK(array, k) {
  count = 1;
  len = array.length;
  array.sort((a, b) => a - b);
  console.log(array);

  var v = [];

  for (let i = 0; i < len; i++) {
    if (array[i] === array[i + 1]) {
      count++;
      if (count > len / k) {
        v.push(array[i]);
      }
    } else {
      count = 1;
    }
  }
  unique = [...new Set(v)];
  return unique;
}

// input = [3, 1, 2, 2, 1, 2, 3, 3];
// k = 4;

// input = [4, 5, 6, 7, 8, 4, 4];
// k = 3;

// input = [4, 2, 2, 7];
// k = 3;

input = [1, 1, 2, 2, 3, 5, 4, 2, 2, 3, 1, 1, 1];
k = 4;
output = NbyK(input, k);
console.log(output);
