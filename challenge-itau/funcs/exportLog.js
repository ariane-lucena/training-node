const fs = require('fs')

function readLogFile() {
  try {
    var log = fs.readFileSync('funcs/data/log.txt');
    return log;
  }
  catch(err) {
    return "Nenhum log encontrado";
  }
}

module.exports = readLogFile;
