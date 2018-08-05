function repeatStringNumTimes(str, num) {
  var repeat = '';

  if(num < 0) {
    console.log("");
    return str = '';
  } else {
    for(var i = 1; i <= num; i++) {
      repeat += str;
    }
    console.log(repeat);
    return repeat;
  }
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("*", 8);
