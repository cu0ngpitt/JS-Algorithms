//Let n be any positive integar. The code will print a triangle up to the n-th line.
//Counting will start with 1 and continue counting up until the n-th line is printed.

let n = 5;

function print(n) {
  var rows = n,
      count = 1,
      print = "";
  for(var i = 1; i <= rows; i++) {
    for(var j = 1; j <= i; j++) {
      print += count + " ";
      count++;
    }
    console.log(print);
    print = "";
  }
  return;
};

print(n);
