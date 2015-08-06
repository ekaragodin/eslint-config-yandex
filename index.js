var read = require('read-yaml');

module.exports = read.sync(__dirname + '.eslintrc');
