function findElement(arr, func) {
  let num = 0;
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    console.log(num);
    if(func(num) === true ) {
      console.log(num + " is the keeper! :D \n");
      return num;
    } else if(i === (arr.length - 1) && func(num) === false) {
      console.log("There was no keeper :( \n");
      return undefined;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
