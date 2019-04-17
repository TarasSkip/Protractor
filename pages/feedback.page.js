let BasePage = require('./base.page');
let WebInput = require('../elements/input');
let TextBox = require('../elements/textBox');

let headerLocator = by.css('div h1');
let firstBrowseButtonLocator = by.css('div.cell-7 > div:nth-child(1) > input[type="file"]'); // for line 12 in "test_9.js" file - TO REMOVE

let browseErrorTextLocator = 'div.cell-7 .m_b-sm:nth-of-type(PlaceHolder) .error-field [data-error-type]';
let browseButtonLocator = 'div.cell-7 > div:nth-child(PlaceHolder) > input[type="file"]'; //  div.cell-7 .m_b-sm:nth-of-type(2) input[type="file"] - working


class FeedbackPage extends BasePage {
    async waitForPageToBeAvailable() {
        await this.getHeaderElement().waitForElementToBeVisible(10000);
    }

    // action methods
    async attachFirstFile() {
        await allure.createStep('Attach JPG file', async () => {
            let jpgFilePath = 'D:/1.jpg'; // Test files should be added to repository? -> edit path then
            await this.getBrowseButtonByNumber(1).sendKeys(jpgFilePath);
            await this.getBrowseButtonByNumber(2).waitElementPresence(3000); // Check on second Browse button appearence
        })();
    }

    async attachSecondFile() {
        await allure.createStep('Attach EXE file', async () => {
            let exeFilePath = 'D:/1.exe';
            await this.getBrowseButtonByNumber(2).sendKeys(exeFilePath);
            //  await this.getBrowseButtonByNumber(3).waitElementPresence(3000); ---Invalid check in test case - new button does not appear after error---
        })();
    }

    // elements getters
    getHeaderElement() {
        return new TextBox(element(headerLocator), "Page header");
    }

    getFirstBrowseButtonText() { // for line 12 in "test_9.js" file - TO REMOVE
        return new TextBox(element(firstBrowseButtonLocator), "1st browse button");
    }

    getBrowseErrorTextByButtonNumber(number) {
        let locator2 = browseErrorTextLocator.replace(`PlaceHolder`, `${number}`);
        return new TextBox(element(by.css(locator2), `Error text under ${number} browse button`));
    }

    getBrowseButtonByNumber(number) {
        let locator2 = browseButtonLocator.replace(`PlaceHolder`, `${number}`);
        return new WebInput(element(by.css(locator2), `${number} browse button`));
    }
}

module.exports = new FeedbackPage();