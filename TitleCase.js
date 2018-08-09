function titleCase(str) {
  let lowerStr = str.toLowerCase(),
      arry = [];
  console.log(lowerStr);

  arry = lowerStr.split(" ");
  for(var i = 0; i < arry.length; i++) {
    arry[i] = arry[i].charAt(0).toUpperCase() + arry[i].substr(1);
  }
  str = arry.join(" ");
  console.log(str);
  return str;
}

titleCase('borderTop');
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
