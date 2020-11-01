const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  //define my set of tester moves

const finalPosition = function (grid) {
  let x = 0; //define my x position
  let y = 0; //define my y position

  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === 'north') {
      y++; // iterate over the array, add 1 to y for every expression of 'north'
    }
  }
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === 'south') {
      y--; //iterate over the array, subtract 1 from y
    }
  }
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === 'east') {
      x++; //add 1 to x for each east...
    }
  }
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === 'west') {
      x--; //subtract 1 from x for each west. feels like there's a better way of doing this...
    }
  }
  return [x,y];
};

console.log(finalPosition(moves));