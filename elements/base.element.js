class BaseElement {
    constructor(protractorElement, elementName) {
        this.protractorElement = protractorElement;
        this.elementName = elementName;
    }

    async click() {
        console.log(`Clicking on "${this.elementName}"`);
        await this.protractorElement.click();
    }
}

module.exports = BaseElement;