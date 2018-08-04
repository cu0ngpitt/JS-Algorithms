function confirmEnding(str, target) {
  var str = str.split('').reverse().join('');
  var target = target.split('').reverse().join('');
  console.log(str);
  console.log(target);

  for(var i = 0; i < target.length; i++) {
    if(target.charAt(i) === str.charAt(i)) {
      console.log('true');
    } else {
      console.log('false');
      return false;
    }
  } return true;
}

confirmEnding("Bastian", "tian");
confirmEnding("Congratulation", "on");
