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
      if (
        this.coloredFigures[figure.id] == null &&
        this.checkNearColors(figure.id, color) &&
        (this.checkNearColors(figure.id, (color + 1) % 4) ||
        this.checkNearColors(figure.id, (color + 3) % 4))
      ) {
        this.coloredFigures[figure.id] = color;
        return +figure.id;
      }
    }
    for (const figure of this.sortedFiguresSize) {
      if (
        this.coloredFigures[figure.id] == null &&
        this.checkNearColors(figure.id, color)
      ) {
        this.coloredFigures[figure.id] = color;
        return +figure.id;
      }
    }
    return 0;
  }

  checkNearColors(id, color) {
    for (let i = 0; i < this.figures_count; i += 1 ) {
      if (this.graph[id][i] == 1) {
        if (this.coloredFigures[i] == color) {
          return false;
        }
      }
    }
    return true;
  }

  notifyMove(figure, color) {
    this.coloredFigures[figure] = color;
  }
}