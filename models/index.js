const glob = require('glob');

const model = {};

const files = glob.sync('./models/*.js', { ignore: "./models/index.js" });
files.forEach(file => {
  let key = file.match(/[A-Z][a-zA-Z]+/);
  this[key[0]] = require(`./${key[0]}`);
  model[key[0]] = this[key[0]];
});

module.exports = model;