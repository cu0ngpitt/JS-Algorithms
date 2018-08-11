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

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);
