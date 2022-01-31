function addupto(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

function addupto2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
console.log(addupto(1000000000));
let t2 = performance.now();

console.log("time taken for loop:" + (t2 - t1) / 1000 + " seconds.");

let t3 = performance.now();
console.log(addupto2(1000000000));
let t4 = performance.now();

console.log("time taken formula:" + (t4 - t3) / 1000 + " seconds.");
