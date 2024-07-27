const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function productTest() {
   
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

    try {
     
        await driver.get('https://www.saucedemo.com/');

     
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.className('submit-button')).click();

       
        await driver.wait(until.elementLocated(By.css('.inventory_item')), 10000); 
        await driver.findElement(By.css('.inventory_item:first-child .btn_primary')).click();

 
        await driver.findElement(By.css('.shopping_cart_link')).click();
        await driver.findElement(By.css('.checkout_button')).click();

    
        await driver.findElement(By.id('first-name')).sendKeys('Chathura');
        await driver.findElement(By.id('last-name')).sendKeys('Madhushan');
        await driver.findElement(By.id('postal-code')).sendKeys('12345');

        await driver.findElement(By.css('.cart_button')).click();
      
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
     
        await driver.quit();
    }
})();

