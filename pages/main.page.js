let BasePage = require('./base.page');
let WebButton = require('../elements/button');

let loginLinkLocator = by.css('.item-login');
let accountNameLocator = by.css('span[class="name ellipsis"]');
let baseUrl = 'https://hotline.ua/';

class MainPage extends BasePage {
    async waitForPageToBeAvailable() {
        await this.getLoginLinkElement().waitForElementToBeVisible(10000);
    }

    // action methods
    async open() {
        await allure.createStep('Open home page', async () => {
            await browser.get(baseUrl);
        })();
    }

    async navigateToLogin() {
        await allure.createStep('Open login page', async () => {
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