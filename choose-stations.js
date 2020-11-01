const possibleStations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]; // define test array

let chooseStations = function (stations) {
  let goodStations = []; //define an empty array for my possible voting stations

  for (let i = 0; i < stations.length; i ++){ //iterate over the array passed to my chooseStations() function
    if (stations[i][1] >= 20 && ['school', 'community centre'].includes(stations[i][2])) {
      goodStations.push(stations[i][0]); //if the capacity >= 20 AND the location is a community centre or a school, push the name of the location to the goodStations array
    }
  }
  return goodStations; //return the list of valid stations
};

console.log(chooseStations(possibleStations)); //log the valid stations