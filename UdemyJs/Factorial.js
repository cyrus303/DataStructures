// function factorial(num) {
//   total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

// fact = factorial(5);
// console.log(fact);

function factRe(num) {
  if (num < 0) return 0;
  if (num === 1) return 1;
  return num * factRe(num - 1);
}

factre = factRe(4);
console.log(factre);
