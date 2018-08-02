function factorialize(num) {
  if (num === 0) {
    num = 1;
    console.log(num);
    return num;
  }
  for (var i = num; i > 1; i--) {
    num *= (i - 1);
  }
  return num;
  console.log(num);
}

factorialize(0);
