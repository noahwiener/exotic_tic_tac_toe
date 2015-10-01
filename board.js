(function () {
if (typeof snakeGame === 'undefined') {
  var snakeGame = window.snakeGame = {};
}
///////////////////////////

function Board () {
  this.snake = new Snake();
  this.grid = [];

  for (var i = 0; i < 100; i++) {
    var row = [];
    for (var j = 0; i < 100; j++) {
      row.push(['.']);
    }
    this.grid.push(row);
  }

  this.snake.segments.forEach (function(el) {
    this.grid[el[0]][el[1]] = ["S"];
  });
}

Board.prototype.render = function () {
  console.log(this.grid);
};


})(); // end of IFFE
