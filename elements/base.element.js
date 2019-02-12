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
}

module.exports = BaseElement;