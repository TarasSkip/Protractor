let BasePage = require('./base.page');
let WebInput = require('../elements/input');
let TextBox = require('../elements/textBox');

let loginFormEmailLocator = by.name('login');
let loginFormPasswordLocator = by.name('password');
let loginButtonLocator = by.css('input[type="submit"]');
let registrationLinkLocator = by.css('a[href*="register"]');

let loginFormErrorTextLocator = by.css('div.errors');
let loginFormBEErrorTextLocator = by.css('div.item-error');

class LoginPage extends BasePage {
    async waitForLoginToBeClickable() {
        await this.getLoginButtonElement().waitForElementToBeClickable(100000);
    }

    // action methods
    async login(email = '', password = '') {
        await allure.createStep(`Login attempt with email '${email}' and password '${password}'`, async () => {
            await this.clearLoginFormEmailElement();
            await this.enterLogin(email);
            await this.clearLoginFormPasswordElement();
            await this.enterPassword(password);
            await this.clickLoginButton();
        })();
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

    async navigateToRegistration() {
        await allure.createStep('Open registration page', async () => {
            await this.getRegistrationLinkElement().click();
        })();
    }

    async clearLoginFormEmailElement() {
        await this.getLoginFormEmailElement().clear();
    }

    async clearLoginFormPasswordElement() {
        await this.getLoginFormPasswordElement().clear();
    }

    //  WebInput element getters
    getLoginFormEmailElement() {
        return new WebInput(element(loginFormEmailLocator), "Email input");
    }

    getLoginFormPasswordElement() {
        return new WebInput(element(loginFormPasswordLocator), "Password input");
    }

    getLoginButtonElement() {
        return new WebInput(element(loginButtonLocator), "Login button");
    }

    getRegistrationLinkElement() {
        return new WebInput(element(registrationLinkLocator), "Registration Link");
    }

    //  TextBox element getters
    getLoginFormEmailErrorTextElement() {
        return new TextBox(element(loginFormErrorTextLocator), "Email error text");
    }

    getLoginFormPasswordErrorTextElement() {
        return new TextBox(element(loginFormErrorTextLocator), "Password error text");
    }

    getLoginFormBEErrorTextElement() {
        return new TextBox(element(loginFormBEErrorTextLocator), "Backend error text");
    }
}

module.exports = new LoginPage();