function StrDuplicates(string) {
  strCount = {};
  const arr = [];
  for (let letter of string) {
    strCount[letter] = (strCount[letter] || 0) + 1;
  }
  obj = Object.keys(strCount);
  for (var x in obj) {
    if (strCount[obj[x]] > 1) {
      arr.push(obj[x]);
    }
  }
  console.log(arr);
}

input = "abbca";
output = StrDuplicates(input);
// console.log(output);
