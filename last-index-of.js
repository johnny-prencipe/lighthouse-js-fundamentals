function lastIndexOf (array, item) {
  //set lastOccurrence to -1 so that will be returned if the item isn't found in the array
  let lastOccurrence = -1;
  array.forEach(function (element, index) {
    /*
    forEach loop on the array, 
    every time the current element matches the item specified in the parameters, 
    update the lastOccurrence variable to reflect the new index position. 
    will not run if the specified item does not occur in the array.
    */
    if (element === item) {
      lastOccurrence = index;
    }
  });
  //return the last occurrence. will return -1 if there was no occurrence.
  return lastOccurrence;
}
//debug to make sure it works
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);