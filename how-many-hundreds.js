const howManyHundreds = function (howMany) { //define my function
  let hundredsCounter = 0; //define my counter
  for (let decrementer = howMany; decrementer >= 100; decrementer -= 100) { //decrement by 100 on each loop until the remainder is < 100
    hundredsCounter++; //for each decrement, add one to the counter
  } 
  return hundredsCounter; //return the counter
}

console.log(howManyHundreds(99));