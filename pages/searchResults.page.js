let BasePage = require('./base.page');
let TextBox = require('../elements/textBox');
let WebButton = require('../elements/button');

let searchResultsFirstLinkLocator = by.css('.product-item:nth-child(1) .h4 a');
let itemPageHeaderLocator = by.css('div.heading > h1');

class SearchResultsPage extends BasePage {
    async waitForSearchPageToBeAvailable() {
        await this.getPageHeaderElement().waitForElementToBeVisible(10000);
    }

    // action methods
    async getSearchResults() {
        let string = await this.getPageHeaderElement().getText();
        let num = string.replace(/[^0-9]/g, '');
        let int = parseInt(num, 10);
        return int;
    }

    async clickRegistrationButton() {
        await this.getRegistrationButtonElement().click();
    }

    async clickSearchResultsFirstLink() {
        await allure.createStep(`Click on the link of the first result`, async () => {
            await this.getSearchResultsFirstLinkElement().click();
        })();
    }


    // elements getters
    getSearchResultsFirstLinkElement() {
        return new WebButton(element(searchResultsFirstLinkLocator), "Link of the first search result");
    }

    getPageHeaderElement() {
        return new TextBox(element(itemPageHeaderLocator), "Page header");
    }
}

module.exports = new SearchResultsPage();