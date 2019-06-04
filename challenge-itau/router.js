const onBrowser = require('./funcs/onBrowser');
const exportLogs = require('./funcs/exportLog');

function router(request, response) {
  switch (request.method) {
      case "GET":
        let logs = exportLogs();
        response.end(logs);
        break;
      case "POST":
        let e = onBrowser();
        if (e != '') {
          response.end("Fail on execute function 'runOnBrowser': ", e)
        } else {
          response.end("Running...");
        }
        break;
      default:
        console.log("unrecognized method: " + request.method);
        break;
  }
}

module.exports = router;
