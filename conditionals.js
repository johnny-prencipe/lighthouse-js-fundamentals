const raining = true;
const cold = true;
const temperature = 917;

if (temperature > -40 && temperature < 40) { //make sure temperature is safe
  if (raining) {
    console.log('Don\'t forget your umbrella!');
  }
  if (temperature < 0) { //check if it's scarf weather
    console.log('Make sure you pick out a scarf!');
  } else if (temperature < 15) { //check if it's sweater weather
    console.log('Short sleeves won\'t cut it.');
  } else { //check if it's t-shirt weather
    console.log('Short sleeves are fine.');
  }
console.log('Now you\'re ready to go outside!'); //now we're reday for our adventure
} else {
  console.log('Maybe we should stay inside.'); //nope, too cold
}


const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log('You are eligible to vote.');
} else {
  console.log('You are not eligible to vote.');
}

