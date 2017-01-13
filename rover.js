var myRover = {
  position: [[0],[0]],
  direction: 'N',
  roverDirections: ['N', 'E', 'S', 'W'],
  marsGrid: [[0], [0]],
  obstacles: []
};

// MOVE FORWARD & BACKWARD COMMANDS

function move(command) {


if (command === 'f') {   //FORWARD

  switch(myRover.direction) {
    case 'N':
      myRover.position[0]++;
      break;
    case 'E':
      myRover.position[1]++;
      break;
    case 'S':
      myRover.position[0]--;
      break;
    case 'W':
      myRover.position[1]--;
      break;
      }
  }

  else if (command === 'b') {  //BACKWARD

    switch(myRover.direction) {
      case 'N':
        myRover.position[0]--;
        break;
      case 'E':
        myRover.position[1]--;
        break;
      case 'S':
        myRover.position[0]++;
        break;
      case 'W':
        myRover.position[1]++;
        break;

      }
  }

  return myRover.position;
  // console.log("New Rover Position: " + rover.position[0] + ", " + rover.position[1]);  //Updated Rover Position
}

// WRAPPING THE ROVER

// if (command === 'f') {
//
// if ((myRover.position[[0],[0]]) && (myRover.direction === 'S')) {
//   myRover.position[[10],[0]];
// }
//
// else if ((myRover.position[[0],[0]]) && (myRover.direction === 'W')) {
//   myRover.position[[0],[10]];
// }
//
// if ((myRover.position[[0],[10]]) && (myRover.direction === 'E')) {
//   myRover.position[[0],[0]];
// }
//
// else if ((myRover.position[[0],[10]]) && (myRover.direction === 'S')) {
//   myRover.position[[10],[10]];
// }
//
// if ((myRover.position[[10],[0]]) && (myRover.direction === 'N')) {
//   myRover.position[[0],[0]];
// }
//
// else if ((myRover.position[[10],[0]]) && (myRover.direction === 'W')) {
//   myRover.position[[10],[10]];
// }
//
// if ((myRover.position[[10],[10]]) && (myRover.direction === 'N')) {
//   myRover.position[[0],[10]];
// }
//
// else if ((myRover.position[[0],[0]]) && (myRover.direction === 'E')) {
//   myRover.position[[10],[0]];
// }
//
//
// }

// TURN COMMANDS

function turn(command){

  if (command === 'l') {   //TURNING LEFT

      switch (myRover.direction) {
        case 'N':
        myRover.direction = 'W';
        break;
        case 'E':
        myRover.direction = 'N';
        break;
        case 'S':
        myRover.direction = 'E';
        break;
        case 'W':
        myRover.direction = 'S';
        break;
      }
    }

    if (command === "r") {    //TURNING RIGHT
      switch (myRover.direction) {
        case 'N':
        myRover.direction = 'E';
        break;
        case 'E':
        myRover.direction = 'S';
        break;
        case 'S':
        myRover.direction = 'W';
        break;
        case 'W':
        myRover.direction = 'N';
        break;
    }
}
  return myRover.direction;
  // console.log("New Rover Direction: " + myRover.direction);

  // NEED TO THEN ACTUALLY TURN THE ROVER ON THE GRID -
}
