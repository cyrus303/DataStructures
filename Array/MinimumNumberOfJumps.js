function minJumps(arr) {
  let len = arr.length;
  let steps = 0;
  let jumpC = 0;
  let i = 0;

  if (len <= 1) return 0;
  if (arr[0] == 0) return -1;

  let maxReach = arr[0];
  let step = arr[0];
  let jump = 1;

  for (i = 1; i < len; i++) {
    if (i == len - 1) return jump;

    maxReach = Math.max(maxReach, i + arr[i]);

    step--;

    if (step == 0) {
      jump++;

      if (i >= maxReach) return -1;

      step = maxReach - i;
    }
  }

  return -1;
}

// arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
// arr = [1, 4, 3, 2, 6, 7];
arr = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1];
// arr = [2, 0, 2, 0, 2, 0];
jumps = minJumps(arr);
console.log(jumps);
