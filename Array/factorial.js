function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

number = factorial(10);
console.log(number);
