function mutation(arr) {
  let search = arr[0].toLowerCase(),
      string = arr[1].toLowerCase();

  for(var i = 0; i < arr[1].length; i++) {
    var char = string.charAt(i),
        boolean = false;

    console.log(char);
    if(search.indexOf(char) < 0) {
      console.log("This string does not contain all letters :(" + "\n");
      return false;
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
