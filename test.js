function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for(var i = 0; i <= arr.length; i++) {
    if(arr[i] === undefined || arr[i] === num) {
      arr.splice(i, 0, num);
      console.log(arr + '\n');
      return i;
    } else if(num >= arr[i]) {
        if(num <= arr[i + 1] || arr[i + 1] === undefined) {
          arr.splice(i + 1, 0, num);
          console.log(arr + '\n');
          return (i + 1);
        }
    }
  }
  console.log("\n");
}

getIndexToIns([3, 10, 5], 3);
