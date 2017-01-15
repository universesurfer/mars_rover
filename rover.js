var myRover = {
  position: [[0],[0]],
  direction: 'N',
  roverDirections: ['N', 'E', 'S', 'W'],
  marsGrid: [[0], [0]],
  obstacles: [],
  commands: ['f','f', 'f', 'r', 'f', 'f', 'l', 'f', 'f', 'f', 'b', 'b']
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

}



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




}


// Executing on a Series of Commands From the Commands Array

function commandsArray() {


var commandsLength = myRover.commands.length;
for (var i = 0; i <= commandsLength; i++) {
        if (myRover.commands[i] === 'f') {
          move('f');
        }

        else if (myRover.commands[i] === 'b') {
          move('b');
        }

        if (myRover.commands[i] === 'r') {
          turn('r');
        }
        else if (myRover.commands[i] === 'l') {
          turn('l');
        }


}
return myRover.position;
}




// WRAPPING THE ROVER

if (myRover.position[0] === -10) {
  if (myRover.direction === 'S' && move('f')) {
      myRover.position[0] = 10;
  }
  else if (myRover.direction === 'N' && move('b')) {
    myRover.position[0] = 10;
  }
}

if (myRover.position[0] === 10) {
  if (myRover.direction === 'N' && move('f')) {
    myRover.position[0] = -10;
  }
  else if (myRover.direction === 'S' && move('b')) {
  myRover.position[0] = -10;
  }
}

if (myRover.position[1] === 10) {
  if (myRover.direction === 'E' && move('f')) {
     myRover.position[1] = -10;
  }
  else if (myRover.direction == 'W' && move('b')) {
     myRover.position[1] = -10;
  }
}

if (myRover.position[1] === -10) {
  if (myRover.direction === 'W' && move('f')) {
    myRover.position[0] = 10;
  }
  else if (myRover.direction === 'E' && move('b')) {
     myRover.position[1] = 10;
  }

}
