const log = require('./log')
const puppeteer = require('puppeteer');

async function runOnBrowser() {
  try {
    log("Iniciando puppeteer");
    const browser = await puppeteer.launch({headless:false});

    log("Criando nova página no browser");
    const page = await browser.newPage();

    log("Definindo User Agent");
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3803.0 Safari/537.36');

    log("Redirecionando para URL - https://www.google.com/maps");
    await page.goto("https://www.google.com/maps");

    log("Aguardando por input");
    await page.waitFor('input[name=q]');

    log("Clicando no inuput");
    await page.click('input[name=q]');

    log("Atribuindo o valor 'Itaú CTO' ao input");
    await page.$eval('input[name=q]', el => el.value = 'Itaú CTO');

    log("Clicando no botão Pesquisar");
    await page.click('button[id=searchbox-searchbutton]');
  } catch(e) {
    console.log("Err: ", e)
    return e;
  }
}

module.exports = runOnBrowser;
