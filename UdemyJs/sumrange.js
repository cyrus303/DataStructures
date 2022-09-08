function sumrange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumrange(num - 1);
}

result = sumrange(4);
console.log(result);
