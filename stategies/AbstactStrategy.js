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
    this.initGraph();
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
    this.sortedFiguresSize.sort((a, b) => (b.size - a.size));
  }

  initGraph() {
    this.graph = [];
   for (let i = 0; i < this.figures_count; i += 1) {
     const row = [];
     for (let j = 0; j < this.figures_count; j += 1) {
       row.push(0);
     }
     this.graph.push(row);
   }
   for (let i = 0; i < this.height; i += 1) {
     for (let j = 0; j < this.width; j += 1) {
       if (j < this.width - 1 && this.cells[i][j] != this.cells[i][j + 1]) {
         this.graph[this.cells[i][j]][this.cells[i][j + 1]] = 1;
         this.graph[this.cells[i][j + 1]][this.cells[i][j]] = 1;
       }
       if (i < this.height - 1 && this.cells[i][j] != this.cells[i + 1][j]) {
         this.graph[this.cells[i][j]][this.cells[i + 1][j]] = 1;
         this.graph[this.cells[i + 1][j]][this.cells[i][j]] = 1;
       }
       if (i < this.height - 1 && i % 2 == 0 && j != 0 && this.cells[i][j] != this.cells[i + 1][j - 1]) {
         this.graph[this.cells[i][j]][this.cells[i + 1][j - 1]] = 1;
         this.graph[this.cells[i + 1][j - 1]][this.cells[i][j]] = 1;
       }
       if (i < this.height - 1 && j < this.width - 1 && i % 2 == 1 && this.cells[i][j] != this.cells[i + 1][j + 1]) {
         this.graph[this.cells[i][j]][this.cells[i + 1][j + 1]] = 1;
         this.graph[this.cells[i + 1][j + 1]][this.cells[i][j]] = 1;
       }
     }
   }
  }

  makeMove(color) {
  }

  notifyMove(figure, color) {
  }
}