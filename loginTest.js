const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function loginTest() {
    
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

    try {
       
        await driver.get('https://www.saucedemo.com/');

    
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');


        await driver.findElement(By.className('submit-button')).click();

        await driver.wait(until.titleIs('Swag Labs'), 10000); 

        console.log('Login successful and products page is accessible.');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
      
        await driver.quit();
    }
})();
