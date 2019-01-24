let loginLinkLocator = by.css('.item-login');
let loginFormEmailLocator = by.name('login');
let loginFormPasswordLocator = by.name('password');
let loginButtonLocator = by.css('input[type="submit"]');
let accountNameLocator = by.css('span[class="name ellipsis"]');
let baseUrl = 'https://hotline.ua/';

class MainPage {
    constructor() {
    }

    // action methods
    async open() {
        await browser.get(baseUrl);
    }

    async navigateToLogin() {
        await this.getLoginLinkElement().click();
    }

    async enterLogin(name) {
        await this.getLoginFormEmailElement().sendKeys(name);
    } 

    async enterPassword(password) {
        await this.getLoginFormPasswordElement().sendKeys(password);
    } 

    async clickLoginButton() {
        await this.getLoginButtonElement().click();
    }



    // elements getters
    getLoginLinkElement() {
        return element(loginLinkLocator);
    }

    getLoginFormEmailElement() {
        return element(loginFormEmailLocator);
    }

    getLoginFormPasswordElement() {
        return element(loginFormPasswordLocator);
    }

    getLoginButtonElement() {
        return element(loginButtonLocator);
    }

    getAccountNameElement() {
        return element(accountNameLocator);
    }
}

module.exports = new MainPage();