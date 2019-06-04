const fs = require('fs')

function writeLog(description) {
  fs.statSync('/data/log', function(err, stat) {
    if(err == null) {
        fs.appendFileSync("/data/log.txt", description);
    } else if(err.code === 'ENOENT') {
      fs.mkdirSync("/data", 0o776);
      fs.writeFileSync("/data/log.txt", description);
    } else {
        console.log('Some other error: ', err.code);
    }
  });
}

module.exports = writeLog;
