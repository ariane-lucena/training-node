//test for writeLog function
const writeLog = require('./log')
const fs = require('fs')

let description = 'Log de teste'

writeLog(description);
setTimeout(assertTest, 15000)

function assertTest() {
  if (!(fs.existsSync('/data/log'))) {
    console.log("Erro: Arquivo não existe");
  } else {
    let log = fs.readFileSync('funcs/data/log')
    if (!log.includes(description)){
      console.log("Erro: Arquivo de log não contém mensagem");
    }
  }
  console.log("Success");
}
