let BasePage = require('./base.page');
let WebInput = require('../elements/input');

let loginFormEmailLocator = by.name('login');
let loginFormPasswordLocator = by.name('password');
let loginButtonLocator = by.css('input[type="submit"]');


class LoginPage extends BasePage {
    // action methods
    async login(email, password) {
        await allure.createStep(`Step 3 - proceed with login '${email}'`, async () => {
            await this.enterLogin(email);
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

    // elements getters
    getLoginFormEmailElement() {
        return new WebInput(element(loginFormEmailLocator), "Email input");
    }

    getLoginFormPasswordElement() {
        return new WebInput(element(loginFormPasswordLocator), "Password input");
    }

    getLoginButtonElement() {
        return new WebInput(element(loginButtonLocator), "Login button");
    }
}

module.exports = new LoginPage();