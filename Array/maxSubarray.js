function maxSub(input, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (input.length < num) return null;

  for (i = 0; i < num; i++) {
    maxSum += input[i];
  }
  //   console.log(maxSum);
  tempSum = maxSum;

  for (i = num; i < input.length; i++) {
    tempSum = tempSum + input[i] - input[i - num];
    // console.log("tempsum " + tempSum);
    // console.log("maxsum " + maxSum);
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

// input = [100, 200, 300, 400];
// input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
input = [-3, 4, 0, -2, 6, -1];
num = 2;

maxSum = maxSub(input, num);
console.log("returned value: " + maxSum);
