const fs = require('fs')

function readLogFile() {
  return fs.readFileSync('funcs/data/log.txt')
}

module.exports = readLogFile;
