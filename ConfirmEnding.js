function confirmEnding(str, target) {
  console.log("Original string  : " + str);
  console.log("Does it end with : " + target);

  var str = str.split('').reverse().join('');
  var target = target.split('').reverse().join('');
  
  for(var i = 0; i < target.length; i++) {
    if(target.charAt(i) === str.charAt(i)) {
    } else {
      console.log(false + '\n');
      return false;
    }
  } console.log(true + '\n')
    return true;
}

confirmEnding("Bastian", "tian");
confirmEnding("Congratulation", "on");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("Open sesame", "pen");
