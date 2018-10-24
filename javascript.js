// Input = grid size 10
// Output = an array containing the gridSize
var createGrid = function() {
  var result = [];
  for (var i = 0; i < 10; i++) {
    var row = [];
    for (var j = 0; j < 10; j++) {
  // console.log("test");
      row.push(" ");

    }
    result.push(row);
  }
  return result;
};

// Input = desired number of ships
// Output = generation of desired ships, starting with size 2 and up

  /*function positionShips() {
    var typeOfShips = ["Destroyer", "Submarine", "Cruiser", "Battleship", "Carrier"];
    var ships = {
      "Destroyer": 2,
      "Submarine": 3,
      "Cruiser": 3,
      "Battleship": 4,
      "Carrier": 5,
    };
    var initialCoordinates = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();

  }*/

// Output = Random number generator
function randomCoordinates() {
  var typeOfShips = ["Destroyer", "Submarine", "Cruiser", "Battleship", "Carrier"];
  var ships = {
    "Destroyer": 2,
    "Submarine": 3,
    "Cruiser": 3,
    "Battleship": 4,
    "Carrier": 5,
  };

  //select the type of ship
    //generate a random coordinate
    //if ship already has one coordinate... their next coordinate must at least contain the previous row or column value


  var result = [];

  for (var i = 0; i < 5; i++) {
    var coordinates = [];
    for (var j = 0; j < ships[typeOfShips[i]]; j++) {
      coordinates.push(Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString());

      //TODO: need to add the 4 conditions that Rohit helped me identify for the battleship positioning (written down with doggy ear fold)
    }
    console.log(coordinates);
  }
}
console.log(createGrid());
console.log(randomCoordinates());