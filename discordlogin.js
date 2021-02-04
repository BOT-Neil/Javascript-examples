const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
global.localStorage = require('localStorage')
var store = require('store')

puppeteer.use(StealthPlugin())

var fs = require('fs');
//long wait 30- 60
//short wait 
function randomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }   

async function main() {
   //console.log(proxies)
   const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './brave'
   });
   const page = await browser.newPage();
   
   /*await page.setRequestInterception(true);
   page.on('request', async request => {
      await useProxy(request, 'http://'+user+':'+pass+'@'+host+':'+port);
  });*/
   await page.setViewport({width: 1200, height: 720})
   await page.setDefaultNavigationTimeout(60000);
   await page.goto('https://discord.com/channels/250021074559827968/702892230767149176', { waitUntil: 'networkidle0' });

   //__________________ sign in _____________________________________
   await page.waitFor(30000);
   //await page.waitFor(3000);
   //await write_file('cookies.txt', JSON.stringify(await page.cookies()));
   //store.set('user', { name:'Trashulius' })
   //store.get('user').name == 'Trashulius';
   //await local.saveLocalStorage(page, `${__dirname}/local.json`); 
   //await saveLocalStorage(page,'./test')
   await page.waitFor(1000);
   await browser.close();
}

main();
