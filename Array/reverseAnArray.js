//Program to reverse an array

function revArray(arr) {
  //take in the input

  let revArr = []; //declare a new variable
  len = arr.length; // find the length of an array
  //   console.log(len);
  for (i = len - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  //   for (let i = 0; i <= len; i++) {// normal loop
  //     revArr[len - i] = arr[i]; // store reverse integer
  //   }

  //   for (let i = len - 1; i > -1; i--) { //run a reverse loop over the input array
  //     revArr[len - 1 - i] = arr[i]; //store the variable into new rev variable
  //   }
  return revArr; //return the the rev variable
}

arr = [1, 2, 3, 4];
console.log(arr);
console.log(revArray(arr));
