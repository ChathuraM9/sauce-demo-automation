const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function emptyLoginTest() {

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

    try {
      
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('');
        await driver.findElement(By.id('password')).sendKeys('');
        await driver.findElement(By.className('submit-button')).click();
        
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
       
        await driver.quit();
    }
})();
