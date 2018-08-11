function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  for(var i = 0; i < arr[1].length; i++) {
    var char = arr[1].charAt(i),
        boolean = false;

    console.log(char);

    for(var j = 0; j < arr[0].length; j++) {
      if(char === arr[0].charAt(j)) {
        console.log(true);
        j = arr[0].length - 1;
      } else if(j != arr[0].length - 1) {
        console.log(false);
      } else {
        console.log("This string does not contain all letters :(" + "\n");
        return false;
      }
    }
  }
  console.log("This string contains all letters :)" + "\n");
  return true;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);
