// function StrDuplicates(string) {
//   strCount = {};
//   const arr = [];
//   for (let letter of string) {
//     strCount[letter] = (strCount[letter] || 0) + 1;
//   }
//   obj = Object.keys(strCount);
//   for (var x in obj) {
//     if (strCount[obj[x]] > 1) {
//       arr.push(obj[x]);
//     }
//   }
//   console.log(arr);
// }

// input = "abbca";
// output = StrDuplicates(input);
// // console.log(output);

function printDups(str) {
  let count = [];
  count.fill(0);

  for (let i = 0; i < str.length; i++) count[str[i].charCodeAt()]++;

  for (let i = 0; i < 255; i++) {
    if (count[i] > 1) {
      console.log(String.fromCharCode(i) + ", " + "count = " + count[i]);
    }
  }
}
