function findLongestWordLength(str) {
  var re = /\s/;
  var str = str.split(re);
  var strLength = [];

  for(var i = 0; i < str.length; i++) {
    strLength.push(str[i].length);
  }
  console.log(str);
  console.log(strLength);
  str = Math.max(...strLength);

  console.log(str);
  return str;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
