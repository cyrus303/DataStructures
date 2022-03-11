/*
Rabin-Karp Algorithm for Pattern Searching

Explanation : https://www.youtube.com/watch?v=qQ8vS2btsxI
https://tylerewillis.com/page/rabin-karp-javascript
*/

function areEqual(string1, string2) {
  if (string1 !== string2) {
    return false;
  }
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }
  return true;
}

function polyHash(text, primeNumber, randomNumber) {
  var hash = 0;
  for (i = 0; i < text.length - 1; i++) {
    hash = (hash * randomNumber + text.charCodeAt(i)) % primeNumber;
  }
  return hash;
}

function rabinKarp(sentence, stringToSearch) {
  var primeNumber = 1019;
  var randomNumber = 34;
  var positions = [];

  pHash = polyHash(stringToSearch, primeNumber, randomNumber);

  var text;
  var tHash;

  for (k = 0; k <= sentence.length - stringToSearch.length; k++) {
    text = sentence.slice(k, k + stringToSearch.length);

    tHash = polyHash(text, primeNumber, randomNumber);

    if (pHash !== tHash) {
      continue;
    }

    if (areEqual(text, stringToSearch)) {
      positions.push(k);
    }
  }
  return positions;
}

var str =
  "magicword Lorem ipsum dolor sit magicword amet, an theophrastus deterruisset est. Luptatum consectetuer ex nam. Mea ei blandit reprimique, has at agam adipiscing. Ea odio habeo honestatis duo. Tibique iudicabit corrumpit sed at. Ei mei ullum ornatus magicword corrumpit, te nec quodsi imperdiet euripidis magicword";
console.log(rabinKarp(str, "magicword")); // [0,32,250,305]
