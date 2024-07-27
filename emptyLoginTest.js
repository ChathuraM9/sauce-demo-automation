const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function emptyLoginTest() {

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

    try {
      
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('');
        await driver.findElement(By.id('password')).sendKeys('');
        await driver.findElement(By.className('submit-button')).click();

       
        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl === 'https://www.saucedemo.com/') {
            console.log('User is still on the login page, access to products page is denied.');
        } else {
            console.error('User was able to access the products page, test failed.');
        }
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
       
        await driver.quit();
    }
})();
