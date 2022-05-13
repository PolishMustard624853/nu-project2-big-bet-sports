const glob = require('glob');

const model = {};

// glob.sync changes glob function from asynchronous to synchronous
// find files in models folder that end in .js except index.js
const files = glob.sync('./models/*.js', { ignore: "./models/index.js" });
files.forEach(file => {
  // grab file name for each file grabbed using regex
  let key = file.match(/[A-Z][a-zA-Z]+/);
  // create variable named the same name as file name and require that file
  this[key[0]] = require(`./${key[0]}`);
  // set variable above as property of object
  model[key[0]] = this[key[0]];
});

module.exports = model;