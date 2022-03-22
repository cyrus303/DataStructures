function ParenthesisChecker(input) {
  var stck = [];
  let reverseCount = -1;
  for (let i = 0; i < input.length; i++) {
    char = stck[stck.length - 1];
    if (input[i] == "{") {
      stck.push(input[i]);
    } else if (char == "{" && input[i] == "}") {
      stck.pop();
    } else {
      stck.push(input[i]);
    }
  }
  // console.log(`before calling count ${stck}`);
  if (stck.length % 2 == 0) {
    reverseCount = count(stck);
  }
  return reverseCount;
}

function count(array) {
  let count = 0;
  let removed = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] == "}" && array[j] == "{") {
        count += 2;
        removed.push(array.splice(i, 1));
        removed.push(array.splice(j, 1));
      } else if (array[i] == "}" && array[j] == "}") {
        count += 1;
        removed.push(array.splice(i, 1));
        removed.push(array.splice(j, 1));
      } else if (array[i] == "{" && array[j] == "{") {
        count += 1;
        removed.push(array.splice(i, 1));
        removed.push(array.splice(j, 1));
      }
    }
  }
  return count;
}

// input = "}{{}}{{{";
input = "}}{{";
// input = "{{}{{{}{{}}{{";
output = ParenthesisChecker(input);
console.log(`reverse count to balance the brackets is: ${output}`);
