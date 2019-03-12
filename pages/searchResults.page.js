let BasePage = require('./base.page');
let TextBox = require('../elements/textBox');
let WebButton = require('../elements/button');

let searchResultsFirstLinkLocator = by.css('.products-list > li:nth-child(1) > div.item-info > p > a');
let itemPageHeaderLocator = by.css('div.heading > h1');

class SearchResultsPage extends BasePage {
    async waitForSearchPageToBeAvailable() {
        await this.getPageHeaderElement().waitForElementToBeVisible(10000);
    }

    // action methods
    async getSearchResults() {
        await allure.createStep(`Getting search results (check that found '> 0' items)`, async () => {
            let string = await this.getPageHeaderElement().getText();
            let num = await string.replace(/[^0-9]/g, '');
            let int = await parseInt(num, 10);
            if (int > 0) {
                console.log(`Search string match '${int}' items`);
                int = true;
            } else {
                console.log('No search results!!!');
                int = false;
            }
            expect(int).toBe(true);
        })();
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