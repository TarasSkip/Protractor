class BaseElement {
    constructor(protractorElement, elementName) {
        this.protractorElement = protractorElement;
        this.elementName = elementName;
    }

    async click() {
        console.log(`Clicking on "${this.elementName}"`);
        await this.protractorElement.click();
    }

    async count() {
        console.log(`Count "${this.elementName}"`);
        let number = await this.protractorElement.count();
        return number;
    }

    async waitForElementToBeVisible(timeout) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.protractorElement), timeout);
    }

    async waitForElementToBeClickable(timeout) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.elementToBeClickable(this.protractorElement), timeout);
    }

    async waitElementStaleness(timeout) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.stalenessOf(this.protractorElement), timeout);
    }

    async waitElementPresence(timeout) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.protractorElement), timeout);
    }

    async mouseMove() {
        await browser.actions().mouseMove(this.protractorElement).perform();
        console.log(`Hover on "${this.elementName}"`);
    }

    async getCssValue(val) {
        let value = await this.protractorElement.getCssValue(val);
        console.log(`Getting "${this.elementName}" CSS value`);
        return value;
    }

    async getAttribute(attr) {
        let attribute = await this.protractorElement.getAttribute(attr);
        console.log(`Getting "${this.elementName}" attribute`);
        return attribute;
    }

    async map() {
        console.log(`Mapping "${this.elementName}"`);
        await this.protractorElement.map();
    }
}

module.exports = BaseElement;