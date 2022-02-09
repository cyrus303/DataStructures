function areRotations(str1, str2) {
  // There lengths must be same and str2 must be
  // a substring of str1 concatenated with str1.
  return str1.length == str2.length && (str1 + str1).indexOf(str2) != -1;
}

// Driver method

var str1 = "AACD";
var str2 = "ACDA";

if (areRotations(str1, str2))
  console.log("Strings are rotations of each other");
else console.log("Strings are not rotations of each other");
