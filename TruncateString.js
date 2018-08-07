function truncateString(str, num) {
  let trunc = "";

  if(str.length > num) {
    for(var i = 0; i < num; i++) {
      trunc += str.charAt(i);
    }
    trunc += "...";
  } else {
    for(var i = 0; i < num; i++) {
      trunc += str.charAt(i);
    }
  }  
  console.log(trunc);
  return trunc;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);
