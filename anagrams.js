function anagram(string1, string2) {
  str1Counter = {};
  str2Counter = {};

  if (string1.length !== string2.length) return false;
  for (let letter of string1) {
    str1Counter[letter] = (str1Counter[letter] || 0) + 1;
  }
  for (let letter of string2) {
    str2Counter[letter] = (str2Counter[letter] || 0) + 1;
  }

  var akeys = Object.keys(str1Counter).sort();
  var bkeys = Object.keys(str2Counter).sort();
  if (JSON.stringify(akeys) !== JSON.stringify(bkeys)) {
    return false;
  }

  for (key in str1Counter) {
    if (str1Counter[key] !== str2Counter[key]) return false;
  }
  return true;
}
string1 = "897";
string2 = "798";
// string1 = "iceman";
// string2 = "cinema";
result = anagram(string1, string2);
console.log(result);
