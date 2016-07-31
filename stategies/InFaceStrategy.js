const AbstractStrategy = require('./AbstactStrategy');

module.exports = class InFaceStrategy extends AbstractStrategy {
  makeMove(color) {
    return { status: 'ok', figure: 0 };
  }

  notifyMove(figure, color) {

  }
}