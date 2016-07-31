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
    for (const figure of this.sortedFiguresSize) {
      if (this.coloredFigures[figure.id] == null) {
        this.coloredFigures[figure.id] = color;
        return +figure.id;
      }
    }
    return 0;
  }

  notifyMove(figure, color) {
    this.coloredFigures[figure] = color;
  }
}