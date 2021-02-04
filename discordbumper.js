const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
//global.localStorage = require('localStorage')
//var store = require('store')
puppeteer.use(StealthPlugin())

var fs = require('fs');
//long wait 30- 60
//short wait 
function randomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }   

async function main() {
   const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './brave'
   });
   const page = await browser.newPage();
   await page.setViewport({width: 1200, height: 720})
   await page.setDefaultNavigationTimeout(60000);
   //await page.setCookie(...JSON.parse(await read_file('cookies.txt')));
   //await restoreLocalStorage(page,'./test')
   //store.get('user').name == 'Marcus'
   await page.waitFor(5000);
   await page.goto('https://discord.com/channels/0/0', { waitUntil: 'networkidle0' });
   await page.waitFor(5000);
   await page.click('#app-mount > div.app-1q1i1E > div > div.layers-4iHuyZ.layers-3q14gs > div > div > div > div.content-98HsJk > div.chat-3bRxxuu > div > main > form > div > div > div > div > div.textArea-12jD-V.textAreaSlate-1ZzRVj.slateContainer-3Qkn2x > div.markup-2BOw-j.slateTextArea-1Mkdgw.fontSize16Padding-3Wk7zP > div')
   //await page.click('#app-mount > div.app-1q1i1E > div > div.layers-4iHuyZ.layers-3q14gs > div > div > div > div.content-98HsJk > div.chat-3bRxxuu > div > main > form > div > div > div > div > div.textArea-12jD-V.textAreaSlate-1ZzRVj.slateContainer-3Qkn2x > div.markup-2BOw-j.slateTextArea-1Mkdgw.fontSize16Padding-3Wk7zP > div');
   await page.keyboard.type('!d bump');
   page.keyboard.press('Enter');
   //__________________ sign in _____________________________________
   await page.waitFor(10000);
   //await page.waitFor(3000);
   //await write_file('cookies.txt', JSON.stringify(await page.cookies()));
   await browser.close();
}
function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
 }
 
async function load () { // We need to wrap the loop into an async function for this to work

  var amount = 300;
  for (var i = 0; i < amount; i++) { 
     main();
     await timer(randomInteger(7200000, 8200000)); // then the created Promise can be awaited
  }
}
 
load();
