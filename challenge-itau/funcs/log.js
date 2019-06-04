const fs = require('fs')

function writeLog(description) {
  try {
    var stats = fs.statSync('funcs/data');
    fs.appendFileSync("funcs/data/log.txt", description+'\n');
  } catch(err) {
    fs.mkdirSync("funcs/data", 0o776);
    fs.writeFileSync("funcs/data/log.txt", description+'\n');
  }
}

module.exports = writeLog;
