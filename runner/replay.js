const cheerio = require('cheerio');
const fetch = require('node-fetch');

const args = process.argv.slice(2);
const [ pageUrl ] = args;

const fetchPage = url => fetch(url).then(result => (
  result.text()
));

const makeRequest = (method, url, body) => {
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method,
  };
  if (method !== 'get' && body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options);
};

const parseGame = data => {
  const $ = cheerio.load(data);
  const replayContainer = $('[data-react-class="GameReplay"]');
  return replayContainer.data('reactProps').game;
};

fetchPage(pageUrl).then(result => {
  const game = parseGame(result);
  console.log(game.moves);
}).catch(error => {
  console.error('Failed', error);
});
