function editDist(strS, strT) {
  count = 0;
  i = 0;
  j = 0;
  strS = strS.toString();
  while (j < strT.length) {
    if (strS[i] == strT[j]) {
      i++;
      j++;
    } else {
      console.log("before inserting " + strS);
      //   console.log(typeof strS);
      strS = strS.split("");
      strS.splice(i, 0, strT[j]);
      strS.join();
      count++;
      i++;
      j++;
      console.log("after inserting " + strS);
    }
  }

  return count;
}

strS = "geek";
strT = "besek";
count = editDist(strS, strT);
console.log("count is " + count);
