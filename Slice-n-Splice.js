//Add arr1 into arr2 at the nth index.

//CONDITIONS:
//All elements from the first array should be added to the second array in their original order.
//The first array should remain the same after the function runs.
//The second array should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let frankenSlice = arr2.slice(0);
  for(var i = arr1.length - 1; i >= 0; i--) {
    frankenSlice.splice(n, 0, arr1[i]);
  }
  console.log(frankenSlice);
  return frankenSlice;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
