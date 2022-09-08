/*Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of  Math.pow()*/

//inputs --> outputs
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, exp) {
  function helper(num, exp) {
    if (exp === 0) {
      return 1;
    } else {
      return num * helper(num, exp - 1);
    }
  }
  let result = helper(num, exp);

  return result;
}

num = 10;
exp = 5;
res = power(num, exp);
console.log(res);
