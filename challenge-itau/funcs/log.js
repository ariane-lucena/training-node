const fs = require('fs')

function writeLog(description) {
  try {
    var date = getDateTime();
    var stats = fs.statSync('funcs/data');
    fs.appendFileSync("funcs/data/log.txt", date+description+'\n');
  } catch(err) {
    fs.mkdirSync("funcs/data", 0o776);
    fs.writeFileSync("funcs/data/log.txt", date+description+'\n');
  }
}

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return "[" + year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec + "] ";
}

module.exports = writeLog;
