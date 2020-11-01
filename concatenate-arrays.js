function concat (firstArray, secondArray) {
  secondArray.forEach((element, index) => {
    firstArray.push(secondArray[index]);
  });
  return firstArray;
}