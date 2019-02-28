let BasePage = require('./base.page');
let WebInput = require('../elements/input');

let registrationFormEmailLocator = by.name('email');
let registrationFormPasswordLocator = by.name('password');
let registrationFormNicknameLocator = by.name('login');
let registrationButtonLocator = by.css('input[type="submit"]');
let registrationTextLocator = by.css('body > div.wrapper > div.content.row > div > div > div > div.cell-4.cell-md > p');


class RegistrationPage extends BasePage {
    async waitForRegisterToBeClickable() {
        await this.getRegistrationButtonElement().waitForElementToBeClickable(100000);
    }

    // action methods
    async registration(email, password, nickname) {
        await allure.createStep(`Step 3 - proceed with registration '${email}' '${nickname}'`, async () => {
            await this.enterLogin(email);
            await this.enterPassword(password);
            await this.enterNickname(nickname);
            await this.clickRegistrationButton();
        })();
    }

    async enterLogin(name) {
        await this.getRegistrationFormEmailElement().sendKeys(name);
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
        return element(registrationTextLocator);
    }
}

module.exports = new RegistrationPage();