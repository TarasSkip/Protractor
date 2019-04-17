let BasePage = require('./base.page');
let WebButton = require('../elements/button');
let WebInput = require('../elements/input');
let TextBox = require('../elements/textBox');

let loginLinkLocator = by.css('.item-login');
let accountNameLocator = by.css('span[class="name ellipsis"]');
let baseUrl = 'https://hotline.ua/';

let searchField = by.css('#searchbox');
let searchButton = by.css('#doSearch');

let categoryDachaLocator = by.css('.level-1.dacha_sad');
let subCategoryPoolLocator = by.xpath("//*[contains(text(), 'Бассейны, пруды, фонтаны')]");
let subSubCategoryPumpLocator = by.css('a[href*="/dacha_sad/nasosy-vodosnabzheniya/46036/"]');

let cartItemsCountLocator = by.css('.item-cart .count');

let feedbackLinkLocator = by.css('a[href="/feedback/"]');

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

    async clickSubCategoryPool() {
        await this.getSubCategoryPoolElement().click();
    }

    async clickSubSubCategoryPump() {
        await this.getSubSubCategoryPumpElement().click();
    }

    async navigateToSubSubCategoryPump() {
        await allure.createStep(`Navigate to "Dacha/sad -> Pool -> Pump" category`, async () => {
            await this.getCategoryDachaElement().mouseMove();
            await this.clickSubCategoryPool();
            await this.clickSubSubCategoryPump();
        })();
    }

    async clickFeedbackLink() {
        await allure.createStep('Click feedback link', async () => {
            await this.getFeedbackLinkElement().click();
            await this.getFeedbackLinkElement().click(); // In 95% does not work on first click... (maybe scroll should be used here)
            //  await browser.getWindowHandle();
            await browser.getAllWindowHandles().then(async (handles) => {
                await browser.switchTo().window(handles[1]);
            });
        })();
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

    getCategoryDachaElement() {
        return new WebButton(element(categoryDachaLocator), "Dacha/sad category");
    }

    getSubCategoryPoolElement() {
        return new WebButton(element(subCategoryPoolLocator), "Pool subcategory");
    }

    getSubSubCategoryPumpElement() {
        return new WebButton(element(subSubCategoryPumpLocator), "Pump subSubCategory");
    }

    getCartItemsCountElement() {
        return new TextBox(element(cartItemsCountLocator), "Cart items count");
    }

    getFeedbackLinkElement() {
        return new WebButton(element(feedbackLinkLocator), "Feedback link");
    }
}

module.exports = new MainPage();