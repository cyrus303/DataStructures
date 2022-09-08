const Divisible = (num1, num2) => {
  let output = [];
  let count = 0;
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      if (i % 3 === 0) {
        output.push(i);
        count++;
      }
    }
  }
  console.log(output);
  console.log(`count is: ${count}`);
};

const num1 = 0;
const num2 = 10;

Divisible(num1, num2);

const div = 3;
