function bouncer(arr) {
  let answer = [];
  for(var i = 0; i < arr.length; i++) {
    if(Boolean(arr[i]) === true) {
      answer.push(arr[i]);
    }
  }
  console.log(answer);
  return answer;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);
