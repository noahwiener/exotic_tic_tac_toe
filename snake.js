(function () {
if (typeof snakeGame === 'undefined') {
  var snakeGame = window.snakeGame = {};
}
///////////////////////////

  function Snake() {
    this.dir = "E";
    this.segments = [[0,1], [0,2]];
  }

  Snake.prototype.plus = function (dir) {
    var face = this.segments.last;
    var newPos = [];
    if (dir === "N"){
      newPos = [face[0], (face[1] - 1)];
    }else if (dir === "E"){
      newPos = [(face[0] + 1), face[1]];
    }else if (dir === "W"){
        newPos = [(face[0] - 1), face[1]];
    }else{
      newPos = [face[0], (face[1] + 1)];
    }
    return newPos;
  };

  Snake.prototype.equals = function (newPos) {
    if (newPos[0] === 0 || newPos[0] === 100 ) {
      return true;
    } else if (newPos[1] === 0 || newPos[1] === 100 ) {
      return true;
    } else if (this.segments.some(function (el) { el === newPos; })) {
      return true;
    } else {
      return false;
    }
  };

  Snake.prototype.isOpposite = function (input) {
    if ((this.dir === "N" && input === "S") ||
        (this.dir === "S" && input === "N") ||
        (this.dir === "E" && input === "W") ||
        (this.dir === "W" && input === "E")){
          return true;
        }
    return false;
  };

  Snake.prototype.move = function () {
    var nextSpace = this.plus(this.dir);
    if (this.equals(nextSpace)){
      alert("You ate yourself or a wall. Mmmmmmm");
    } else {
      this.segments.shift();
      this.segments.push(nextSpace);
    }
  };

  Snake.prototype.turn = function (input){
    if (this.isOpposite(input) === false){
      this.dir = input;
    }
  };








})(); // end of IFFE
