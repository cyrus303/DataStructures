// const duplicates = (str) => {
//   let counter = {};
//   let dup = [];

//   for (let item of str) {
//     counter[item] = (counter[item] || 0) + 1;
//   }

//   Object.keys(counter).forEach((item) => {
//     if (counter[item] > 1) {
//       dup.push(item);
//     }
//   });
//   return dup;
// };

const duplicates = (str) => {
  let dup = [];
  let unique = [];

  str.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    } else {
      dup.push(element);
    }
  });

  console.log('duplicates are: ' + dup);
  console.log('unique are: ' + unique);
};

// str = [1, 2, 3, 4, 5, 1, 2, 5];
str = [1, 1, 2, 2, 3, 'hello', 'hello'];

duplicates(str);
// console.log(duplicates(str));

// console.log(...new Set(str));
