function range(start, end, step) {
  const returnArr = [];
  //ensure start, end and step are defined, ensure start is greater than end, and ensure step is greater than zero
  if (start === null || end === null || step === null || start > end || step <= 0) {
    return returnArr;
  } else {
    for (let i = start; i <= end; i += step) {
      returnArr.push(i);
    }
    return returnArr;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));