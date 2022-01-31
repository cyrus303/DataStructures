function avgPair(input, average) {
  // take the input value and initialise i=0 and j = len-1;
  // run a j loop from 1 to len - 1 and check
  // currAvg = (i+j)/2
  // if currAvg === average
  //     equal return input[1],input[j]
  // else if currAvg > avg
  //    j--
  // else
  // i++

  var i = 0;
  var j = input.length - 1;

  while (i < j) {
    var currAvg = (input[i] + input[j]) / 2;
    if (currAvg === average) {
      return true;
    } else if (currAvg > average) {
      j--;
    } else {
      i++;
    }
  }

  if (i >= j) {
    return false;
  }
}

input = [1, 3, 3, 5, 6, 7, 10, 12, 19];
average = 8;

let a = avgPair(input, average);
console.log(a);
