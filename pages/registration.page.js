let BasePage = require('./base.page');
let WebInput = require('../elements/input');
let TextBox = require('../elements/textBox');

let registrationFormEmailLocator = by.name('email');
let registrationFormPasswordLocator = by.name('password');
let registrationFormNicknameLocator = by.name('login');
let registrationButtonLocator = by.css('input[type="submit"]');
let registrationTextLocator = by.css('.h3');

let registrationFormErrorTextLocator = by.css('div.errors');
//  let registrationFormPasswordErrorTextLocator = by.css('.errors');
//  let registrationFormNicknameErrorTextLocator = by.css('.errors');

class RegistrationPage extends BasePage {
    async waitForRegisterToBeClickable() {
        await this.getRegistrationButtonElement().waitForElementToBeClickable(100000);
    }


    // action methods
    async registration(email = '', password = '', nickname = '') { //  SUCCESSFULL registration scenario
        await allure.createStep(`Registration attempt with: email - '${email}', password - '${password}', nickname - '${nickname}'`, async () => {
            await this.clearRegistrationFormEmailElement();
            await this.enterLogin(email);
            await this.enterPassword(password);
            await this.enterNickname(nickname);
            await this.clickRegistrationButton();
        })();
    }

    async enterLogin(email) {
        await this.getRegistrationFormEmailElement().sendKeys(email);
    }

    async enterPassword(password) {
        await this.getRegistrationFormPasswordElement().sendKeys(password);
    }

    async enterNickname(nickname) {
        await this.getRegistrationFormNicknameElement().sendKeys(nickname);
    }

    async clickRegistrationButton() {
        await this.getRegistrationButtonElement().click();
    }

    async clearRegistrationFormEmailElement() {
        await this.getRegistrationFormEmailElement().clear();
    }


    // elements getters
    getRegistrationFormEmailElement() {
        return new WebInput(element(registrationFormEmailLocator), "Email input");
    }

    getRegistrationFormPasswordElement() {
        return new WebInput(element(registrationFormPasswordLocator), "Password input");
    }

    getRegistrationFormNicknameElement() {
        return new WebInput(element(registrationFormNicknameLocator), "Nickname input");
    }

    getRegistrationButtonElement() {
        return new WebInput(element(registrationButtonLocator), "Registration button");
    }

    getRegistrationTextElement() {
        return new TextBox(element(registrationTextLocator), "Check text");
    }

    registrationFormEmailErrorTextElement() {
        return new TextBox(element(registrationFormErrorTextLocator), "Email error text");
    }

    registrationFormPasswordErrorTextElement() {
        return new TextBox(element(registrationFormErrorTextLocator), "Password error text");
    }
}

module.exports = new RegistrationPage();