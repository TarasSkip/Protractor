let BasePage = require('./base.page');
let WebButton = require('../elements/button');

let loginLinkLocator = by.css('.item-login');
let accountNameLocator = by.css('span[class="name ellipsis"]');
let baseUrl = 'https://hotline.ua/';

class MainPage extends BasePage {

    // action methods
    async open() {
        await allure.createStep('Step 1 - open home page', async () => {
            await browser.get(baseUrl);
        })();        
    }

    async navigateToLogin() {
        await allure.createStep('Step 2 - open login page', async () => {
            await this.getLoginLinkElement().click();
        })();
    }
    
    // elements getters
    getLoginLinkElement() {
        return new WebButton(element(loginLinkLocator), "Login Link");
    }

    getAccountNameElement() {
        return element(accountNameLocator);
    }
}

module.exports = new MainPage();