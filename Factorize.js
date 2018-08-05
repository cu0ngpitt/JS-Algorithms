function factorialize(num) {
  if (num === 0) {
    console.log(1);
    return num = 1;
  }
  for (var i = num; i > 1; i--) {
    num *= (i - 1);
  }
  console.log(num);
  return num;
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
