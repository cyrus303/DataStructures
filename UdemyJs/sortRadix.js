function getDigit(number, i) {
  return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}

function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(numbers) {
  let maxDigits = 0;
  for (let i = 0; i < numbers.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numbers[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);

  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

count = radixSort([23, 567, 123, 4, 8, 9, 12, 3, 345345, 1, 345, 1234, 12345]);
console.log(count);
