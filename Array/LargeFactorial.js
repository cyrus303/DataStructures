/*
Factorials of large numbers (Given an integer N, find its factorial)

Example 1:

Input: N = 5
Output: 120
Explanation : 5! = 1*2*3*4*5 = 120

Example 2:

Input: N = 10
Output: 3628800
Explanation :
10! = 1*2*3*4*5*6*7*8*9*10 = 3628800


Expected Time Complexity : O(N2)
Expected Auxilliary Space : O(1)

How to compute factorial of 100 using a C/C++ program? 
Factorial of 100 has 158 digits. It is not possible to store these many digits even if we use long long int. 
*/

/*
The following is a detailed algorithm for finding factorial.
factorial(n) 
1) Create an array ‘res[]’ of MAX size where MAX is number of maximum digits in output. 
2) Initialize value stored in ‘res[]’ as 1 and initialize ‘res_size’ (size of ‘res[]’) as 1. 
3) Do following for all numbers from x = 2 to n. 
……a) Multiply x with res[] and update res[] and res_size to store the multiplication result.

How to multiply a number ‘x’ with the number stored in res[]? 
The idea is to use simple school mathematics. We one by one multiply x with every digit of res[]. The important point to note here is digits are multiplied from rightmost digit to leftmost digit. If we store digits in same order in res[], then it becomes difficult to update res[] without extra space. That is why res[] is maintained in reverse way, i.e., digits from right to left are stored.

multiply(res[], x) 
1) Initialize carry as 0. 
2) Do following for i = 0 to res_size – 1 
….a) Find value of res[i] * x + carry. Let this value be prod. 
….b) Update res[i] by storing last digit of prod in it. 
….c) Update carry by storing remaining digits in carry. 
3) Put all digits of carry in res[] and increase res_size by number of digits in carry.

*/

/*
Example to show working of multiply(res[], x)
A number 5189 is stored in res[] as following.
res[] = {9, 8, 1, 5}
x = 10

Initialize carry = 0;

i = 0, prod = res[0]*x + carry = 9*10 + 0 = 90.
res[0] = 0, carry = 9

i = 1, prod = res[1]*x + carry = 8*10 + 9 = 89
res[1] = 9, carry = 8

i = 2, prod = res[2]*x + carry = 1*10 + 8 = 18
res[2] = 8, carry = 1

i = 3, prod = res[3]*x + carry = 5*10 + 1 = 51
res[3] = 1, carry = 5

res[4] = carry = 5

res[] = {0, 9, 8, 1, 5} 
*/

function factorial(n) {
  let res = new Array(500);

  //initialize the result
  res[0] = 1;
  let res_size = 1;

  for (let x = 2; x <= n; x++) {
    res_size = multiply(x, res, res_size);
  }

  console.log("Factorial of given number is ");
  for (let i = res_size - 1; i >= 0; i--) {
    // console.log(res[i]);
    process.stdout.write(`${res[i]}`);
  }
}

function multiply(x, res, res_size) {
  let carry = 0;

  for (i = 0; i < res_size; i++) {
    let product = res[i] * x + carry;
    res[i] = product % 10;
    carry = Math.floor(product / 10);
  }

  while (carry) {
    res[res_size] = carry % 10;
    carry = Math.floor(carry / 10);
    res_size++;
  }
  return res_size;
}

factorial(100);
