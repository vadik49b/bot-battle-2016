module.exports = class AbstractStrategy {
  constructor(id, board) {
    const { width, height, cells, figures_count } = board;
    this.id = id;
    this.width = width;
    this.height = height;
    this.cells = cells;
    this.figures_count = figures_count;
  }

  makeMove(color) {
  }

  notifyMove(figure, color) {
  }
}