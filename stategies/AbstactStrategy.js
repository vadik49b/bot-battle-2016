module.exports = class AbstractStrategy {
  constructor(id, board) {
    const { width, height, cells, figures_count } = board;
    this.id = id;
    this.width = width;
    this.height = height;
    this.cells = cells;
    this.figures_count = figures_count;
    this.coloredFigures = {};
    // JOHN CEEEENA !!!!!!! :)
    this.init();
  }

  init() {
    this.figuresSize = {};
    for (let i = 0; i < this.height; i += 1) {
      for (let j = 0; j < this.width; j += 1) {
        const figureId = this.cells[i][j];
        const prevSize = this.figuresSize[figureId];
        if (prevSize) {
          this.figuresSize[figureId] = prevSize + 1;
        } else {
          this.figuresSize[figureId] = 1;
        }
      }
    }

    this.sortedFiguresSize = [];
    for (const id of Object.keys(this.figuresSize)) {
      this.sortedFiguresSize.push({
        id,
        size: this.figuresSize[id]
      });
    }
    this.sortedFiguresSize.sort((a, b) => (b - a));
  }

  makeMove(color) {
  }

  notifyMove(figure, color) {
  }
}