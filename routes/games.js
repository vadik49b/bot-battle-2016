const express = require('express');
const router  = express.Router();

const OK_RESULT = { status: 'ok' };

const games = {};
const InFaceStrategy = require('../stategies/InFaceStrategy');

router.post('/', (req, res) => {
  const { id, board }  = req.body;
  games[id] = new InFaceStrategy(id, board);
  res.json(OK_RESULT);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const color = req.query.color;
  const strategy = games[id];
  if (!strategy) {
    throw new Error(`There is no game with id ${id}`);
  }
  const result = {
    status: 'ok',
    figure: strategy.makeMove(color)
  };
  res.json(result);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { figure, color } = req.body;
  const strategy = games[id];
  if (!strategy) {
    throw new Error(`There is no game with id ${id}`);
  }
  res.json(OK_RESULT)
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const strategy = games[id];
  if (!strategy) {
    throw new Error(`There is no game with id ${id}`);
  };
  delete games[id];
  res.json(OK_RESULT);
});

module.exports = router
