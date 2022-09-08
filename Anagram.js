const anagram = (first, second) => {
  if (first.length != second.length) return false;

  let counter = {};

  for (let letter of first) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  //   console.log(counter);

  for (let letter of second) {
    // console.log(letter);
    if (counter[letter]) {
      counter[letter] -= 1;
    } else {
      return false;
    }
  }
  console.log(counter);
  return true;
};

first = 'secure';
second = 'rescue';

console.log(anagram(first, second));
