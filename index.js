var read = require('read-yaml');

module.exports = read.sync('.eslintrc');
