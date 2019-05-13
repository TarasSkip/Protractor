let BaseElement = require('./base.element');

class WebInput extends BaseElement {
    async sendKeys(text) {
        console.log(`Sendig text "${text}" to input "${this.elementName}"`);
        await this.protractorElement.sendKeys(text);
    }

    async clear() {
        console.log(`Clearing text in input "${this.elementName}"`);
        await this.protractorElement.clear();
    }

    //  async selectAll() {
    //      console.log(`Select all text in input "${this.elementName}"`);
    //      await this.protractorElement.selectAll();
    //  }
}

module.exports = WebInput;