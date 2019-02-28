class BaseElement {
    constructor(protractorElement, elementName) {
        this.protractorElement = protractorElement;
        this.elementName = elementName;
    }

    async click() {
        console.log(`Clicking on "${this.elementName}"`);
        await this.protractorElement.click();
    }

    async waitForElementToBeVisible(timeout) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.protractorElement), timeout);
    }

    async waitForElementToBeClickable(timeout2) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.elementToBeClickable(this.protractorElement), timeout2);
    }
}

module.exports = BaseElement;