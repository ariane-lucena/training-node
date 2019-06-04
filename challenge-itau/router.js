const onBrowser = require('./funcs/onBrowser');
const exportLogs = require('./funcs/exportLog');

function router(request, response) {
  switch (request.method) {
      case "GET":
      //listar todos os comandos executados;
      //ler do fylesystem comandos executados;
      let logs = exportLogs();
      response.end(logs);
      case "POST":
      //chamada da função que deverá abrir um navegador em uma página qualquer
      //e executar algum código de sua escolha (Ex: código para clicar em um
      //botão da página ou código para preencher um campo);
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
