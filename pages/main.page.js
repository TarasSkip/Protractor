let loginLinkLocator = by.css('.item-login');

class MainPage {
    constructor() {

    }

    // action methods
    async open() {
        await browser.get(browser.params.baseUrl);
    }

    async navigateToLogin() {
        await this.getLoginLinkElement().click();
    }

    // elements getters
    getLoginLinkElement() {
        return element(loginLinkLocator);
    }
}

module.exports = new MainPage();