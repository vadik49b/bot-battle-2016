const AbstractStrategy = require('./AbstactStrategy');

// abstract fields
// this.id = id;
// this.width = width;
// this.height = height;
// this.cells = cells;
// this.figures_count = figures_count;
// this.figuresSize = figuresSize;

module.exports = class InFaceStrategy extends AbstractStrategy {
  makeMove(color) {
    return Math.floor(Math.random() * this.figures_count);
  }

  notifyMove(figure, color) {

  }
}