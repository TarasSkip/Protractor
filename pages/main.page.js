let BasePage = require('./base.page');
let WebButton = require('../elements/button');
let WebInput = require('../elements/input');

let loginLinkLocator = by.css('.item-login');
let accountNameLocator = by.css('span[class="name ellipsis"]');
let baseUrl = 'https://hotline.ua/';

let searchField = by.css('#searchbox');
let searchButton = by.css('#doSearch');

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

    async search(string = '') { //  Search by string
        await allure.createStep(`Enter '${string}' string into Search field`, async () => {
            await this.clearSearchFieldElement();
            await this.enterSearchString(string);
            await this.clickSearchButton();
        })();
    }

    async clearSearchFieldElement() {
        await this.getSearchFieldElement().clear();
    }

    async enterSearchString(name) {
        await this.getSearchFieldElement().sendKeys(name);
    }

    async clickSearchButton() {
        await this.getSearchButtonElement().click();
    }

    // elements getters
    getLoginLinkElement() {
        return new WebButton(element(loginLinkLocator), "Login Link");
    }

    getAccountNameElement() {
        return element(accountNameLocator);
    }

    getSearchFieldElement() {
        return new WebInput(element(searchField), "Search input");
    }

    getSearchButtonElement() {
        return new WebButton(element(searchButton), "Search button");
    }
}

module.exports = new MainPage();