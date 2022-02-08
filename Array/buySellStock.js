function stock(price) {
  i = 0;
  j = 1;
  max = 0;
  len = price.length;
  temp = 0;

  while (j < len) {
    temp = price[j] - price[i];

    if (temp < 0) {
      i++;
      j++;
    } else {
      if (temp > max) {
        max = temp;
      }
      j++;
    }
  }
  return max;
}

// array = [7, 1, 5, 3, 6, 4];
array = [2, 1, 2, 1, 0, 1, 2];

max = stock(array);
console.log(max);
// node buySellStock.js
